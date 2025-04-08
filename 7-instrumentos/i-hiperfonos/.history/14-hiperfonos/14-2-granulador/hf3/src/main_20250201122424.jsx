import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import Waveform from "waveform-playlist";
import "src/styles.css";

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [waveformInstance, setWaveformInstance] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  // Configuración del grabador de audio
  useEffect(() => {
    if (isRecording) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        mediaRecorder.current.onstop = async () => {
          const audioBlob = new Blob(audioChunks.current, {
            type: "audio/wav",
          });
          const arrayBuffer = await audioBlob.arrayBuffer();
          const buffer = await Tone.getContext().rawContext.decodeAudioData(
            arrayBuffer
          );
          setAudioBuffer(buffer);
        };
        mediaRecorder.current.start();
      });
    } else if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
  }, [isRecording]);

  // Visualización de la forma de onda
  useEffect(() => {
    if (audioBuffer) {
      const waves = Waveform({
        container: document.getElementById("waveform"),
        waveColor: "white",
        progressColor: "gray",
        backgroundColor: "black",
        cursorColor: "white",
        barWidth: 2,
        responsive: true,
      });

      waves.load([
        {
          src: URL.createObjectURL(
            new Blob(audioChunks.current, { type: "audio/wav" })
          ),
          name: "Audio",
        },
      ]);
      setWaveformInstance(waves);
    }
  }, [audioBuffer]);

  // Manejo de selección de audio
  const handleSelection = (start, end) => {
    if (waveformInstance) {
      const player = new Tone.Player(audioBuffer).toDestination();
      player.loop = true;
      player.start(0, start, end - start);
    }
  };

  return (
    <div className="app">
      <div id="waveform" className="waveform"></div>
      <button
        className={`record-button ${isRecording ? "recording" : ""}`}
        onClick={() => setIsRecording(!isRecording)}
      ></button>
    </div>
  );
}

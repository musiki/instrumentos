// modules/mediapipe.js
import { onLandmarks, errorMargin } from './cliche.js';

export let faceMesh;

export function setupFaceMesh(video, canvas) {
  const ctx = canvas.getContext('2d');

  faceMesh = new window.FaceMesh({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
  });

  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  });

  faceMesh.onResults(results => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (results.multiFaceLandmarks?.length > 0) {
      for (const landmarks of results.multiFaceLandmarks) {
        window.drawConnectors(ctx, landmarks, window.FACEMESH_TESSELATION,
          { color: "#00FF00", lineWidth: 0.5 });
      }
      onLandmarks(results.multiFaceLandmarks[0]);
    }
  });
}

export function startCamera(video) {
  const camera = new window.Camera(video, {
    onFrame: async () => {
      await faceMesh.send({ image: video });
    },
    width: 640,
    height: 480
  });
  camera.start();
}
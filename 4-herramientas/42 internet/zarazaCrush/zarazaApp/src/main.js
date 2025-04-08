// main.js
import { setupMediapipe } from './mediapipe.js'
import { setupMIDI, cycleMIDIPort, sendMIDIControl } from './midi.js'
import { setupUI, showStatusMessage } from './ui.js'
import { registrarCliche, detectExpressions, getCliches } from './cliche.js'

let midiPortIndex = 0
let midiOutputs = []
let errorMargin = 0.1

async function init() {
  const video = document.getElementById('video')
  const overlay = document.getElementById('overlay')
  const ctx = overlay.getContext('2d')

  // Setup UI & MIDI
  setupUI(registrarCliche)
  midiOutputs = await setupMIDI()
  showStatusMessage('MIDI conectado')

  // Setup Mediapipe + Camera
  await setupMediapipe(video, overlay, ctx, (landmarks) => {
    detectExpressions(landmarks, errorMargin, (label, icon, cc, value) => {
      registrarCliche(label, icon)
      if (midiOutputs.length) {
        sendMIDIControl(midiOutputs[midiPortIndex], cc, value)
      }
    })
  })

  // Key bindings
  window.addEventListener('keydown', e => {
    if (e.key === 'm') {
      midiPortIndex = (midiPortIndex + 1) % midiOutputs.length
      showStatusMessage(`🎛 MIDI Out: ${midiOutputs[midiPortIndex].name}`)
    }
    if (e.key === 'r' && e.ctrlKey) {
      showStatusMessage('📐 Rotación HEAD set: mínimo')
    }
    if (e.key === 'h' && e.altKey) {
      showStatusMessage('📐 Altura HAND set: máximo')
    }
  })
}

document.addEventListener('DOMContentLoaded', init)

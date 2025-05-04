let midiAccess = null
let midiOuts = []
let currentOutIndex = 0

export async function initMIDI() {
  try {
    midiAccess = await navigator.requestMIDIAccess()
    midiOuts = Array.from(midiAccess.outputs.values())
    if (midiOuts.length > 0) {
      showStatus(`🎛️ MIDI OUT: ${midiOuts[0].name}`)
    } else {
      showStatus('⚠️ No MIDI outputs found')
    }
  } catch (e) {
    showStatus('❌ MIDI access denied')
  }
}

export function cycleMIDI() {
  if (!midiOuts.length) return
  currentOutIndex = (currentOutIndex + 1) % midiOuts.length
  const current = midiOuts[currentOutIndex]
  showStatus(`🔁 MIDI OUT: ${current.name}`)
}

export function sendMIDI(cc, value, channel = 0) {
  if (!midiOuts.length) return
  const status = 0xB0 + channel
  midiOuts[currentOutIndex].send([status, cc, value])
}


// cliche.js
export const cliches = JSON.parse(localStorage.getItem('zarazaCliches')) || []

export function saveCliche(label, icon = '🎭') {
  const item = {
    label,
    icon,
    time: new Date().toISOString()
  }
  cliches.push(item)
  localStorage.setItem('zarazaCliches', JSON.stringify(cliches))
  updateClicheList()
  return item
}

export function updateClicheList(container) {
  if (!container) return
  container.innerHTML = cliches.map(c => `<div>${c.icon} ${c.label}</div>`).join('')
}

export function showOverlayCliche({label, icon}) {
  const el = document.createElement('div')
  el.innerText = `${icon} ${label}`
  Object.assign(el.style, {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#fff',
    fontSize: '1.5em',
    background: `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},0.3)`,
    padding: '0.2em 0.5em',
    borderRadius: '5px',
    fontFamily: 'monospace',
    zIndex: 999
  })
  document.body.appendChild(el)
  setTimeout(() => el.remove(), 3000)
}

// ui.js
export function showStatus(text, duration = 3000) {
  const el = document.createElement('div')
  el.innerText = text
  Object.assign(el.style, {
    position: 'fixed',
    top: '0.5em',
    right: '0.5em',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '0.5em 1em',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '1em',
    zIndex: 9999,
    transition: 'opacity 0.3s'
  })
  document.body.appendChild(el)
  setTimeout(() => el.style.opacity = 0.1, duration)
  setTimeout(() => el.remove(), duration + 500)
}

// midi.js
let midiAccess = null
let midiOuts = []
let currentOutIndex = 0

export async function initMIDI() {
  if (!navigator.requestMIDIAccess) {
    console.warn('WebMIDI no soportado')
    return
  }
  try {
    midiAccess = await navigator.requestMIDIAccess()
    midiOuts = Array.from(midiAccess.outputs.values())
    console.log('MIDI outputs:', midiOuts.map(o => o.name))
  } catch (err) {
    console.error('MIDI init failed:', err)
  }
}

export function cycleMIDI() {
  currentOutIndex = (currentOutIndex + 1) % midiOuts.length
  return midiOuts[currentOutIndex]?.name || 'None'
}

export function sendMIDI(cc, value) {
  const output = midiOuts[currentOutIndex]
  if (!output) return
  output.send([0xB0, cc, value])
}

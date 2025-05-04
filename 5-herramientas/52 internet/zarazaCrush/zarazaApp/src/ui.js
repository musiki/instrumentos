
let statusEl;

export function initUI() {
  statusEl = document.createElement('div');
  Object.assign(statusEl.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    padding: '0.5em',
    background: 'rgba(0,0,0,0.8)',
    color: 'white',
    fontFamily: 'monospace',
    fontSize: '0.9em',
    zIndex: 9999,
    textAlign: 'center',
    display: 'none'
  });
  document.body.appendChild(statusEl);
}

export function showStatus(msg, duration = 3000) {
  if (!statusEl) return;
  statusEl.innerText = msg;
  statusEl.style.display = 'block';
  clearTimeout(statusEl._timeout);
  statusEl._timeout = setTimeout(() => {
    statusEl.style.display = 'none';
  }, duration);
}

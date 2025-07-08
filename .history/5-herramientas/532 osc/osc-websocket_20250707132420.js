// osc-ws.js (para [node.script osc-ws] en Max)
const OSC = require('osc-js')
const os = require('os')

// Obtener la IP local no-interna (ej. 192.168.137.1)
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return '127.0.0.1'
}

// Función segura para imprimir (funciona dentro y fuera de Max)
function safePost(...args) {
  if (typeof post === 'function') {
    post(...args)
  } else {
    console.log(...args)
  }
}

// Configuración del servidor WebSocket OSC
const config = {
  wsServer: {
    host: '0.0.0.0',
    port: 8080
  }
}

const osc = new OSC({ plugin: new OSC.WebsocketServerPlugin(config) })

osc.on('/gyro', message => {
  outlet(0, ['gyro', ...message.args])
})

osc.on('/accel', message => {
  outlet(0, ['accel', ...message.args])
})

osc.on('/hello', message => {
  safePost('Handshake OSC recibido: ', message.args[0], '\n')
})

osc.open()

const localIP = getLocalIP()
safePost('OSC WebSocket server corriendo en puerto 8080\n')
safePost('→ Ingresá esta IP en tu WebApp: ', localIP, '\n')

// También podés emitir la IP por outlet(1) si lo deseás
// outlet(1, ['ip', localIP])
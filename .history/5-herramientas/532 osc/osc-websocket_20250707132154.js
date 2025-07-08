// osc-ws.js (para node.script en Max)
const OSC = require('osc-js')

const config = {
  wsServer: {
    host: '172.20.10.8',
    port: 8080  // este es el puerto al que se conecta tu WebApp
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
  post('Handshake recibido: ', message.args[0], '\n')
})

osc.open()

post('OSC WebSocket server corriendo en puerto 8080\n')
const app = require('./index.js')
const server = app.listen(3000, () => { console.log('Awaiting requests ! ') })
module.exports = server

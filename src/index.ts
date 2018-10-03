import vbox = require('./vbox')

const axios = vbox.require('axios', __dirname)

axios.defaults.adapter = vbox.require('./adapter', __dirname)
// disable follow
axios.defaults.maxRedirects = 0

axios.default = axios
export = axios

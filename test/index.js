const test = require('test')
test.setup()

const axios = require('../lib')

describe('basic usage', () => {
  it('get', () => {
    const result = axios({
      method: 'get',
      url: 'http://fibjs.org',
      // responseType:'stream'
    }).then(function (response) {
        console.log('response', response)
        //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      }).catch(err => {
        console.error('err', err.stack)
      });
  })
})

test.run(console.DEBUG)

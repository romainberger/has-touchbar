const os = require('os')
const exec = require('child_process').exec

const platform = os.platform()
// memoization
let __hasTouchbar = undefined

const detectTouchbar = () => {
  return new Promise(resolve => {
    try {
      exec('ioreg', (err, stdout) => {
        if (err) {
          resolve(false)
        }
        else {
          resolve(stdout.includes('AppleEmbeddedOSSupportHost'))
        }
      })
    }
    catch(e) {
      resolve(false)
    }
  })
}

const hasTouchbar = async () => {
  if (typeof __hasTouchbar === 'undefined') {
    __hasTouchbar = await detectTouchbar()
  }

  return __hasTouchbar
}

module.exports = hasTouchbar

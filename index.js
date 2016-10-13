var util = require('util')

var remoteServer = {
  url: '',
  path : '',
  user: '',
  pass: ''
}

var wfs = require("webdav-fs")(
  remoteServer.url,
  remoteServer.user,
  remoteServer.pass
)

wfs.readdir(remoteServer.path + '', function (err, contents) {
  if (!err) {
    console.log(contents)
  } else {
    console.log("Error fetching remote directories:", err.message)
    console.log(util.inspect(err))
  }
}, 'stat')

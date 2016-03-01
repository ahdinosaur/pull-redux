var pull = require('pull-stream')
var Pushable = require('pull-pushable')
var drain = require('pull-stream/sinks').drain

module.exports = pullRedux

function pullRedux (store) {
  return function (read) {
    var stream = Pushable()

    // listen to state changes
    store.subscribe(function () {
      stream.push(store.getState())
    })

    // read new actions
    pull(
      read,
      drain(function (action) {
        store.dispatch(action)
      })
    )

    return stream
  }
}

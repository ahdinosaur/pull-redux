var pull = require('pull-stream')
var Pushable = require('pull-pushable')
var drain = require('pull-stream/sinks').drain

module.exports = pullRedux

function pullRedux (store) {
  return function (read) {
    var unsubscribe
    var drainer

    var stream = Pushable(function (err) {
      if (err) { drainer.abort(err) }
      unsubscribe()
    })

    // listen to state changes
    unsubscribe = store.subscribe(function () {
      stream.push(store.getState())
    })

    // read new actions
    drainer = drain(function (action) {
      store.dispatch(action)
    })

    pull(
      read,
      drainer
    )

    return stream
  }
}

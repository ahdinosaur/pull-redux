var test = require('tape')
var pull = require('pull-stream')
var createStore = require('redux').createStore

var pullRedux = require('../')

test('it works', function (t) {
  var expectedAction = { type: 'hello' }
  var expectedState = { mind: 'ful' }
  var store = createStore(function (state, actualAction) {
    if (actualAction.type[0] !== '@') { // @@redux
      t.equal(actualAction, expectedAction, 'actual action is expected action')
    }
    return state
  }, expectedState)

  pull(
    pull.values([expectedAction]),
    pullRedux(store),
    pull.drain(function (actualState) {
      t.equal(actualState, expectedState, 'actual state is expected state')
      t.end()
    })
  )
})

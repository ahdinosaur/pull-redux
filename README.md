# pull-redux

use redux as a [through](https://github.com/dominictarr/pull-stream-examples/blob/c7d58d9b136682833234eaebb88fd9c6dacf04c2/pull.js#L57-L78) [`pull-stream`](https://github.com/dominictarr/pull-stream).

## install

with [`npm`](https://www.npmjs.com)

```shell
npm install --save pull-stream
```

## api

### `through = pullRedux(store)`

given a [`redux`](http://redux.js.org/) [store](http://redux.js.org/docs/api/Store.html),

return a [through](https://github.com/dominictarr/pull-stream-examples/blob/c7d58d9b136682833234eaebb88fd9c6dacf04c2/pull.js#L57-L78) [`pull-stream`](https://github.com/dominictarr/pull-stream).

### `pull(source, through, sink)`

the `source` must produce [actions](http://redux.js.org/docs/basics/Actions.html).

the `sink` must consume [state](http://redux.js.org/docs/api/Store.html#getState)

## example

at the moment, see [test](./test/index.js)

## license

ISC

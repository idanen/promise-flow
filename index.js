const flow = {
  flowInputs,
  flowProcessors
};

module.exports = flow;

function flowInputs(inputs, promisingAction) {
  return inputs
    .map(input => {
      return function () {
        return promisingAction(input);
      };
    })
    .reduce((promise, fn) => {
      return promise.then(fn);
    }, Promise.resolve());
}

function flowProcessors(initialInput, promisingActions) {
  return promisingActions.reduce((prevPromise, action) => prevPromise.then(action), Promise.resolve(initialInput));
}

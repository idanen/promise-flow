# promise-flow
Wait for promise to resolve before performing the next.

## Sample use:
```javascript
var flow = require('promise-flow');

var promises = [...];
var done = flow(promises);
done.then(() => {
  console.log('All work is done');
});
```

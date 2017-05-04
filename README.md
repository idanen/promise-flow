# promise-flow
Wait for promise to resolve before performing the next.

## Can be used in 2 ways:
1. When you want to pass data through multiple processing functions, all returning a promise:
```javascript
var flow = require('promise-flow');

var endpoints = [
  'https://github.com/my-user/my-repo/README.md',
  'https://github.com/my-user/another-repo/README.md',
  'https://github.com/my-user/yet-another-repo/README.md'
];
flow.flowInputs(endpoints, downloader)
  .then(() => {
    console.log(`${files.length} processed`);
  });
```

2. When you want to pass an initial input through multiple "phases":
```javascript
const flow = require('promise-flow');
const initialValue = 'https://rest.endpoint.com/my-amazing-data';
const processors = [fetch, response => response.json(), data => data.filter(...)];

flow.flowProcessors(initialInput, processors)
  .then(product => {
    console.log('My work here is done:', product);
  });
```

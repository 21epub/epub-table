# epub-table

> A simple and powerful Datatable for React based on antd ProTable.

[![NPM](https://img.shields.io/npm/v/epub-table.svg)](https://www.npmjs.com/package/epub-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/epub-table.svg?branch=master)](https://travis-ci.com/epub-table) ![Codecov](https://img.shields.io/codecov/c/github/epub-table)

## Install

```bash
npm install --save epub-table
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'epub-table'
import 'epub-table/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

For Details: See Example

## Developing and running on localhost

First install dependencies and then install peerDeps for parcel dev:

```sh
npm install
npm run install-peers
```

To run Example in hot module reloading mode:

```sh
npm start
```

To create a parcel production build:

```sh
npm run build-prod
```

To create a bundle library module build:

```sh
npm run build
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

## License

MIT © [garry](https://github.com/garry)

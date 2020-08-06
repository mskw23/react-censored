# react-censored

> Small library for censoring your text

[![NPM](https://img.shields.io/npm/v/react-censored.svg)](https://www.npmjs.com/package/react-censored) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![ReactCensored](./img.png?raw=true 'ReactCensored')

## Install

```bash
npm install --save react-censored
yarn add react-censored
```

## Usage

```tsx
import React from 'react'
import { ReactCensored } from 'react-censored'

const ParagraphWithCensor = () => {
  return (
    <main>
      <h1>
        React
        <ReactCensored blur={8} color='hotpink'>
          Censored
        </ReactCensored> 👀
      </h1>
    </main>
  )
}

export default ParagraphWithCensor
```

## TODO

- Add some serious unit tests ¯\_(ツ)\_/¯

## License

MIT © [mskwio](https://github.com/mskwio)

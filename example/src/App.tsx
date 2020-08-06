import React from 'react'
import { ReactCensored } from 'react-censored'

const ParagraphWithCensor = () => {
  return (
    <main>
      <h1>
        React
        <ReactCensored className='lorem' blur={8} color='hotpink'>
          Censored
        </ReactCensored>{' '}
        👀
      </h1>
    </main>
  )
}

export default ParagraphWithCensor

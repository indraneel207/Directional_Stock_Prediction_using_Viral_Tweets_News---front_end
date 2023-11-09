'use client'

import { useState } from 'react'

const MODELS = {
  SVM: 'svm',
  'LOGISTIC REGRESSION': 'lr',
  BERT: 'bert'
}

const DATASET = {
  'APPLE DAILY': 'apple_daily',
  'APPLE HOURLY': 'apple_hourly',
  'AMAZON DAILY': 'amazon_daily',
  'AMAZON HOURLY': 'amazon_hourly'
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [isShowResults, setIsShowResults] = useState(false)
  const [isTrendUp, setIsTrendUp] = useState(false)
  
  const [text, setText] = useState('')
  const [modelName, setModelName] = useState(MODELS.SVM)
  const [dataset, setDataset] = useState(DATASET['AMAZON DAILY'])

  const handleOnTextChange = (event) => setText(event.target.value)

  const handleOnModelChange = (event) => setModelName(event.target.value)

  const handleOnDatasetChange = (event) => setDataset(event.target.value)

  const handleOnReset = () => {
    setText('')
    setModelName(MODELS.SVM)
    setDataset(DATASET['AMAZON DAILY'])
    setIsShowResults(false)
    setIsLoading(false)
  }

  const handleOnSubmit = async () => {
    setIsShowResults(true)
    setIsLoading(true)
    const response  = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.json())
    setIsLoading(false)
  }

  const renderTrendUp = () => (isShowResults && !isLoading && isTrendUp) && (
    <div className='flex flex-col items-center justify-center'>
      <svg
        class='text-blue-400 w-36 h-36'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
      </svg>
      <p className='font-bold text-blue-400 text-base mt-2'>The Trend is upward!😁</p>
    </div>
  )

  const renderTrendDown = () => (isShowResults && !isLoading && !isTrendUp) && (
    <div className='flex flex-col items-center justify-center'>
      <svg
        class='text-blue-400 w-36 h-36'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' />
      </svg>

      <p className='font-bold text-blue-400 text-base mt-2'>The Trend is Downward!😓</p>
    </div>
  )

  const renderLoading = () => (isShowResults && isLoading) && (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-white'>Loading...</h1>
    </div>
  )

  return (
    <main className='flex min-h-screen flex-col items-center m-10 font-serif'>
      <h2 className='font-bold text-blue-400 text-lg mb-6'>Stock Prediction Analysis 💹</h2>
      <div className='flex flex-col border-t-8 border-l-2 border-blue-400 p-10'>
        <div className='flex flex-col border-b-8 border-r-2 border-blue-400 p-10'>
          <div className='flex items-center justify-between my-2'>
            <label className='font-semibold text-white mr-8'>News to be checked:</label>
            <textarea
              name='Test text'
              rows={1}
              type='text'
              placeholder='Enter the Text'
              onChange={handleOnTextChange}
              value={text}
              className='border-b-2 border-blue-400 bg-transparent text-blue-400'
            />
          </div>
          <div className='flex items-center justify-between my-2'>
            <label className='font-semibold text-white'>Select a Model:</label>
            <select
              name='Model Selection'
              value={modelName}
              onChange={handleOnModelChange}
              className='border-b-2 border-blue-400 bg-transparent text-blue-400 p-2'
            >
              {Object.entries(MODELS).map(([key, value]) => (
                <option key={key} value={value} className='text-center'>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className='flex items-center justify-between my-2'>
            <label className='font-semibold text-white'>Select a Dataset:</label>
            <select
              name='Dataset Selection'
              value={dataset}
              onChange={handleOnDatasetChange}
              className='border-b-2 border-blue-400 bg-transparent text-blue-400 p-2'
            >
              {Object.entries(DATASET).map(([key, value]) => (
                <option key={key} value={value} className='text-center'>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-row  justify-around items-center'>
            <button className='bg-blue-400 mt-12 hover:bg-blue-200 flex-2 py-2 px-4' onClick={handleOnSubmit}>Check the trend 💭</button>
            <button className='border-2 border-blue-400 mt-12 hover:bg-blue-200 text-white py-2 px-4' onClick={handleOnReset}>
              Restart 🧹
            </button>
          </div>
        </div>
      </div>
      {renderLoading()}
      {renderTrendUp()}
      {renderTrendDown()}
    </main>
  )
}

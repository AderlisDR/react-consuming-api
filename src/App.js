import React, { useState, useEffect } from 'react'
import CardList from './CardList'

function App() {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=pOUM6a7XgBx6mxRs9K4f822C7PIi8IPJkxeADmRK&count=6')
    .then(response => response.json())
    .then(json => setDataList(json))
  }, [])
  return (
    <CardList dataList={dataList} />
  )
}

export default App;

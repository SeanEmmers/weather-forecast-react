import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header.js'
import WeatherGrid from './components/weather_grid/WeatherGrid'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`
      `)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  })

  return <div className="container">
    <Header/>
    <WeatherGrid isLoading={isLoading} items={items}/>
  </div>
}

export default App;

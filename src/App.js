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
      const result = await axios(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6865cb5acba8f25f651d919c1b524a65
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

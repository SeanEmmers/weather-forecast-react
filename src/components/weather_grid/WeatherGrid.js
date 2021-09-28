import React from 'react'

const WeatherGrid = ({ items, isLoading }) => {
  return isLoading ? (
  <h1>Loading...</h1>
  ) : (
  <section>
      <h1>{items.name}</h1>
    
  </section>
  )
}

export default WeatherGrid
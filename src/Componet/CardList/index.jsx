import React  from 'react'
import '../../App.css'
import Card from '../Card/Card'
export const Cardlist = ({citieList}) => {
  return (
    <div className='cardlist'>
    {
      citieList.map(city => <Card key={city} city={city}/>)
    }
    
  </div>
  )
}

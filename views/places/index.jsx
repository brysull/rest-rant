
const React = require('react')
const Def = require('../default')

function placesIndex (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${index}`} >
            {place.name}
          </a>
        </h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  
    return (
      <Def>
          <main>
              <h1>Rest-RANT: Rants and Raves</h1>
              <div className="row">
                {placesFormatted}
              </div>
              
          </main>
      </Def>
  )
  }
  
module.exports = placesIndex

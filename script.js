function grabABeer () {
  fetch('https://api.punkapi.com/v2/beers/random')
    .then(response => response.json())
    .then(beer => {
      const beerName = beer[0].name

      // Creates <h1></h1>
      //   let element = '<h1></h1>'
      const nameElement = document.createElement('h1')

      // Adds text <h1>Beer name</h1>
      //   element = '<h1>Beer Name</h1>'
      nameElement.textContent = beerName

      // Put our <h1> inside of the <div id="beer">
      //   document.querySelector('#beer').innerHTML = element
      document.querySelector('#beer').appendChild(nameElement)

      const description = beer[0].description
      const descriptionElement = document.createElement('p') // <p></p>
      descriptionElement.textContent = description // <p>Description</p>
      document.querySelector('#beer').appendChild(descriptionElement)
      //<div id="beer">...<p>Descrption</p> </div>
    })
}

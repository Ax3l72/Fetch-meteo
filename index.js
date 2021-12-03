// Créé une requète fetch pour récupérer les données
function getFetch(){
  var input = document.getElementById('mySearch')
  
  if(input == undefined){ var city = "Paris" }else{var city = input.value}


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=48fe072d754d789378b9e722f15478f3`)
.then(response => response.json())
.then((data) => {
  const app = document.getElementById('app')
  app.innerHTML =''
  buildCard(data)
})
.catch(function(error) {
  input = ""
  getFetch()
});
}

// Créé la barre de recherche
function buildSearch(){
  const apps = document.getElementById('app')
  const container = document.createElement('div')
  const colmd12 = document.createElement('div')
  const row = document.createElement('div')
  const search = document.createElement('input')

  container.setAttribute('class', 'container')
  row.setAttribute('class', 'row')
  colmd12.setAttribute('class', 'col-md-12 py-3')
  search.setAttribute('type', 'text')
  search.setAttribute('id', 'mySearch')

  apps.appendChild(container)
  container.appendChild(row)
  row.appendChild(colmd12)
  colmd12.appendChild(search)

  // Event de la touche entrée afin de rechercher a nouveau
  search.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      getFetch()
    } else return;
  })
}

// Crée la card
function buildCard(data){
  
  const app = document.getElementById('app')
  const container = document.createElement('div')
  const row = document.createElement('div')
  const card = document.createElement('div')
  const cardBody = document.createElement('div')
  const cardTitle = document.createElement('div')
  

  container.setAttribute('class', 'container')
  row.setAttribute('class', 'row')
  card.setAttribute('class', 'card')
  cardBody.setAttribute('class', 'card-body')
  cardTitle.setAttribute('class', 'card-title')
 
  cardTitle.innerHTML = `<img src=' http://openweathermap.org/img/wn/${data.weather[0].icon}.png'> ${data.name}, ${data.main.temp}°c <br><br> ${data.weather[0].description}`

  app.appendChild(container)
  container.appendChild(row)
  row.appendChild(card)
  card.appendChild(cardBody)
  card.appendChild(cardTitle)

  buildSearch()
}

// Génération de la card avec la ville par defaut "Paris"
getFetch()


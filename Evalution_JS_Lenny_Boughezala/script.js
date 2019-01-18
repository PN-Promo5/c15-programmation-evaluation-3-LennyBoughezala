//1.1
//create container
let ctn = document.createElement("container")
//create tittle
let cinemaName = document.createElement("h1")
cinemaName.textContent = "Cinema le dauphin"
ctn.appendChild(cinemaName)
//create paragraph
let cinemaDescription = document.createElement("p")
cinemaDescription.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)."
ctn.appendChild(cinemaDescription)
//p contain button
let moreMovie = document.createElement("p");
ctn.appendChild(moreMovie)
//create button for see more movies
let seeMovieButton = document.createElement("input")
seeMovieButton.type = "button"
seeMovieButton.value = "Voir les films à l’affiche cette semaine"
seeMovieButton.addEventListener("click", seeMoreMovie, false)
moreMovie.appendChild(seeMovieButton)

function showCinema() {
  document.body.appendChild(ctn)
  ctn.hidden = false
}



showCinema()
// 1.2
//create board in two dimension
let moviesBoard = [
  ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
  ["IN MY ROOM", "Ulrich Köhler", " Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", " Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", " vostfr"]
]

console.log(moviesBoard);

//1.3
//create fonction for element in <table>
let ctn2 = document.createElement("container")

function createTable(board) {
  ctn2.hidden = true //for conceals my container
  document.body.appendChild(ctn2)
  let table = document.createElement("table")
  ctn2.appendChild(table)
  let thead = document.createElement("thead")
  table.appendChild(thead)
  let trh = document.createElement("tr")
  thead.appendChild(trh)
  let tbody = document.createElement("tbody")
  table.appendChild(tbody)
  let currentElement
  let currentElement2
  let boardBis = []
  let boardTh = board[0]
  let i = 0
  let j = 1
  let k = 0
  //First elmt of my board becomes <th>
  while (i < boardTh.length) {
    currentElement = boardTh[i]
    let th = document.createElement("th")
    trh.appendChild(th)
    th.textContent = currentElement
    i++
  }
  //create <tr>  for my future <td>
  while (j < board.length) {
    boardBis = board[j]
    let trb = document.createElement("tr")
    tbody.appendChild(trb)
    //Other elmt of my board becomes <td>
    while (k < boardBis.length) {
      currentElement2 = boardBis[k]
      let td = document.createElement("td")
      td.textContent = currentElement2
      trb.appendChild(td)
      k++
    }
    j++
    k = 0
  }
 return table
}
createTable(moviesBoard)

//1.4
//create fonction for poster my container of exercice 1.3
function seeMoreMovie() {
  ctn.hidden = true
  ctn2.hidden = false
}




//EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2 EXERCICE 2

//2.1

let temperatureBoard = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["acide sulfurique", "10", "290"],
  ["alcool éthyliqe", "-114", "78"],
  ["aluminium", "660", "2450"]
]

// console.log(temperatureBoard);

//2.2

function temperatureOfBoiling(board, number) {
  let i = 0
  let j = 0
  let currentElement
  let currentElement2
  let boardBis = []
  let boilingBoard = []
  while (i < board.length) {
    boardBis = board[i]
    while (j < boardBis.length) {
      currentElement = boardBis[0]
      currentElement2 = boardBis[2]
      if (currentElement2 > number) {
        boilingBoard.push(currentElement)
      }
      j++
    }
    i++
    j = 0
  }
  return boilingBoard
}

  // let tab = temperatureOfBoiling(temperatureBoard, 200 )
  // console.log(tab);

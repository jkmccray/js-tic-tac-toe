const container = document.querySelector("#container")
const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

const playerOneCombo = []
const playerTwoCombo = []

let playerTurn = "one"

container.addEventListener("click", () => {
  let boxId = event.target.id
  let idNum = boxId.split("--")[1]
  let textId = `text--${idNum}`
  let textEl = document.querySelector(`#${textId}`)
  if (event.target.id.includes("box--") && playerTurn === "one") {
    textEl.textContent = "X"
    textEl.classList.add("first-clicked-box")
    playerTurn = "two"
    playerOneCombo.push(idNum)
    checkForWinningCombo(playerOneCombo)
  } else if (event.target.id.includes("box--") && playerTurn === "two") {
    textEl.textContent = "O"
    textEl.classList.add("second-clicked-box")
    playerTurn = "one"
    playerTwoCombo.push(idNum)
    checkForWinningCombo(playerTwoCombo)
  }

  console.log("Player one choices " + playerOneCombo)
  console.log("Player two choices " + playerTwoCombo)
})


function checkForWinningCombo(playerArr) {
  playerArr.sort()
  winningCombos.forEach(combo => {
    debugger
    let threeMeansWin = 0
    for (i = 0, j = 0; i < playerArr.length, j < combo.length; i++ , j++) {
      const playerSelection = playerArr[i]
      const winningOption = combo[j]
      if (playerSelection === winningOption && threeMeansWin < 3) {
        threeMeansWin++
      } 
      if (threeMeansWin === 3) {
        console.log("Winner!")
      } 
    }
    console.log(threeMeansWin)
  })
}

// const arr1 = [1,3,7]
// const arr2 = [2,3,8]
// const arr3 = [1,3,7]

// let threeMeansWin = 0
// for (i = 0, j = 0; i < arr1.length, j < arr3.length; i++ , j++) {
//   const playerSelection = arr1[i]
//   const winningOption = arr3[j]
//   if (playerSelection === winningOption && threeMeansWin < 3) {
//     threeMeansWin++
//   } 
//   if (threeMeansWin === 3) {
//     console.log("Winner!")
//   }
// }
// console.log(threeMeansWin)

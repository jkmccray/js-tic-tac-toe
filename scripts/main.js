const container = document.querySelector("#container")
let clickNum = 1

container.addEventListener("click", () => {
  const boxId = event.target.id
  const idNum = boxId.split("--")[1]
  const textId = `text--${idNum}`
  const textEl = document.querySelector(`#${textId}`)
  if (event.target.id.includes("box--") && clickNum%2 === 0) {
    textEl.textContent = "O"
    textEl.classList.add("second-clicked-box")
  } else {
    textEl.textContent = "X"
    textEl.classList.add("first-clicked-box")
  }
  clickNum++
})











const elFactory = (elType, attributesObj, txt) => { 
  const newEl = document.createElement(elType)
  for (let attribute in attributesObj) {
    if (attribute === "classes") {
      const classesArray = attributesObj[attribute]
      classesArray.forEach(cls => {
        newEl.classList.add(cls)
      });
    } else {
      newEl[attribute] = attributesObj[attribute]
    }
  }
  newEl.textContent = txt || null
  return newEl
}



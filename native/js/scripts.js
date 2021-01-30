let trans1Checkbox
let trans1
const load = () => {
  trans1 = document.getElementsByClassName('trans1')[0]
  trans1Checkbox = document.getElementById('trans1-include')

  trans1Checkbox.onclick = () => {
    trans1.style.transition = trans1Checkbox.checked ? "all 500ms ease-in-out" : ""
  }
}

const grow = () => {
  trans1.style.height = "200px"
  trans1.style.width = "200px"
}
const shrink = () => {
  trans1.style.height = "100px"
  trans1.style.width = "100px"
}

const show = () => {
  trans1.style.opacity = "1"
}
const hide = () => {
  trans1.style.opacity = "0"
}

const darken = () => {
  trans1.style.backgroundColor = "#333333";
  trans1.style.color = "#FFFFFF";
}
const lighten = () => {
  trans1.style.backgroundColor = "#EEEEEE";
  trans1.style.color = "#333333";
}

const colors = ['#ED0A3F', '#FF8833', '#FBE870', '#3AA655', '#4997D0', '#4F69C6', '#732E6C']
let colorIdx = 0
const colorize = () => {
  colorIdx = 0
  changeColor()
}
const changeColor = () => {
  trans1.style.backgroundColor = colors[colorIdx]
  colorIdx++
  if(colorIdx < colors.length) {
    setTimeout(() => changeColor(), 500)
  }
}
const monochrome = () => {
  darken()
}

const turn = () => {
  trans1.style.transform = "rotate(45deg)"
}
const straight = () => {
  trans1.style.transform = "rotate(0deg)"
}
const btnA = document.querySelector('.btnA')
const btnR = document.querySelector('.btnR')
const input = document.querySelector('.input')
const ul = document.querySelector('ul')
const body = document.querySelector('body')

input.addEventListener('keydown', (e) =>{
    if (e.key === 'Enter'){
        arr()
    } else {
        if (e.key === 'Shift') alert('enter bas')
    }
})
btnA.addEventListener('click', () =>{
  arr()
})
btnR.addEventListener('click', () =>{
    ul.innerHTML = ""
    body.style.background = ""
})
function arr (){
    if (input.value !== ""){
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between">
${input.value}
<button class="del-btn btn btn-danger">delete</button>
</li>`
        body.style.background = `${random()}`
    }
    input.value = ""
}
ul.addEventListener('click', () =>{
    if (event.target.classList.contains('del-btn')){
        event.target.parentNode.remove()
    }
})
function random(){
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += Math.floor(Math.random() * 10)
    }
    return color
}

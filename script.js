var getParent = document.getElementById('eldest-parent')
let createNewEldest = document.createElement('div')
createNewEldest.textContent = 'Diakses Melalui Eldest Parent'
getParent.replaceChild(createNewEldest, getParent.firstChild)



let getSibling = document.getElementById('a-child')
console.log(getSibling.previousElementSibling)
var createPrev = document.createElement('div')
createPrev.innerText = 'Diakses Melalui a Child'
getSibling.replaceChild(createPrev,getSibling.previousElementSibling)
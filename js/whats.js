let whats = document.querySelector('#whats')
let whatsTexto = document.querySelector('#whatsTexto')

whats.addEventListener('mouseover', (e)=>{
    whatsTexto.style.display = 'inline'
})

whats.addEventListener('mouseout', (e)=>{
    whatsTexto.style.display = 'none'
})
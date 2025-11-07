const getColor = document.getElementById('color-el')
const getMode = document.getElementById('color-type')
const colorBtn = document.getElementById('get-scheme-btn')

let color1 = document.getElementById('c1')
let color2 = document.getElementById('c2')
let color3 = document.getElementById('c3')
let color4 = document.getElementById('c4')
let color5 = document.getElementById('c5')

let colorEl = '00000'

getColor.addEventListener('change', function(e){
    colorEl = e.target.value.substring(1)
})

let mode = 'monochrome'

getMode.addEventListener('change', function(e){
    mode = e.target.value
})


colorBtn.addEventListener('click', function(e){
    e.preventDefault()
    
    colorEl.substring(1)
    mode.toLowerCase()
    console.log(colorEl)
    console.log(mode)

    fetch (`https://www.thecolorapi.com/scheme?hex=${colorEl}&mode=${mode}`)
    .then(response => response.json())
    .then(data => {
        
            color1.style.backgroundColor = data.colors[0].hex.value
            color2.style.backgroundColor = data.colors[1].hex.value
            color3.style.backgroundColor = data.colors[2].hex.value
            color4.style.backgroundColor = data.colors[3].hex.value
            color5.style.backgroundColor = data.colors[4].hex.value

        document.getElementById('hex1').textContent = data.colors[0].hex.value
        document.getElementById('hex2').textContent = data.colors[1].hex.value
        document.getElementById('hex3').textContent = data.colors[2].hex.value
        document.getElementById('hex4').textContent = data.colors[3].hex.value
        document.getElementById('hex5').textContent = data.colors[4].hex.value
        
            
    })

})
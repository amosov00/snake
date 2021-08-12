const app = document.querySelector('#app')
const h1 = document.querySelector('#h1')
const block = document.querySelector('#block')
const buttonRepeat = document.querySelector('#repeat')
const size = 7

Notification.requestPermission()

const not = new Notification('3424', {
    body: 'dgsdfgdsf'
})

function fildGenerate() {
    const elem = document.createElement('div')
    app.append(elem)
    for(let i = 0; i <= size;i++) {
        const elem = document.createElement('div')
        elem.classList.add('flex')
        elem.id = `flex${i}`
        app.append(elem)
        for(let r = 0; r <= size;r++) {
            const rowElem = document.createElement('div')
            rowElem.classList.add('box')
            rowElem.id = `row${i}col${r}`
            elem.append(rowElem)
        }
    }
}
fildGenerate()



let xder = yder = Math.floor(size/2)
let target = []
let key
let timer
let counter = 0
let length = 1
let blockNone = true

function random(s) {
    return Math.floor(Math.random() * Math.floor(s + 1))
}

let point = document.querySelector(`#row${random(size)}col${random(size)}`)
point.classList.add('green')



document.addEventListener('keydown',async (event)=>{

    if(event.code === 'ArrowRight' && key !== 'ArrowRight' && key !== 'ArrowLeft' && blockNone) {
        key = 'ArrowRight'
        clearTimeout(timer)
        let start = 0
        while (xder <= size) {
            if (target && counter >= length) {
                target[counter - length].classList.remove('red')
            }
            target[counter] = document.querySelector(`#row${yder}col${xder}`)
            if (target[counter].classList.contains('red') && start !== 0) {
                block.style.display = 'block'
                blockNone = false
                console.log('вы проиграли')
                break
            }
            target[counter].classList.add('red')
            if (target[counter].id === point.id) {
                point.classList.remove('green')
                let randomString = `#row${random(size)}col${random(size)}`
                while (document.querySelector(randomString).classList.contains('red')) {
                    randomString = `#row${random(size)}col${random(size)}`
                }
                point = document.querySelector(randomString)
                point.classList.add('green')
                const score = length
                length++
                h1.innerHTML = score
            }
            await new Promise((resolve)=>{timer = setTimeout(()=>{resolve()}, 200)})
            if (xder === size) {
                xder = 0
            } else {
                xder++
            }
            if (key !== 'ArrowRight') {
                start = 0
                break
            }
            counter++
            start++
        }
    } else if(event.code === 'ArrowLeft' && key !== 'ArrowLeft' && key !== 'ArrowRight' && blockNone) {
        key = 'ArrowLeft'
        clearTimeout(timer)
        let start = 0
        while (xder <= size) {
            if (target && counter >= length) {
                target[counter - length].classList.remove('red')
            }
            target[counter] = document.querySelector(`#row${yder}col${xder}`)
            if (target[counter].classList.contains('red') && start !== 0) {
                block.style.display = 'block'
                blockNone = false
                console.log('вы проиграли')
                break
            }
            target[counter].classList.add('red')
            if (target[counter].id === point.id) {
                point.classList.remove('green')
                let randomString = `#row${random(size)}col${random(size)}`
                while (document.querySelector(randomString).classList.contains('red')) {
                    randomString = `#row${random(size)}col${random(size)}`
                }
                point = document.querySelector(randomString)
                point.classList.add('green')
                const score = length
                length++
                h1.innerHTML = score
            }
            await new Promise((resolve)=>{timer = setTimeout(()=>{resolve()}, 200)})
            if (xder === 0) {
                xder = size
            } else {
                xder--
            }
            if (key !== 'ArrowLeft') {
                start = 0
                break
            }
            counter++
            start++
        }
    } else if(event.code === 'ArrowDown' && key !== 'ArrowUp' && key !== 'ArrowDown' && blockNone) {
        key = 'ArrowDown'
        clearTimeout(timer)
        let start = 0
        while (yder <= size) {
            if (target && counter >= length) {
                target[counter - length].classList.remove('red')
            }
            target[counter] = document.querySelector(`#row${yder}col${xder}`)
            if (target[counter].classList.contains('red') && start !== 0) {
                block.style.display = 'block'
                blockNone = false
                console.log('вы проиграли')
                break
            }
            target[counter].classList.add('red')
            if (target[counter].id === point.id) {
                point.classList.remove('green')
                let randomString = `#row${random(size)}col${random(size)}`
                while (document.querySelector(randomString).classList.contains('red')) {
                    randomString = `#row${random(size)}col${random(size)}`
                }
                point = document.querySelector(randomString)
                point.classList.add('green')
                const score = length
                length++
                h1.innerHTML = score
            }
            await new Promise((resolve)=>{timer = setTimeout(()=>{resolve()}, 200)})
            if (yder === size) {
                yder = 0
            } else {
                yder++
            }
            if (key !== 'ArrowDown') {
                start = 0
                break
            }
            counter++
            start++
        }
    } else if(event.code === 'ArrowUp' && key !== 'ArrowUp' && key !== 'ArrowDown' && blockNone) {
        key = 'ArrowUp'
        clearTimeout(timer)
        let start = 0
        while (yder <= size) {
            if (target && counter >= length) {
                target[counter - length].classList.remove('red')
            }
            target[counter] = document.querySelector(`#row${yder}col${xder}`)
            if (target[counter].classList.contains('red') && start !== 0) {
                block.style.display = 'block'
                blockNone = false
                console.log('вы проиграли')
                break
            }
            target[counter].classList.add('red')
            if (target[counter].id === point.id) {
                point.classList.remove('green')
                let randomString = `#row${random(size)}col${random(size)}`
                while (document.querySelector(randomString).classList.contains('red')) {
                    randomString = `#row${random(size)}col${random(size)}`
                }
                point = document.querySelector(randomString)
                point.classList.add('green')
                const score = length
                length++
                h1.innerHTML = score

            }
            await new Promise((resolve)=>{timer = setTimeout(()=>{resolve()}, 200)})
            if (yder === 0) {
                yder = size
            } else {
                yder--
            }
            if (key !== 'ArrowUp') {
                start = 0
                break
            }
            counter++
            start++
        }
    }
})

buttonRepeat.addEventListener('click', ()=>{
    blockNone =  true
    h1.innerHTML = 0
    length = 1
    app.innerHTML = ''
    fildGenerate()
    xder = yder = Math.floor(size/2)
    target = []
    key = null
    timer = null
    counter = 0
    length = 1
    point = document.querySelector(`#row${random(size)}col${random(size)}`)
    point.classList.add('green')
    block.style.display = 'none'
})

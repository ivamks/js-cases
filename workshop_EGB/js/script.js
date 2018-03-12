function hide() {
    let x = document.getElementsByClassName('cidade')
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }
    document.body.style.backgroundColor = `#${hx()}${hx()}${hx()}`
}

function show() {
    let x = document.getElementsByClassName('cidade')
    for (let i = 0; i < x.length; i++) {
        let color = `#${hx()}${hx()}${hx()}`
        x[i].style.backgroundColor = color
        x[i].style.display = 'block'
    }
    document.body.style.backgroundColor = `#${hx()}${hx()}${hx()}`
}

function hx(){
	return parseInt((Math.random() * 255)).toString(16).padStart(2)
}

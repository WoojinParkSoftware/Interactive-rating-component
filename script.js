let score01 = document.getElementById('score01')

let score02 = document.getElementById('score02')

let score03 = document.getElementById('score03')

let score04 = document.getElementById('score04')

let score05 = document.getElementById('score05')

let beforesubmit = document.querySelector('section.beforesubmit')
let aftersubmit = document.querySelector('section.aftersubmit')
let realscore = document.getElementById('realscore')


function clicker1() {
    score01.style.color = 'white'
    score01.style.background = '#7d8899'

    score02.style.background = ''
    score02.style.color = ''

    score03.style.background = ''
    score03.style.color = ''

    score04.style.background = ''
    score04.style.color = ''

    score05.style.background = ''
    score05.style.color = ''
}

function clicker2() {
    score01.style.background = ''
    score01.style.color = ''

    score02.style.background = '#7d8899'
    score02.style.color = 'white'

    score03.style.background = ''
    score03.style.color = ''

    score04.style.background = ''
    score04.style.color = ''

    score05.style.background = ''
    score05.style.color = ''
}

function clicker3() {
    score01.style.background = ''
    score01.style.color = ''

    score02.style.background = ''
    score02.style.color = ''

    score03.style.background = '#7d8899'
    score03.style.color = 'white'

    score04.style.background = ''
    score04.style.color = ''

    score05.style.background = ''
    score05.style.color = ''
}

function clicker4() {
    score01.style.background = ''
    score01.style.color = ''

    score02.style.background = ''
    score02.style.color = ''

    score03.style.background = ''
    score03.style.color = ''

    score04.style.background = '#7d8899'
    score04.style.color = 'white'

    score05.style.background = ''
    score05.style.color = ''
}

function clicker5() {
    score01.style.background = ''
    score01.style.color = ''

    score02.style.background = ''
    score02.style.color = ''

    score03.style.background = ''
    score03.style.color = ''

    score04.style.background = ''
    score04.style.color = ''

    score05.style.background = '#7d8899'
    score05.style.color = 'white'
}

function clicker6() {
    let inputscores = document.getElementsByName('number')
    let score = ''
    if (inputscores[0].checked) {
        score = 1
        beforesubmit.style.display = 'none'
        aftersubmit.style.display = 'flex'
        realscore.innerHTML = '1'
    } else if (inputscores[1].checked) {
        score = 2
        beforesubmit.style.display = 'none'
        aftersubmit.style.display = 'flex'
        realscore.innerHTML = '2'
    } else if (inputscores[2].checked) {
        score = 3
        beforesubmit.style.display = 'none'
        aftersubmit.style.display = 'flex'
        realscore.innerHTML = '3'
    } else if (inputscores[3].checked) {
        score = 4
        beforesubmit.style.display = 'none'
        aftersubmit.style.display = 'flex'
        realscore.innerHTML = '4'
    } else if (inputscores[4].checked) {
        score = 5
        beforesubmit.style.display = 'none'
        aftersubmit.style.display = 'flex'
        realscore.innerHTML = '5'
    }
}
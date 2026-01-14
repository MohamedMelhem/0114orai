import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `

<div class="container mt-3">

`

setupCounter(document.querySelector('#counter'))

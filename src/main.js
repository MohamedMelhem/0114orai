import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
 <form action="/action_page.php">

  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value=""><br>

  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value=""><br><br>

    <label for="email">Email :</label><br>
  <input type="text" id="email" name="email" value=""><br><br>

  <input type="submit" value="Submit">
</form> 


  </div>
`

setupCounter(document.querySelector('#counter'))

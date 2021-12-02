import {html, render} from 'https://unpkg.com/lit-html?module'


//for nav bar section
const op_li = ["Substraction", "Multiplication", "Division"]
const list = (op_li) =>
    html `
    ${op_li.map((item) =>
      html`<li><a data-toggle="tab" href=#${item}>${item}</a></li>`
  )}
    `
render(list(op_li), document.getElementById("op_list"))


// For inputs and form section
const num1 = "Give number 1 :"
const num2 = "Give number 2 :"
const res_list = ["result1", "result2", "result3", "result4"]
const forms = (num1, num2, op, res) =>
html `
  <br>
  <form action="" >
     <b>${num1}</b>
    <input type="text" class="form-control" id="inputSuccess">
    <br>
   <b>${num2}</b>
    <input type="text" class="form-control" id="inputSuccess">
    <br>
   <input type="submit" class="btn btn-success" value=${op}>
  </form>
  <span id=${res}></span>
`
render(forms(num1, num2, "Add", "result1"), document.getElementById('add'))
render(forms(num1, num2, "Substract", "result2"), document.getElementById('Substraction'))
render(forms(num1,num2, "Multiply", "result3"), document.getElementById('Multiplication'))
render(forms(num1,num2, "Divide", "result4"), document.getElementById('Division'))

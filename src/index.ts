




import { functionParamsExample, objectTypeExample, arrayTypesExample, unionTypeExample, funcTypeExample } from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!
const arrayenumtuple = document.querySelector('#arrayTypes')!
const unionliteral = document.querySelector('#unionTypes')!
const functype = document.querySelector('#funcAsType')!

//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', loadExample.bind(this, functionParamsExample))
objectTypesButton.addEventListener('click', loadExample.bind(this, objectTypeExample))
arrayenumtuple.addEventListener('click', loadExample.bind(this, arrayTypesExample))
unionliteral.addEventListener('click', loadExample.bind(this, unionTypeExample))
functype.addEventListener('click', loadExample.bind(this, funcTypeExample))




// function showFuncParamsExample() {
//     const { title, explanation, code } = functionParamsExample()
//     cardTitle.textContent = title
//     cardContent.textContent = explanation
//     codeContent.innerHTML = code
// }

// function showObjTypesExample() {
//     const { title, explanation, code } = objectTypeExample()
//     cardTitle.textContent = title
//     cardContent.textContent = explanation
//     codeContent.innerHTML = code
// }

function loadExample(functionExample: () => { title: string, explanation: string, code: string }) {
    const { title, explanation, code } = functionExample()
    cardTitle.textContent = title
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}
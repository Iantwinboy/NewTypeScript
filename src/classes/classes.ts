import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

console.log('Blocks: ', blocks)

const blocksArray = Object.values(blocks)

console.log('Blocks Array: ', blocksArray)

console.log(blocksArray[0].meta.name)

const navBar = document.querySelector('.navbar')!

const buildNavFromJSON = (blockName: string) => {
    const navItem = document.createElement('a')
    navItem.classList.add('btn', 'btn-ghost', 'normal-case', 'text-xl', 'mx-4')
    navItem.textContent = blockName
    navBar.appendChild(navItem)
}

blocksArray.forEach(block => {
    buildNavFromJSON(block.meta.name)
})

class ExampleCodeSnippet {
    private title: string
    private explanation: string
    private code: string

    constructor(title: string, explanation: string, code: string) {
        this.title = title
        this.explanation = explanation
        this.code = code
    }

    getTitle() {
        return this.title
    }

    getExplanation() {
        return this.explanation
    }

    getCode() {
        return this.code
    }
}

class ExampleCodeSnippetShortcut {
    constructor(private title: string, private explanation: string, private code: string) {
    }

    getTitle() {
        return this.title
    }   
    getExplanation() {   
        return this.explanation
    }   
    getCode() {     
        return this.code
    }
}

let codeSnippet1 = new ExampleCodeSnippet(`How to define a class`, `Here is where I explain how to define a class`, `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`)

console.log(codeSnippet1.getTitle())
console.log(codeSnippet1.getExplanation(), codeSnippet1.getCode())

console.log(Math.random())

let simplerCodeSnippet = new ExampleCodeSnippetShortcut(`How to define a simpler, shortcut class`, `Here is where I explain how to define a more simple, shortcut class using the constructor`, `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`)

console.log(simplerCodeSnippet.getTitle())
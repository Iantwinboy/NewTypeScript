import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

//console.log('Blocks: ', blocks)

const blocksArray = Object.values(blocks)

//console.log('Blocks Array: ', blocksArray)

//console.log(blocksArray[0].meta.name)

const navBar = document.querySelector('.navbar')!
const navList = document.querySelector('#navList')!

const buildNavFromJSON = (blockName: string) => {
  const navItem = document.createElement('a')
  navItem.classList.add('btn', 'btn-ghost', 'normal-case', 'text-xl', 'mx-4')
  navItem.textContent = blockName
  navItem.addEventListener('click', () => {
    const foundBlock = blocksArray.find(
      (item: any) => item.meta.name === blockName,
    )
    buildLeftNavFromJSON(foundBlock)
  })
  navBar.appendChild(navItem)
}

blocksArray.forEach((block) => buildNavFromJSON(block.meta.name))

const buildLeftNavFromJSON = (block: any) => {
    while (navList.firstChild) {
        navList.removeChild(navList.firstChild)
    }
  block.challenges.forEach((challenge: any) => {
    //console.log(challenge)
    const listItem = document.createElement('li')
    listItem.classList.add('my-4')
    const navButton = document.createElement('h3')
    navButton.classList.add('w-72', 'bg-blue-200', 'rounded', 'p-2', 'text-xl', 'text-center', 'cursor-pointer', 'hover:bg-blue-300', 'hover:text-white', 'shadow-md'
    )
      navButton.textContent = challenge.title
      listItem.addEventListener('click', () => {
          buildSnippetDisplay(challenge)
      })
    listItem.appendChild(navButton)
    navList.appendChild(listItem)
  })
}

class ExampleCodeSnippet {
 constructor(public title: string, public description: string, public instructions: string) {
  }
}

const buildSnippetDisplay = (challenge: any) => {
    const snippet = new ExampleCodeSnippet(challenge.title, challenge.description, challenge.instructions)
    console.log(snippet)
    const snippetDisplay = document.querySelector('#snippetDisplay')!
    while (snippetDisplay.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild)
    }
    const snippetTitle = document.createElement('h2')
    snippetTitle.classList.add('text-2xl', 'font-bold', 'mb-4', 'text-center')
    snippetTitle.textContent = snippet.title

    snippetDisplay.appendChild(snippetTitle)
    // now add the description
    // now add the instructions
}


blocksArray.map((block: any) => {
  //console.log(block)
  //destructuring an object
  const { meta, challenges } = block
  //destructuring: 'unpack' an array into distinct variables
  const [firstChallenge, ...restOfChallenges] = challenges
  //console.log(firstChallenge, restOfChallenges)

  const { title, description, instructions } = firstChallenge
  //console.log(title, description, instructions)

  const { name, time, superBlock } = meta
  //console.log(name, time, superBlock)

  // ? is the optional chaining operator
  // ?? is the nullish coalescing operator
  
  let blockName = block?.meta?.name ?? 'No name'
  console.log(blockName)
  let blockFooName = block?.meta?.fooName ?? ''
  console.log(blockFooName)
})























/* class ExampleCodeSnippetShortcut {
  constructor(
    private title: string,
    private explanation: string,
    private code: string,
  ) {}

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

let codeSnippet1 = new ExampleCodeSnippet(
  `How to define a class`,
  `Here is where I explain how to define a class`,
  `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`,
)

console.log(codeSnippet1.getTitle())
console.log(codeSnippet1.getExplanation(), codeSnippet1.getCode())

console.log(Math.random())

let simplerCodeSnippet = new ExampleCodeSnippetShortcut(
  `How to define a simpler, shortcut class`,
  `Here is where I explain how to define a more simple, shortcut class using the constructor`,
  `<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>`,
)

console.log(simplerCodeSnippet.getTitle()) */
import curriculum from '../data/curriculum.json'

const blocks = curriculum['responsive-web-design'].blocks

const navBar = document.querySelector('.navbar')!
const navList = document.querySelector('#navList')!

class Challenge {
  constructor(public title: string, public description: string, public instructions: string) {
  }
}

class Block {
  constructor(public meta: any, public challenges: Challenge[]) {
  }
}

class ExampleCodeSnippet {
  constructor(public title: string, public description: string, public instructions: string) {
  }
}

const blocksArray = Object.values(blocks).map((block: any) => new Block(block.meta, block.challenges.map((challenge: any) => new Challenge(challenge.title, challenge.description, challenge.instructions))))

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
  block.challenges.forEach((challenge: Challenge) => {
    const listItem = document.createElement('li')
    listItem.classList.add('my-4')
    const navButton = document.createElement('h3')
    navButton.classList.add('w-72', 'bg-blue-200', 'rounded', 'p-2', 'text-xl', 'text-center', 'cursor-pointer', 'hover:bg-blue-300', 'hover:text-white', 'shadow-md')
      navButton.textContent = challenge.title
      listItem.addEventListener('click', () => {
          buildSnippetDisplay(challenge)
      })
    listItem.appendChild(navButton)
    navList.appendChild(listItem)
  })
}

const buildSnippetDisplay = (challenge: Challenge) => {
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

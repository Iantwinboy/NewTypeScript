var d=Object.defineProperty;var l=(n,e,t)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var o=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);import"./input-541fcbf8.js";const c={"responsive-web-design":{superBlock:"responsive-web-design",order:1,blocks:{"basic-css":{meta:{name:"Basic CSS",isUpcomingChange:!1,dashedName:"basic-css",order:1,time:"5 hours",template:"",required:[],superBlock:"responsive-web-design",superOrder:1,challengeOrder:[["bad87fee1348bd9aedf08803","Change the Color of Text"],["bad87fee1348bd9aedf08805","Use CSS Selectors to Style Elements"],["bad87fee1348bd9aecf08806","Use a CSS Class to Style an Element"],["bad87fee1348bd9aefe08806","Style Multiple Elements with a CSS Class"],["bad87fee1348bd9aedf08806","Change the Font Size of an Element"],["bad87fee1348bd9aede08807","Set the Font Family of an Element"],["bad87fee1348bd9aedf08807","Import a Google Font"],["bad87fee1348bd9aedf08808","Specify How Fonts Should Degrade"],["bad87fee1348bd9acdf08812","Size Your Images"],["bad87fee1348bd9bedf08813","Add Borders Around Your Elements"],["bad87fee1348bd9aedf08814","Add Rounded Corners with border-radius"],["bad87fee1348bd9aedf08815","Make Circular Images with a border-radius"],["bad87fed1348bd9aede07836","Give a Background Color to a div Element"],["bad87eee1348bd9aede07836","Set the id of an Element"],["bad87dee1348bd9aede07836","Use an id Attribute to Style an Element"],["bad88fee1348bd9aedf08825","Adjust the Padding of an Element"],["bad87fee1348bd9aedf08822","Adjust the Margin of an Element"],["bad87fee1348bd9aedf08823","Add a Negative Margin to an Element"],["bad87fee1348bd9aedf08824","Add Different Padding to Each Side of an Element"],["bad87fee1248bd9aedf08824","Add Different Margins to Each Side of an Element"],["bad87fee1348bd9aedf08826","Use Clockwise Notation to Specify the Padding of an Element"],["bad87fee1348bd9afdf08726","Use Clockwise Notation to Specify the Margin of an Element"],["58c383d33e2e3259241f3076","Use Attribute Selectors to Style Elements"],["bad82fee1322bd9aedf08721","Understand Absolute versus Relative Units"],["bad87fee1348bd9aedf08736","Style the HTML Body Element"],["bad87fee1348bd9aedf08746","Inherit Styles from the Body Element"],["bad87fee1348bd9aedf08756","Prioritize One Style Over Another"],["bad87fee1348bd9aedf04756","Override Styles in Subsequent CSS"],["bad87fee1348bd8aedf06756","Override Class Declarations by Styling ID Attributes"],["bad87fee1348bd9aedf06756","Override Class Declarations with Inline Styles"],["bad87fee1348bd9aedf07756","Override All Other Styles by using Important"],["bad87fee1348bd9aedf08726","Use Hex Code for Specific Colors"],["bad87fee1348bd9aedf08721","Use Hex Code to Mix Colors"],["bad87fee1348bd9aedf08719","Use Abbreviated Hex Code"],["bad87fee1348bd9aede08718","Use RGB values to Color Elements"],["bad82fee1348bd9aedf08721","Use RGB to Mix Colors"],["5a9d725e424fe3d0e10cad10","Use CSS Variables to change several elements at once"],["5a9d726c424fe3d0e10cad11","Create a custom CSS Variable"],["5a9d727a424fe3d0e10cad12","Use a custom CSS Variable"],["5a9d7286424fe3d0e10cad13","Attach a Fallback value to a CSS Variable"],["5b7d72c338cd7e35b63f3e14","Improve Compatibility with Browser Fallbacks"],["5a9d7295424fe3d0e10cad14","Inherit CSS Variables"],["5a9d72a1424fe3d0e10cad15","Change a variable for a specific area"],["5a9d72ad424fe3d0e10cad16","Use a media query to change a variable"]],helpRoom:"Help",fileName:"01-responsive-web-design/basic-css.json"},challenges:[{id:"bad87fee1348bd9aedf08823",title:"Add a Negative Margin to an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cnpyGs3",forumTopicId:16166,dashedName:"add-a-negative-margin-to-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-top') === '-15px');"}],description:`<section id="description">
<p>An element's <code>margin</code> controls the amount of space between an element's <code>border</code> and surrounding elements.</p>
<p>If you set an element's <code>margin</code> to a negative value, the element will grow larger.</p>
</section>`,instructions:`<section id="instructions">
<p>Try to set the <code>margin</code> to a negative value like the one for the red box.</p>
<p>Change the <code>margin</code> of the blue box to <code>-15px</code>, so it fills the entire horizontal width of the yellow box around it.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:17,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9bedf08813",title:"Add Borders Around Your Elements",challengeType:0,videoUrl:"https://scrimba.com/c/c2MvnHZ",forumTopicId:16630,dashedName:"add-borders-around-your-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }

  .thick-green-border {
    border-width: 10px;
    border-color: green;
    border-style: solid;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>img</code> element should have the class <code>smaller-image</code>.</p>",testString:"assert($('img').hasClass('smaller-image'));"},{text:"<p>Your <code>img</code> element should have the class <code>thick-green-border</code>.</p>",testString:"assert($('img').hasClass('thick-green-border'));"},{text:"<p>Your image should have a border width of <code>10px</code>.</p>",testString:`assert(
  $('img').hasClass('thick-green-border') &&
    parseInt($('img').css('border-top-width'), 10) >= 8 &&
    parseInt($('img').css('border-top-width'), 10) <= 12
);`},{text:"<p>Your image should have a border style of <code>solid</code>.</p>",testString:"assert($('img').css('border-right-style') === 'solid');"},{text:"<p>The border around your <code>img</code> element should be green.</p>",testString:"assert($('img').css('border-left-color') === 'rgb(0, 128, 0)');"}],description:`<section id="description">
<p>CSS borders have properties like <code>style</code>, <code>color</code> and <code>width</code>.</p>
<p>For example, if we wanted to create a red, 5 pixel border around an HTML element, we could use this class:</p>
<pre><code class="language-html">&#x3C;style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
  }
&#x3C;/style>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Create a class called <code>thick-green-border</code>. This class should add a 10px, solid, green border around an HTML element. Apply the class to your cat photo.</p>
<p>Remember that you can apply multiple classes to an element using its <code>class</code> attribute, by separating each class name with a space. For example:</p>
<pre><code class="language-html">&#x3C;img class="class1 class2">
</code></pre>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:9,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1248bd9aedf08824",title:"Add Different Margins to Each Side of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cg4RWh4",forumTopicId:16633,dashedName:"add-different-margins-to-each-side-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-top') === '40px');"},{text:"<p>Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-right') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-bottom') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-left') === '40px');"}],description:`<section id="description">
<p>Sometimes you will want to customize an element so that it has a different <code>margin</code> on each of its sides.</p>
<p>CSS allows you to control the <code>margin</code> of all four individual sides of an element with the <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code> properties.</p>
</section>`,instructions:`<section id="instructions">
<p>Give the blue box a <code>margin</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:19,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08824",title:"Add Different Padding to Each Side of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cB7mwUw",forumTopicId:16634,dashedName:"add-different-padding-to-each-side-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-top') === '40px');"},{text:"<p>Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-right') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-bottom') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the left of the elements <code>40px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-left') === '40px');"}],description:`<section id="description">
<p>Sometimes you will want to customize an element so that it has different amounts of <code>padding</code> on each of its sides.</p>
<p>CSS allows you to control the <code>padding</code> of all four individual sides of an element with the <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code> properties.</p>
</section>`,instructions:`<section id="instructions">
<p>Give the blue box a <code>padding</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:18,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08814",title:"Add Rounded Corners with border-radius",challengeType:0,videoUrl:"https://scrimba.com/c/cbZm2hg",forumTopicId:16649,dashedName:"add-rounded-corners-with-border-radius",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
  }

  .smaller-image {
    width: 100px;
    border-radius: 10px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your image element should have the class <code>thick-green-border</code>.</p>",testString:"assert($('img').hasClass('thick-green-border'));"},{text:"<p>Your image should have a border radius of <code>10px</code>.</p>",testString:`assert(
  $('img').css('border-top-left-radius') === '10px' &&
    $('img').css('border-top-right-radius') === '10px' &&
    $('img').css('border-bottom-left-radius') === '10px' &&
    $('img').css('border-bottom-right-radius') === '10px'
);`}],description:`<section id="description">
<p>Your cat photo currently has sharp corners. We can round out those corners with a CSS property called <code>border-radius</code>.</p>
</section>`,instructions:`<section id="instructions">
<p>You can specify a <code>border-radius</code> with pixels. Give your cat photo a <code>border-radius</code> of <code>10px</code>.</p>
<p><strong>Note:</strong> This challenge allows for multiple possible solutions. For example, you may add <code>border-radius</code> to either the <code>.thick-green-border</code> class or the <code>.smaller-image</code> class.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:10,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08822",title:"Adjust the Margin of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cVJarHW",forumTopicId:16654,dashedName:"adjust-the-margin-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give elements <code>20px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-top') === '20px');"}],description:`<section id="description">
<p>An element's <code>margin</code> controls the amount of space between an element's <code>border</code> and surrounding elements.</p>
<p>Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has a bigger <code>margin</code> than the blue box, making it appear smaller.</p>
<p>When you increase the blue box's <code>margin</code>, it will increase the distance between its border and surrounding elements.</p>
</section>`,instructions:`<section id="instructions">
<p>Change the <code>margin</code> of the blue box to match that of the red box.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:16,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad88fee1348bd9aedf08825",title:"Adjust the Padding of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cED8ZC2",forumTopicId:301083,dashedName:"adjust-the-padding-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-top') === '20px');"}],description:`<section id="description">
<p>Now let's put our Cat Photo App away for a little while and learn more about styling HTML.</p>
<p>You may have already noticed this, but all HTML elements are essentially little rectangles.</p>
<p>Three important properties control the space that surrounds each HTML element: <code>padding</code>, <code>border</code>, and <code>margin</code>.</p>
<p>An element's <code>padding</code> controls the amount of space between the element's content and its <code>border</code>.</p>
<p>Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has more <code>padding</code> than the blue box.</p>
<p>When you increase the blue box's <code>padding</code>, it will increase the distance (<code>padding</code>) between the text and the border around it.</p>
</section>`,instructions:`<section id="instructions">
<p>Change the <code>padding</code> of your blue box to match that of your red box.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:15,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d7286424fe3d0e10cad13",title:"Attach a Fallback value to a CSS Variable",challengeType:0,videoUrl:"https://scrimba.com/c/c6bDNfp",forumTopicId:301084,dashedName:"attach-a-fallback-value-to-a-css-variable",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .penguin {
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background: #c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  .penguin {
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* Change code below this line */
    background: var(--pengiun-skin);
    /* Change code above this line */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background: #c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .penguin-top {
    background: var(--pengiun-skin, black);
  }
  .penguin-bottom {
    background: var(--pengiun-skin, black);
  }
</style>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The fallback value of <code>black</code> should be used in the <code>background</code> property of the <code>penguin-top</code> class.</p>",testString:`assert(
  code.match(
    /.penguin-top\\s*?{[\\s\\S]*background\\s*?:\\s*?var\\(\\s*?--pengiun-skin\\s*?,\\s*?black\\s*?\\)\\s*?;[\\s\\S]*}[\\s\\S]*.penguin-bottom\\s{/gi
  )
);`},{text:"<p>The fallback value of <code>black</code> should be used in <code>background</code> property of the <code>penguin-bottom</code> class.</p>",testString:`assert(
  code.match(
    /.penguin-bottom\\s*?{[\\s\\S]*background\\s*?:\\s*?var\\(\\s*?--pengiun-skin\\s*?,\\s*?black\\s*?\\)\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.</p>
<p><strong>Note:</strong> This fallback is not used to increase browser compatibility, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.</p>
<p>Here's how you do it:</p>
<pre><code class="language-css">background: var(--penguin-skin, black);
</code></pre>
<p>This will set background to <code>black</code> if your variable wasn't set. Note that this can be useful for debugging.</p>
</section>`,instructions:`<section id="instructions">
<p>It looks like there is a problem with the variables supplied to the <code>.penguin-top</code> and <code>.penguin-bottom</code> classes. Rather than fix the typo, add a fallback value of <code>black</code> to the <code>background</code> property of the <code>.penguin-top</code> and <code>.penguin-bottom</code> classes.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:39,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d72a1424fe3d0e10cad15",title:"Change a variable for a specific area",challengeType:0,videoUrl:"https://scrimba.com/c/cdRwbuW",forumTopicId:301085,dashedName:"change-a-variable-for-a-specific-area",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    /* Only change code below this line */

    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, pink);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  :root {
    --penguin-skin: gray;
    --penguin-belly: pink;
    --penguin-beak: orange;
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    /* Only change code below this line */

    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, pink);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, pink);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
.penguin {--penguin-belly: white;}
</style>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>penguin</code> class should reassign the <code>--penguin-belly</code> variable to <code>white</code>.</p>",testString:`assert(
  code.match(/\\.penguin\\s*?{[\\s\\S]*--penguin-belly\\s*?:\\s*?white\\s*?;[\\s\\S]*}/gi)
);`},{text:"<p>The <code>penguin</code> class should not contain the <code>background-color</code> property</p>",testString:`assert(
  code.match(/^((?!background-color\\s*?:\\s*?)[\\s\\S])*$/g)
);`}],description:`<section id="description">
<p>When you create your variables in <code>:root</code> they will set the value of that variable for the whole page.</p>
<p>You can then over-write these variables by setting them again within a specific element.</p>
</section>`,instructions:`<section id="instructions">
<p>Change the value of <code>--penguin-belly</code> to <code>white</code> in the <code>penguin</code> class.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:42,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08803",title:"Change the Color of Text",challengeType:0,videoUrl:"https://scrimba.com/c/cRkVmSm",forumTopicId:16775,dashedName:"change-the-color-of-text",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h2</code> element should have a <code>style</code> declaration.</p>",testString:"assert($('h2').attr('style'));"},{text:"<p>Your <code>h2</code> element should have color set to <code>red</code>.</p>",testString:"assert($('h2')[0].style.color === 'red');"},{text:"<p>Your <code>style</code> declaration should end with a <code>;</code> .</p>",testString:"assert($('h2').attr('style') && $('h2').attr('style').endsWith(';'));"}],description:`<section id="description">
<p>Now let's change the color of some of our text.</p>
<p>We can do this by changing the <code>style</code> of your <code>h2</code> element.</p>
<p>The property that is responsible for the color of an element's text is the <code>color</code> style property.</p>
<p>Here's how you would set your <code>h2</code> element's text color to blue:</p>
<pre><code class="language-html">&#x3C;h2 style="color: blue;">CatPhotoApp&#x3C;/h2>
</code></pre>
<p>Note that it is a good practice to end inline <code>style</code> declarations with a <code>;</code> .</p>
</section>`,instructions:`<section id="instructions">
<p>Change your <code>h2</code> element's style so that its text color is red.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:0,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08806",title:"Change the Font Size of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/c3bvDc8",forumTopicId:16777,dashedName:"change-the-font-size-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: red;
  }
  p {
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Between the <code>style</code> tags, give the <code>p</code> elements <code>font-size</code> of <code>16px</code>. Browser and Text zoom should be at 100%.</p>",testString:"assert(code.match(/p\\s*{\\s*font-size\\s*:\\s*16\\s*px\\s*;\\s*}/i));"}],description:`<section id="description">
<p>Font size is controlled by the <code>font-size</code> CSS property, like this:</p>
<pre><code class="language-css">h1 {
  font-size: 30px;
}
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Inside the same <code>&#x3C;style></code> tag that contains your <code>red-text</code> class, create an entry for <code>p</code> elements and set the <code>font-size</code> to 16 pixels (<code>16px</code>).</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:4,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d726c424fe3d0e10cad11",title:"Create a custom CSS Variable",challengeType:0,videoUrl:"https://scrimba.com/c/cQd27Hr",forumTopicId:301086,dashedName:"create-a-custom-css-variable",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .penguin {
    /* Only change code below this line */

    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: black;
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: black;
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: black;
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: black;
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  .penguin {
    /* Only change code below this line */

    /* Only change code above this line */
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: black;
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: black;
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: black;
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: black;
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.penguin {--penguin-skin: gray;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>penguin</code> class should declare the <code>--penguin-skin</code> variable and assign it to <code>gray</code>.</p>",testString:`assert(
  code.match(/\\.penguin\\s*\\{[^{}]*?--penguin-skin\\s*:\\s*gr[ae]y\\s*;[^{}]*?\\}/gi)
);`}],description:`<section id="description">
<p>To create a CSS variable, you just need to give it a name with two hyphens in front of it and assign it a value like this:</p>
<pre><code class="language-css">--penguin-skin: gray;
</code></pre>
<p>This will create a variable named <code>--penguin-skin</code> and assign it the value of <code>gray</code>. Now you can use that variable elsewhere in your CSS to change the value of other elements to gray.</p>
</section>`,instructions:`<section id="instructions">
<p>In the <code>penguin</code> class, create a variable name <code>--penguin-skin</code> and give it a value of <code>gray</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:37,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fed1348bd9aede07836",title:"Give a Background Color to a div Element",challengeType:0,videoUrl:"https://scrimba.com/c/cdRKMCk",forumTopicId:18190,dashedName:"give-a-background-color-to-a-div-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your<code>div</code> element should have the class <code>silver-background</code>.</p>",testString:"assert($('div').hasClass('silver-background'));"},{text:"<p>Your <code>div</code> element should have a silver background.</p>",testString:"assert($('div').css('background-color') === 'rgb(192, 192, 192)');"},{text:"<p>A class named <code>silver-background</code> should be defined within the <code>style</code> element and the value of <code>silver</code> should be assigned to the <code>background-color</code> property.</p>",testString:"assert(code.match(/\\.silver-background\\s*{\\s*background-color:\\s*silver;\\s*}/));"}],description:`<section id="description">
<p>You can set an element's background color with the <code>background-color</code> property.</p>
<p>For example, if you wanted an element's background color to be <code>green</code>, you'd put this within your <code>style</code> element:</p>
<pre><code class="language-css">.green-background {
  background-color: green;
}
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Create a class called <code>silver-background</code> with the <code>background-color</code> of <code>silver</code>. Assign this class to your <code>div</code> element.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:12,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08807",title:"Import a Google Font",challengeType:0,videoUrl:"https://scrimba.com/c/cM9MRsJ",forumTopicId:18200,dashedName:"import-a-google-font",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  h2 {
    font-family: Lobster;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should import the <code>Lobster</code> font.</p>",testString:"assert(new RegExp('googleapis', 'gi').test(code));"},{text:"<p>Your <code>h2</code> element should use the font <code>Lobster</code>.</p>",testString:`assert(
  $('h2')
    .css('font-family')
    .match(/lobster/i)
);`},{text:"<p>You should only use an <code>h2</code> element selector to change the font.</p>",testString:`assert(
  /\\s*[^\\.]h2\\s*\\{\\s*font-family\\s*:\\s*('|"|)Lobster\\1\\s*(,\\s*('|"|)[a-z -]+\\3\\s*)?(;\\s*\\}|\\})/gi.test(
    code
  )
);`},{text:"<p>Your <code>p</code> element should still use the font <code>monospace</code>.</p>",testString:`assert(
  $('p')
    .css('font-family')
    .match(/monospace/i)
);`}],description:`<section id="description">
<p>In addition to specifying common fonts that are found on most operating systems, we can also specify non-standard, custom web fonts for use on our website. There are many sources for web fonts on the Internet. For this example we will focus on the Google Fonts library.</p>
<p><a href="https://fonts.google.com/">Google Fonts</a> is a free library of web fonts that you can use in your CSS by referencing the font's URL.</p>
<p>So, let's go ahead and import and apply a Google font (note that if Google is blocked in your country, you will need to skip this challenge).</p>
<p>To import a Google Font, you can copy the font's URL from the Google Fonts library and then paste it in your HTML. For this challenge, we'll import the <code>Lobster</code> font. To do this, copy the following code snippet and paste it into the top of your code editor (before the opening <code>style</code> element):</p>
<pre><code class="language-html">&#x3C;link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
</code></pre>
<p>Now you can use the <code>Lobster</code> font in your CSS by using <code>Lobster</code> as the FAMILY_NAME as in the following example:</p>
<pre><code class="language-css">font-family: FAMILY_NAME, GENERIC_NAME;
</code></pre>
<p>The GENERIC_NAME is optional, and is a fallback font in case the other specified font is not available. This is covered in the next challenge.</p>
<p>Family names are case-sensitive and need to be wrapped in quotes if there is a space in the name. For example, you need quotes to use the <code>"Open Sans"</code> font, but not to use the <code>Lobster</code> font.</p>
</section>`,instructions:`<section id="instructions">
<p>Import the <code>Lobster</code> font to your web page. Then, use an element selector to set <code>Lobster</code> as the <code>font-family</code> for your <code>h2</code> element.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:6,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5b7d72c338cd7e35b63f3e14",title:"Improve Compatibility with Browser Fallbacks",challengeType:0,videoUrl:"",forumTopicId:301087,dashedName:"improve-compatibility-with-browser-fallbacks",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>`,error:null,seed:`<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to <code>red</code> immediately before the existing <code>background</code> declaration.</p>",testString:`assert(
  code
    .replace(/\\s/g, '')
    .match(
      /\\.red-box{background:(red|#ff0000|#f00|rgb\\(255,0,0\\)|rgb\\(100%,0%,0%\\)|hsl\\(0,100%,50%\\));background:var\\(--red-color\\);height:200px;width:200px;}/gi
    )
);`}],description:`<section id="description">
<p>When working with CSS you will likely run into browser compatibility issues at some point. This is why it's important to provide browser fallbacks to avoid potential problems.</p>
<p>When your browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support. For example, if you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will use whatever value it has for that property. If it can't find any other value set for that property, it will revert to the default value, which is typically not ideal.</p>
<p>This means that if you do want to provide a browser fallback, it's as easy as providing another more widely supported value immediately before your declaration. That way an older browser will have something to fall back on, while a newer browser will just interpret whatever declaration comes later in the cascade.</p>
</section>`,instructions:`<section id="instructions">
<p>It looks like a variable is being used to set the background color of the <code>.red-box</code> class. Let's improve our browser compatibility by adding another <code>background</code> declaration right before the existing declaration and set its value to <code>red</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:40,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d7295424fe3d0e10cad14",title:"Inherit CSS Variables",challengeType:0,videoUrl:"https://scrimba.com/c/cyLZZhZ",forumTopicId:301088,dashedName:"inherit-css-variables",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  :root {
    /* Only change code below this line */

    /* Only change code above this line */
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  :root {
    /* Only change code below this line */

    /* Only change code above this line */
  }

  body {
    background: var(--penguin-belly, #c6faf1);
  }

  .penguin {
    --penguin-skin: gray;
    --penguin-beak: orange;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>:root {--penguin-belly: pink;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>--penguin-belly</code> variable should be declared in the <code>:root</code> and assigned the value <code>pink</code>.</p>",testString:`assert(
  code.match(/:root\\s*?{[\\s\\S]*--penguin-belly\\s*?:\\s*?pink\\s*?;[\\s\\S]*}/gi)
);`}],description:`<section id="description">
<p>When you create a variable, it is available for you to use inside the selector in which you create it. It also is available in any of that selector's descendants. This happens because CSS variables are inherited, just like ordinary properties.</p>
<p>To make use of inheritance, CSS variables are often defined in the <dfn>:root</dfn> element.</p>
<p><code>:root</code> is a <dfn>pseudo-class</dfn> selector that matches the root element of the document, usually the <code>html</code> element. By creating your variables in <code>:root</code>, they will be available globally and can be accessed from any other selector in the style sheet.</p>
</section>`,instructions:`<section id="instructions">
<p>Define a variable named <code>--penguin-belly</code> in the <code>:root</code> selector and give it the value of <code>pink</code>. You can then see that the variable is inherited and that all the child elements which use it get pink backgrounds.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:41,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08746",title:"Inherit Styles from the Body Element",challengeType:0,videoUrl:"https://scrimba.com/c/c9bmdtR",forumTopicId:18204,dashedName:"inherit-styles-from-the-body-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
  }

</style>`,error:null,seed:`<style>
  body {
    background-color: black;
  }

</style>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should create an <code>h1</code> element.</p>",testString:"assert($('h1').length > 0);"},{text:"<p>Your <code>h1</code> element should have the text <code>Hello World</code>.</p>",testString:`assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);`},{text:"<p>Your <code>h1</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\\/h1>/g).length === code.match(/<h1/g).length
);`},{text:"<p>Your <code>body</code> element should have the <code>color</code> property of <code>green</code>.</p>",testString:"assert($('body').css('color') === 'rgb(0, 128, 0)');"},{text:"<p>Your <code>body</code> element should have the <code>font-family</code> property of <code>monospace</code>.</p>",testString:`assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);`},{text:"<p>Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.</p>",testString:`assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);`},{text:"<p>Your <code>h1</code> element should inherit the color green from your <code>body</code> element.</p>",testString:"assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');"}],description:`<section id="description">
<p>Now we've proven that every HTML page has a <code>body</code> element, and that its <code>body</code> element can also be styled with CSS.</p>
<p>Remember, you can style your <code>body</code> element just like any other HTML element, and all your other elements will inherit your <code>body</code> element's styles.</p>
</section>`,instructions:`<section id="instructions">
<p>First, create a <code>h1</code> element with the text <code>Hello World</code></p>
<p>Then, let's give all elements on your page the color of <code>green</code> by adding <code>color: green;</code> to your <code>body</code> element's style declaration.</p>
<p>Finally, give your <code>body</code> element the font-family of <code>monospace</code> by adding <code>font-family: monospace;</code> to your <code>body</code> element's style declaration.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:25,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08815",title:"Make Circular Images with a border-radius",challengeType:0,videoUrl:"https://scrimba.com/c/c2MvrcB",forumTopicId:18229,dashedName:"make-circular-images-with-a-border-radius",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 10px;
  }

  .smaller-image {
    width: 100px;
    border-radius: 50%;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your image should have a border radius of <code>50%</code>, making it perfectly circular.</p>",testString:"assert(parseInt($('img').css('border-top-left-radius')) > 48);"},{text:"<p>The <code>border-radius</code> value should use a percentage value of <code>50%</code>.</p>",testString:"assert(code.match(/50%/g));"}],description:`<section id="description">
<p>In addition to pixels, you can also specify the <code>border-radius</code> using a percentage.</p>
</section>`,instructions:`<section id="instructions">
<p>Give your cat photo a <code>border-radius</code> of <code>50%</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:11,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf07756",title:"Override All Other Styles by using Important",challengeType:0,videoUrl:"https://scrimba.com/c/cm24rcp",forumTopicId:18249,dashedName:"override-all-other-styles-by-using-important",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>`,error:null,seed:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should have the class <code>pink-text</code>.</p>",testString:"assert($('h1').hasClass('pink-text'));"},{text:"<p>Your <code>h1</code> element should have the class <code>blue-text</code>.</p>",testString:"assert($('h1').hasClass('blue-text'));"},{text:"<p>Your <code>h1</code> element should have the <code>id</code> of <code>orange-text</code>.</p>",testString:"assert($('h1').attr('id') === 'orange-text');"},{text:"<p>Your <code>h1</code> element should have the inline style of <code>color: white</code>.</p>",testString:"assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\\s*?:/gi));"},{text:"<p>Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.</p>",testString:`assert(
  code.match(/\\.pink-text\\s*?\\{[\\s\\S]*?color:.*pink.*!important\\s*;?[^\\.]*\\}/g)
);`},{text:"<p>Your <code>h1</code> element should be pink.</p>",testString:"assert($('h1').css('color') === 'rgb(255, 192, 203)');"}],description:`<section id="description">
<p>Yay! We just proved that inline styles will override all the CSS declarations in your <code>style</code> element.</p>
<p>But wait. There's one last way to override CSS. This is the most powerful method of all. But before we do it, let's talk about why you would ever want to override CSS.</p>
<p>In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use <code>!important</code>.</p>
<p>Let's go all the way back to our <code>pink-text</code> class declaration. Remember that our <code>pink-text</code> class was overridden by subsequent class declarations, id declarations, and inline styles.</p>
</section>`,instructions:`<section id="instructions">
<p>Let's add the keyword <code>!important</code> to your pink-text element's color declaration to make 100% sure that your <code>h1</code> element will be pink.</p>
<p>An example of how to do this is:</p>
<pre><code class="language-css">color: red !important;
</code></pre>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:30,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd8aedf06756",title:"Override Class Declarations by Styling ID Attributes",challengeType:0,videoUrl:"https://scrimba.com/c/cRkpDhB",forumTopicId:18251,dashedName:"override-class-declarations-by-styling-id-attributes",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>`,error:null,seed:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }  
</style>
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should have the class <code>pink-text</code>.</p>",testString:"assert($('h1').hasClass('pink-text'));"},{text:"<p>Your <code>h1</code> element should have the class <code>blue-text</code>.</p>",testString:"assert($('h1').hasClass('blue-text'));"},{text:"<p>Your <code>h1</code> element should have the id of <code>orange-text</code>.</p>",testString:"assert($('h1').attr('id') === 'orange-text');"},{text:"<p>There should be only one <code>h1</code> element.</p>",testString:"assert($('h1').length === 1);"},{text:"<p>Your <code>orange-text</code> id should have a CSS declaration.</p>",testString:"assert(code.match(/#orange-text\\s*{/gi));"},{text:"<p>Your <code>h1</code> should not have any <code>style</code> attributes.</p>",testString:"assert(!code.match(/<h1.*style.*>/gi));"},{text:"<p>Your <code>h1</code> element should be orange.</p>",testString:"assert($('h1').css('color') === 'rgb(255, 165, 0)');"}],description:`<section id="description">
<p>We just proved that browsers read CSS from top to bottom in order of their declaration. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last. Notice that if we even had put <code>blue-text</code> before <code>pink-text</code> in our <code>h1</code> element's classes, it would still look at the declaration order and not the order of their use!</p>
<p>But we're not done yet. There are other ways that you can override CSS. Do you remember id attributes?</p>
<p>Let's override your <code>pink-text</code> and <code>blue-text</code> classes, and make your <code>h1</code> element orange, by giving the <code>h1</code> element an id and then styling that id.</p>
</section>`,instructions:`<section id="instructions">
<p>Give your <code>h1</code> element the <code>id</code> attribute of <code>orange-text</code>. Remember, id styles look like this:</p>
<pre><code class="language-html">&#x3C;h1 id="orange-text">
</code></pre>
<p>Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.</p>
<p>Create a CSS declaration for your <code>orange-text</code> id in your <code>style</code> element. Here's an example of what this looks like:</p>
<pre><code class="language-css">#brown-text {
  color: brown;
}
</code></pre>
<p><strong>Note:</strong> It doesn't matter whether you declare this CSS above or below <code>pink-text</code> class, since the <code>id</code> attribute will always take precedence.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:28,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf06756",title:"Override Class Declarations with Inline Styles",challengeType:0,videoUrl:"https://scrimba.com/c/cGJDRha",forumTopicId:18252,dashedName:"override-class-declarations-with-inline-styles",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>`,error:null,seed:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should have the class <code>pink-text</code>.</p>",testString:"assert($('h1').hasClass('pink-text'));"},{text:"<p>Your <code>h1</code> element should have the class <code>blue-text</code>.</p>",testString:"assert($('h1').hasClass('blue-text'));"},{text:"<p>Your <code>h1</code> element should have the id of <code>orange-text</code>.</p>",testString:"assert($('h1').attr('id') === 'orange-text');"},{text:"<p>Your <code>h1</code> element should have an inline style.</p>",testString:"assert(document.querySelector('h1[style]'));"},{text:"<p>Your <code>h1</code> element should be white.</p>",testString:"assert($('h1').css('color') === 'rgb(255, 255, 255)');"}],description:`<section id="description">
<p>So we've proven that id declarations override class declarations, regardless of where they are declared in your <code>style</code> element CSS.</p>
<p>There are other ways that you can override CSS. Do you remember inline styles?</p>
</section>`,instructions:`<section id="instructions">
<p>Use an inline style to try to make our <code>h1</code> element white. Remember, inline styles look like this:</p>
<pre><code class="language-html">&#x3C;h1 style="color: green;">
</code></pre>
<p>Leave the <code>blue-text</code> and <code>pink-text</code> classes on your <code>h1</code> element.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:29,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf04756",title:"Override Styles in Subsequent CSS",challengeType:0,videoUrl:"https://scrimba.com/c/cGJDQug",forumTopicId:18253,dashedName:"override-styles-in-subsequent-css",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>`,error:null,seed:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }

  .blue-text {
    color: blue;
  }  
</style>
<h1 class="pink-text blue-text">Hello World!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should have the class <code>pink-text</code>.</p>",testString:"assert($('h1').hasClass('pink-text'));"},{text:"<p>Your <code>h1</code> element should have the class <code>blue-text</code>.</p>",testString:"assert($('h1').hasClass('blue-text'));"},{text:"<p>Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.</p>",testString:"assert($('.pink-text').hasClass('blue-text'));"},{text:"<p>Your <code>h1</code> element should be blue.</p>",testString:"assert($('h1').css('color') === 'rgb(0, 0, 255)');"}],description:`<section id="description">
<p>Our <code>pink-text</code> class overrode our <code>body</code> element's CSS declaration!</p>
<p>We just proved that our classes will override the <code>body</code> element's CSS. So the next logical question is, what can we do to override our <code>pink-text</code> class?</p>
</section>`,instructions:`<section id="instructions">
<p>Create an additional CSS class called <code>blue-text</code> that gives an element the color blue. Make sure it's below your <code>pink-text</code> class declaration.</p>
<p>Apply the <code>blue-text</code> class to your <code>h1</code> element in addition to your <code>pink-text</code> class, and let's see which one wins.</p>
<p>Applying multiple class attributes to a HTML element is done with a space between them like this:</p>
<pre><code class="language-html">class="class1 class2"
</code></pre>
<p><strong>Note:</strong> It doesn't matter which order the classes are listed in the HTML element.</p>
<p>However, the order of the <code>class</code> declarations in the <code>&#x3C;style></code> section is what is important. The second declaration will always take precedence over the first. Because <code>.blue-text</code> is declared second, it overrides the attributes of <code>.pink-text</code></p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:27,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08756",title:"Prioritize One Style Over Another",challengeType:0,videoUrl:"https://scrimba.com/c/cZ8wnHv",forumTopicId:18258,dashedName:"prioritize-one-style-over-another",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>`,error:null,seed:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should have the class <code>pink-text</code>.</p>",testString:"assert($('h1').hasClass('pink-text'));"},{text:"<p>Your <code>&#x3C;style></code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.</p>",testString:"assert(code.match(/\\.pink-text\\s*\\{\\s*color\\s*:\\s*.+\\s*;\\s*\\}/g));"},{text:"<p>Your <code>h1</code> element should be pink.</p>",testString:"assert($('h1').css('color') === 'rgb(255, 192, 203)');"}],description:`<section id="description">
<p>Sometimes your HTML elements will receive multiple styles that conflict with one another.</p>
<p>For example, your <code>h1</code> element can't be both green and pink at the same time.</p>
<p>Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class <em>override</em> the <code>body</code> element's <code>color: green;</code> CSS property?</p>
</section>`,instructions:`<section id="instructions">
<p>Create a CSS class called <code>pink-text</code> that gives an element the color pink.</p>
<p>Give your <code>h1</code> element the class of <code>pink-text</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:26,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aede08807",title:"Set the Font Family of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/c3bvpCg",forumTopicId:18278,dashedName:"set-the-font-family-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: red;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>p</code> elements should use the font <code>monospace</code>.</p>",testString:`assert(
  $('p')
    .not('.red-text')
    .css('font-family')
    .match(/monospace/i)
);`}],description:`<section id="description">
<p>You can set which font an element should use, by using the <code>font-family</code> property.</p>
<p>For example, if you wanted to set your <code>h2</code> element's font to <code>sans-serif</code>, you would use the following CSS:</p>
<pre><code class="language-css">h2 {
  font-family: sans-serif;
}
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Make all of your <code>p</code> elements use the <code>monospace</code> font.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:5,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87eee1348bd9aede07836",title:"Set the id of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cN6MEc2",forumTopicId:18279,dashedName:"set-the-id-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>form</code> element should have the id of <code>cat-photo-form</code>.</p>",testString:"assert($('form').attr('id') === 'cat-photo-form');"}],description:`<section id="description">
<p>In addition to classes, each HTML element can also have an <code>id</code> attribute.</p>
<p>There are several benefits to using <code>id</code> attributes: You can use an <code>id</code> to style a single element and later you'll learn that you can use them to select and modify specific elements with JavaScript.</p>
<p><code>id</code> attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don't give more than one element the same <code>id</code> attribute.</p>
<p>Here's an example of how you give your <code>h2</code> element the id of <code>cat-photo-app</code>:</p>
<pre><code class="language-html">&#x3C;h2 id="cat-photo-app">
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Give your <code>form</code> element the id <code>cat-photo-form</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:13,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9acdf08812",title:"Size Your Images",challengeType:0,videoUrl:"https://scrimba.com/c/cM9MmCP",forumTopicId:18282,dashedName:"size-your-images",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .smaller-image {
    width: 100px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img class="smaller-image" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>img</code> element should have the class <code>smaller-image</code>.</p>",testString:`assert(
  $("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') ===
    'smaller-image'
);`},{text:"<p>Your image should be 100 pixels wide.</p>",testString:`assert(
  $('img').width() < 200 &&
    code.match(/\\.smaller-image\\s*{\\s*width\\s*:\\s*100px\\s*(;\\s*}|})/i)
);`}],description:`<section id="description">
<p>CSS has a property called <code>width</code> that controls an element's width. Just like with fonts, we'll use <code>px</code> (pixels) to specify the image's width.</p>
<p>For example, if we wanted to create a CSS class called <code>larger-image</code> that gave HTML elements a width of 500 pixels, we'd use:</p>
<pre><code class="language-html">&#x3C;style>
  .larger-image {
    width: 500px;
  }
&#x3C;/style>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Create a class called <code>smaller-image</code> and use it to resize the image so that it's only 100 pixels wide.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:8,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08808",title:"Specify How Fonts Should Degrade",challengeType:0,videoUrl:"https://scrimba.com/c/cpVKBfQ",forumTopicId:18304,dashedName:"specify-how-fonts-should-degrade",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<!--<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">-->
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your h2 element should use the font <code>Lobster</code>.</p>",testString:`assert(
  $('h2')
    .css('font-family')
    .match(/^"?lobster/i)
);`},{text:"<p>Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.</p>",testString:`assert(
  /\\s*h2\\s*\\{\\s*font-family\\:\\s*(\\'|")?Lobster(\\'|")?,\\s*monospace\\s*;\\s*\\}/gi.test(
    code
  )
);`},{text:"<p>You should comment out your call to Google for the <code>Lobster</code> font by putting <code>&#x3C;!--</code> in front of it.</p>",testString:"assert(new RegExp('<!--[^fc]', 'gi').test(code));"},{text:"<p>You should close your comment by adding <code>--></code>.</p>",testString:"assert(new RegExp('[^fc]-->', 'gi').test(code));"}],description:`<section id="description">
<p>There are several default fonts that are available in all browsers. These generic font families include <code>monospace</code>, <code>serif</code> and <code>sans-serif</code></p>
<p>When one font isn't available, you can tell the browser to "degrade" to another font.</p>
<p>For example, if you wanted an element to use the <code>Helvetica</code> font, but degrade to the <code>sans-serif</code> font when <code>Helvetica</code> isn't available, you will specify it as follows:</p>
<pre><code class="language-css">p {
  font-family: Helvetica, sans-serif;
}
</code></pre>
<p>Generic font family names are not case-sensitive. Also, they do not need quotes because they are CSS keywords.</p>
</section>`,instructions:`<section id="instructions">
<p>To begin, apply the <code>monospace</code> font to the <code>h2</code> element, so that it now has two fonts - <code>Lobster</code> and <code>monospace</code>.</p>
<p>In the last challenge, you imported the <code>Lobster</code> font using the <code>link</code> tag. Now comment out that import of the <code>Lobster</code> font (using the HTML comments you learned before) from Google Fonts so that it isn't available anymore. Notice how your <code>h2</code> element degrades to the <code>monospace</code> font.</p>
<p><strong>Note:</strong> If you have the <code>Lobster</code> font installed on your computer, you won't see the degradation because your browser is able to find the font.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:7,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aefe08806",title:"Style Multiple Elements with a CSS Class",challengeType:0,videoUrl:"https://scrimba.com/c/cRkVbsQ",forumTopicId:18311,dashedName:"style-multiple-elements-with-a-css-class",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h2</code> element should be red.</p>",testString:"assert($('h2').css('color') === 'rgb(255, 0, 0)');"},{text:"<p>Your <code>h2</code> element should have the class <code>red-text</code>.</p>",testString:"assert($('h2').hasClass('red-text'));"},{text:"<p>Your first <code>p</code> element should be red.</p>",testString:"assert($('p:eq(0)').css('color') === 'rgb(255, 0, 0)');"},{text:"<p>Your second and third <code>p</code> elements should not be red.</p>",testString:`assert(
  !($('p:eq(1)').css('color') === 'rgb(255, 0, 0)') &&
    !($('p:eq(2)').css('color') === 'rgb(255, 0, 0)')
);`},{text:"<p>Your first <code>p</code> element should have the class <code>red-text</code>.</p>",testString:"assert($('p:eq(0)').hasClass('red-text'));"}],description:`<section id="description">
<p>Classes allow you to use the same CSS styles on multiple HTML elements. You can see this by applying your <code>red-text</code> class to the first <code>p</code> element.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:3,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08736",title:"Style the HTML Body Element",challengeType:0,videoUrl:"https://scrimba.com/c/cB77PHW",forumTopicId:18313,dashedName:"style-the-html-body-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>

</style>`,error:null,seed:`<style>

</style>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
body {
  background-color: black;
}
</style>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>body</code> element should have the <code>background-color</code> of black.</p>",testString:"assert($('body').css('background-color') === 'rgb(0, 0, 0)');"},{text:"<p>Your CSS rule should be properly formatted with both opening and closing curly brackets.</p>",testString:`assert(
  code.match(/<style>\\s*body\\s*\\{\\s*background.*\\s*:\\s*.*;\\s*\\}\\s*<\\/style>/i)
);`},{text:"<p>Your CSS rule should end with a semi-colon.</p>",testString:`assert(
  code.match(/<style>\\s*body\\s*\\{\\s*background.*\\s*:\\s*.*;\\s*\\}\\s*<\\/style>/i)
);`}],description:`<section id="description">
<p>Now let's start fresh and talk about CSS inheritance.</p>
<p>Every HTML page has a <code>body</code> element.</p>
</section>`,instructions:`<section id="instructions">
<p>We can prove that the <code>body</code> element exists here by giving it a <code>background-color</code> of black.</p>
<p>We can do this by adding the following to our <code>style</code> element:</p>
<pre><code class="language-css">body {
  background-color: black;
}
</code></pre>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:24,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad82fee1322bd9aedf08721",title:"Understand Absolute versus Relative Units",challengeType:0,videoUrl:"https://scrimba.com/c/cN66JSL",forumTopicId:301089,dashedName:"understand-absolute-versus-relative-units",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>red-box</code> class should have a <code>padding</code> property.</p>",testString:`assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);`},{text:"<p>Your <code>red-box</code> class should give elements 1.5em of <code>padding</code>.</p>",testString:"assert(code.match(/\\.red-box\\s*?{[\\s\\S]*padding:\\s*?1\\.5em/gi));"}],description:`<section id="description">
<p>The last several challenges all set an element's margin or padding with pixels (<code>px</code>). Pixels are a type of length unit, which is what tells the browser how to size or space an item. In addition to <code>px</code>, CSS has a number of different length unit options that you can use.</p>
<p>The two main types of length units are absolute and relative. Absolute units tie to physical units of length. For example, <code>in</code> and <code>mm</code> refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.</p>
<p>Relative units, such as <code>em</code> or <code>rem</code>, are relative to another length value. For example, <code>em</code> is based on the size of an element's font. If you use it to set the <code>font-size</code> property itself, it's relative to the parent's <code>font-size</code>.</p>
<p><strong>Note:</strong> There are several relative unit options that are tied to the size of the viewport. They are covered in the Responsive Web Design Principles section.</p>
</section>`,instructions:`<section id="instructions">
<p>Add a <code>padding</code> property to the element with class <code>red-box</code> and set it to <code>1.5em</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:23,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aecf08806",title:"Use a CSS Class to Style an Element",challengeType:0,videoUrl:"https://scrimba.com/c/c2MvDtV",forumTopicId:18337,dashedName:"use-a-css-class-to-style-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<style>
  h2 {
    color: blue;
  }
</style>

<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: red;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h2</code> element should be red.</p>",testString:"assert($('h2').css('color') === 'rgb(255, 0, 0)');"},{text:"<p>Your <code>h2</code> element should have the class <code>red-text</code>.</p>",testString:"assert($('h2').hasClass('red-text'));"},{text:"<p>Your stylesheet should declare a <code>red-text</code> class and have its color set to <code>red</code>.</p>",testString:"assert(code.match(/\\.red-text\\s*\\{\\s*color\\s*:\\s*red;\\s*\\}/g));"},{text:'<p>You should not use inline style declarations like <code>style="color: red"</code> in your <code>h2</code> element.</p>',testString:"assert($('h2').attr('style') === undefined);"}],description:`<section id="description">
<p>Classes are reusable styles that can be added to HTML elements.</p>
<p>Here's an example CSS class declaration:</p>
<pre><code class="language-html">&#x3C;style>
  .blue-text {
    color: blue;
  }
&#x3C;/style>
</code></pre>
<p>You can see that we've created a CSS class called <code>blue-text</code> within the <code>&#x3C;style></code> tag. You can apply a class to an HTML element like this: <code>&#x3C;h2 class="blue-text">CatPhotoApp&#x3C;/h2></code>. Note that in your CSS <code>style</code> element, class names start with a period. In your HTML elements' class attribute, the class name does not include the period.</p>
</section>`,instructions:`<section id="instructions">
<p>Inside your <code>style</code> element, change the <code>h2</code> selector to <code>.red-text</code> and update the color's value from <code>blue</code> to <code>red</code>.</p>
<p>Give your <code>h2</code> element the <code>class</code> attribute with a value of <code>red-text</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:2,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d727a424fe3d0e10cad12",title:"Use a custom CSS Variable",challengeType:0,videoUrl:"https://scrimba.com/c/cM989ck",forumTopicId:301090,dashedName:"use-a-custom-css-variable",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .penguin {
    --penguin-skin: gray;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  .penguin {
    --penguin-skin: gray;
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;

    /* Change code below this line */
    background: black;
    /* Change code above this line */

    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: white;
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: white;
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: orange;
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: orange;
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: orange;
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.penguin-top {background: var(--penguin-skin);} .penguin-bottom {background: var(--penguin-skin);} .right-hand {background: var(--penguin-skin);} .left-hand {background: var(--penguin-skin);}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>--penguin-skin</code> variable should be applied to the <code>background</code> property of the <code>penguin-top</code> class.</p>",testString:`assert(
  code.match(
    /.penguin-top\\s*?{[\\s\\S]*background\\s*?:\\s*?var\\s*?\\(\\s*?--penguin-skin\\s*?\\)\\s*?;[\\s\\S]*}[\\s\\S]*.penguin-bottom\\s{/gi
  )
);`},{text:"<p>The <code>--penguin-skin</code> variable should be applied to the <code>background</code> property of the <code>penguin-bottom</code> class.</p>",testString:`assert(
  code.match(
    /.penguin-bottom\\s*?{[\\s\\S]*background\\s*?:\\s*?var\\s*?\\(\\s*?--penguin-skin\\s*?\\)\\s*?;[\\s\\S]*}[\\s\\S]*.right-hand\\s{/gi
  )
);`},{text:"<p>The <code>--penguin-skin</code> variable should be applied to the <code>background</code> property of the <code>right-hand</code> class.</p>",testString:`assert(
  code.match(
    /.right-hand\\s*?{[\\s\\S]*background\\s*?:\\s*?var\\s*?\\(\\s*?--penguin-skin\\s*?\\)\\s*?;[\\s\\S]*}[\\s\\S]*.left-hand\\s{/gi
  )
);`},{text:"<p>The <code>--penguin-skin</code> variable should be applied to the <code>background</code> property of the <code>left-hand</code> class.</p>",testString:`assert(
  code.match(
    /.left-hand\\s*?{[\\s\\S]*background\\s*?:\\s*?var\\s*?\\(\\s*?--penguin-skin\\s*?\\)\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it.</p>
<pre><code class="language-css">background: var(--penguin-skin);
</code></pre>
<p>This will change the background of whatever element you are targeting to gray because that is the value of the <code>--penguin-skin</code> variable. Note that styles will not be applied unless the variable names are an exact match.</p>
</section>`,instructions:`<section id="instructions">
<p>Apply the <code>--penguin-skin</code> variable to the <code>background</code> property of the <code>penguin-top</code>, <code>penguin-bottom</code>, <code>right-hand</code> and <code>left-hand</code> classes.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:38,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d72ad424fe3d0e10cad16",title:"Use a media query to change a variable",challengeType:0,videoUrl:"https://scrimba.com/c/cWmL8UP",forumTopicId:301091,dashedName:"use-a-media-query-to-change-a-variable",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */

      /* Only change code above this line */
    }
  }

  .penguin {
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: var(--penguin-size, 300px);
    height: var(--penguin-size, 300px);
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 5%;
    left: 25%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(130deg);
    z-index: -1;
    animation-duration: 3s;
    animation-name: wave;
    animation-iteration-count: infinite;
    transform-origin:0% 0%;
    animation-timing-function: linear;
  }

  @keyframes wave {
      10% {
        transform: rotate(110deg);
      }
      20% {
        transform: rotate(130deg);
      }
      30% {
        transform: rotate(110deg);
      }
      40% {
        transform: rotate(130deg);
      }
    }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left:-23%;
    background: white;
    width: 150%;
    height: 100%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  :root {
    --penguin-size: 300px;
    --penguin-skin: gray;
    --penguin-belly: white;
    --penguin-beak: orange;
  }

  @media (max-width: 350px) {
    :root {
      /* Only change code below this line */

      /* Only change code above this line */
    }
  }

  .penguin {
    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: var(--penguin-size, 300px);
    height: var(--penguin-size, 300px);
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 5%;
    left: 25%;
    background: var(--penguin-skin, black);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(130deg);
    z-index: -1;
    animation-duration: 3s;
    animation-name: wave;
    animation-iteration-count: infinite;
    transform-origin:0% 0%;
    animation-timing-function: linear;
  }

  @keyframes wave {
      10% {
        transform: rotate(110deg);
      }
      20% {
        transform: rotate(130deg);
      }
      30% {
        transform: rotate(110deg);
      }
      40% {
        transform: rotate(130deg);
      }
    }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left:-23%;
    background: white;
    width: 150%;
    height: 100%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>@media (max-width: 350px) {:root {--penguin-size: 200px; --penguin-skin: black;}}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>:root</code> should reassign the <code>--penguin-size</code> variable to <code>200px</code>.</p>",testString:`assert(
  code.match(
    /media\\s*?\\(\\s*?max-width\\s*?:\\s*?350px\\s*?\\)\\s*?{[\\s\\S]*:root\\s*?{[\\s\\S]*--penguin-size\\s*?:\\s*?200px\\s*?;[\\s\\S]*}[\\s\\S]*}/gi
  )
);`},{text:"<p><code>:root</code> should reassign the <code>--penguin-skin</code> variable to <code>black</code>.</p>",testString:`assert(
  code.match(
    /media\\s*?\\(\\s*?max-width\\s*?:\\s*?350px\\s*?\\)\\s*?{[\\s\\S]*:root\\s*?{[\\s\\S]*--penguin-skin\\s*?:\\s*?black\\s*?;[\\s\\S]*}[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>CSS Variables can simplify the way you use media queries.</p>
<p>For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.</p>
</section>`,instructions:`<section id="instructions">
<p>In the <code>:root</code> selector of the <code>media query</code>, change it so <code>--penguin-size</code> is redefined and given a value of <code>200px</code>. Also, redefine <code>--penguin-skin</code> and give it a value of <code>black</code>. Then resize the preview to see this change in action.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:43,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08719",title:"Use Abbreviated Hex Code",challengeType:0,videoUrl:"https://scrimba.com/c/cRkpKAm",forumTopicId:18338,dashedName:"use-abbreviated-hex-code",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>`,error:null,seed:`<style>
  .red-text {
    color: #000000;
  }
  .fuchsia-text {
    color: #000000;
  }
  .cyan-text {
    color: #000000;
  }
  .green-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element with the text <code>I am red!</code> should be given the <code>color</code> red.</p>",testString:"assert($('.red-text').css('color') === 'rgb(255, 0, 0)');"},{text:"<p>The abbreviated <code>hex code</code> for the color red should be used instead of the hex code <code>#FF0000</code>.</p>",testString:"assert(code.match(/\\.red-text\\s*?{\\s*?color:\\s*?#F00\\s*?;\\s*?}/gi));"},{text:"<p>Your <code>h1</code> element with the text <code>I am green!</code> should be given the <code>color</code> green.</p>",testString:"assert($('.green-text').css('color') === 'rgb(0, 255, 0)');"},{text:"<p>The abbreviated <code>hex code</code> for the color green should be used instead of the hex code <code>#00FF00</code>.</p>",testString:"assert(code.match(/\\.green-text\\s*?{\\s*?color:\\s*?#0F0\\s*?;\\s*?}/gi));"},{text:"<p>Your <code>h1</code> element with the text <code>I am cyan!</code> should be given the <code>color</code> cyan.</p>",testString:"assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)');"},{text:"<p>The abbreviated <code>hex code</code> for the color cyan should be used instead of the hex code <code>#00FFFF</code>.</p>",testString:"assert(code.match(/\\.cyan-text\\s*?{\\s*?color:\\s*?#0FF\\s*?;\\s*?}/gi));"},{text:"<p>Your <code>h1</code> element with the text <code>I am fuchsia!</code> should be given the <code>color</code> fuchsia.</p>",testString:"assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)');"},{text:"<p>The abbreviated <code>hex code</code> for the color fuchsia should be used instead of the hex code <code>#FF00FF</code>.</p>",testString:"assert(code.match(/\\.fuchsia-text\\s*?{\\s*?color:\\s*?#F0F\\s*?;\\s*?}/gi));"}],description:`<section id="description">
<p>Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to remember hex code. Fortunately, you can shorten it.</p>
<p>For example, red's hex code <code>#FF0000</code> can be shortened to <code>#F00</code>. This shortened form gives one digit for red, one digit for green, and one digit for blue.</p>
<p>This reduces the total number of possible colors to around 4,000. But browsers will interpret <code>#FF0000</code> and <code>#F00</code> as exactly the same color.</p>
</section>`,instructions:`<section id="instructions">
<p>Go ahead, try using the abbreviated hex codes to color the correct elements.</p>
<table class='table table-striped'><tbody><tr><th>Color</th><th>Short Hex Code</th></tr><tr><td>Cyan</td><td><code>#0FF</code></td></tr><tr><td>Green</td><td><code>#0F0</code></td></tr><tr><td>Red</td><td><code>#F00</code></td></tr><tr><td>Fuchsia</td><td><code>#F0F</code></td></tr></tbody></table>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:33,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87dee1348bd9aede07836",title:"Use an id Attribute to Style an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cakyZfL",forumTopicId:18339,dashedName:"use-an-id-attribute-to-style-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }

  #cat-photo-form {
    background-color: green;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>form</code> element should have the id of <code>cat-photo-form</code>.</p>",testString:"assert($('form').attr('id') === 'cat-photo-form');"},{text:"<p>Your <code>form</code> element should have the <code>background-color</code> of green.</p>",testString:"assert($('#cat-photo-form').css('background-color') === 'rgb(0, 128, 0)');"},{text:"<p>Your <code>form</code> element should have an <code>id</code> attribute.</p>",testString:`assert(
  code.match(/<form.*cat-photo-form.*>/gi) &&
    code.match(/<form.*cat-photo-form.*>/gi).length > 0
);`},{text:"<p>You should not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.</p>",testString:"assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi));"}],description:`<section id="description">
<p>One cool thing about <code>id</code> attributes is that, like classes, you can style them using CSS.</p>
<p>However, an <code>id</code> is not reusable and should only be applied to one element. An <code>id</code> also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the <code>id</code> will be applied.</p>
<p>Here's an example of how you can take your element with the <code>id</code> attribute of <code>cat-photo-element</code> and give it the background color of green. In your <code>style</code> element:</p>
<pre><code class="language-css">#cat-photo-element {
  background-color: green;
}
</code></pre>
<p>Note that inside your <code>style</code> element, you always reference classes by putting a <code>.</code> in front of their names. You always reference ids by putting a <code>#</code> in front of their names.</p>
</section>`,instructions:`<section id="instructions">
<p>Try giving your form, which now has the <code>id</code> attribute of <code>cat-photo-form</code>, a green background.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:14,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"58c383d33e2e3259241f3076",title:"Use Attribute Selectors to Style Elements",challengeType:0,videoUrl:"https://scrimba.com/c/cnpymfJ",forumTopicId:301092,dashedName:"use-attribute-selectors-to-style-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, monospace;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }

  .silver-background {
    background-color: silver;
  }
  [type='checkbox'] {
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <div class="silver-background">
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  
  <form action="https://freecatphotoapp.com/submit-cat-photo" id="cat-photo-form">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>type</code> attribute selector should be used to select the checkboxes.</p>",testString:`assert(
  code.match(
    /<style>[\\s\\S]*?\\[\\s*?type\\s*?=\\s*?("|')checkbox\\1\\s*?\\]\\s*?{[\\s\\S]*?}[\\s\\S]*?<\\/style>/gi
  )
);`},{text:"<p>The top margins of the checkboxes should be 10px.</p>",testString:`assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginTop') === '10px') {
        count++;
      }
    });
    return count === 3;
  })()
);`},{text:"<p>The bottom margins of the checkboxes should be 15px.</p>",testString:`assert(
  (function () {
    var count = 0;
    $("[type='checkbox']").each(function () {
      if ($(this).css('marginBottom') === '15px') {
        count++;
      }
    });
    return count === 3;
  })()
);`}],description:`<section id="description">
<p>You have been adding <code>id</code> or <code>class</code> attributes to elements that you wish to specifically style. These are known as ID and class selectors. There are other CSS Selectors you can use to select custom groups of elements to style.</p>
<p>Let's bring out CatPhotoApp again to practice using CSS Selectors.</p>
<p>For this challenge, you will use the <code>[attr=value]</code> attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute <code>type</code> and a corresponding value of <code>radio</code>:</p>
<pre><code class="language-css">[type='radio'] {
  margin: 20px 0px 20px 0px;
}
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Using the <code>type</code> attribute selector, try to give the checkboxes in CatPhotoApp a top margin of 10px and a bottom margin of 15px.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:22,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9afdf08726",title:"Use Clockwise Notation to Specify the Margin of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cnpybAd",forumTopicId:18345,dashedName:"use-clockwise-notation-to-specify-the-margin-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-top') === '40px');"},{text:"<p>Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-right') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-bottom') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.</p>",testString:"assert($('.blue-box').css('margin-left') === '40px');"},{text:"<p>You should use the clockwise notation to set the margin of <code>blue-box</code> class.</p>",testString:`assert(
  /\\.blue-box\\s*{[\\s\\S]*margin[\\s]*:\\s*\\d+px\\s+\\d+px\\s+\\d+px\\s+\\d+px(;\\s*[^}]+\\s*}|;?\\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);`}],description:`<section id="description">
<p>Let's try this again, but with <code>margin</code> this time.</p>
<p>Instead of specifying an element's <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code> properties individually, you can specify them all in one line, like this:</p>
<pre><code class="language-css">margin: 10px 20px 10px 20px;
</code></pre>
<p>These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.</p>
</section>`,instructions:`<section id="instructions">
<p>Use Clockwise Notation to give the element with the <code>blue-box</code> class a margin of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:21,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08826",title:"Use Clockwise Notation to Specify the Padding of an Element",challengeType:0,videoUrl:"https://scrimba.com/c/cB7mBS9",forumTopicId:18346,dashedName:"use-clockwise-notation-to-specify-the-padding-of-an-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,error:null,seed:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-top') === '40px');"},{text:"<p>Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-right') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-bottom') === '20px');"},{text:"<p>Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>padding</code>.</p>",testString:"assert($('.blue-box').css('padding-left') === '40px');"},{text:"<p>You should use the clockwise notation to set the padding of <code>blue-box</code> class.</p>",testString:`assert(
  /\\.blue-box\\s*{[\\s\\S]*padding[\\s]*:\\s*\\d+px\\s+\\d+px\\s+\\d+px\\s+\\d+px(;\\s*[^}]+\\s*}|;?\\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);`}],description:`<section id="description">
<p>Instead of specifying an element's <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code> properties individually, you can specify them all in one line, like this:</p>
<pre><code class="language-css">padding: 10px 20px 10px 20px;
</code></pre>
<p>These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.</p>
</section>`,instructions:`<section id="instructions">
<p>Use Clockwise Notation to give the <code>.blue-box</code> class a <code>padding</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:20,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08805",title:"Use CSS Selectors to Style Elements",challengeType:0,videoUrl:"https://scrimba.com/c/cJKMBT2",forumTopicId:18349,dashedName:"use-css-selectors-to-style-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2 style="color: red;">CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  h2 {
    color: blue;
  }
</style>
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="https://freecatphotoapp.com/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>style</code> attribute should be removed from your <code>h2</code> element.</p>",testString:"assert(!$('h2').attr('style'));"},{text:"<p>You should create a <code>style</code> element.</p>",testString:"assert($('style') && $('style').length >= 1);"},{text:"<p>Your <code>h2</code> element should be blue.</p>",testString:"assert($('h2').css('color') === 'rgb(0, 0, 255)');"},{text:"<p>Your stylesheet <code>h2</code> declaration should be valid with a semicolon and closing brace.</p>",testString:"assert(code.match(/h2\\s*\\{\\s*color\\s*:.*;\\s*\\}/g));"},{text:"<p>All your <code>style</code> elements should be valid and have closing tags.</p>",testString:`assert(
  code.match(/<\\/style>/g) &&
    code.match(/<\\/style>/g).length ===
      (
        code.match(
          /<style((\\s)*((type|media|scoped|title|disabled)="[^"]*")?(\\s)*)*>/g
        ) || []
      ).length
);`}],description:`<section id="description">
<p>With CSS, there are hundreds of CSS properties that you can use to change the way an element looks on your page.</p>
<p>When you entered <code>&#x3C;h2 style="color: red;">CatPhotoApp&#x3C;/h2></code>, you were styling that individual <code>h2</code> element with inline CSS, which stands for Cascading Style Sheets.</p>
<p>That's one way to specify the style of an element, but there's a better way to apply CSS.</p>
<p>At the top of your code, create a <code>style</code> block like this:</p>
<pre><code class="language-html">&#x3C;style>
&#x3C;/style>
</code></pre>
<p>Inside that style block, you can create a <dfn>CSS selector</dfn> for all <code>h2</code> elements. For example, if you wanted all <code>h2</code> elements to be red, you would add a style rule that looks like this:</p>
<pre><code class="language-html">&#x3C;style>
  h2 {
    color: red;
  }
&#x3C;/style>
</code></pre>
<p>Note that it's important to have both opening and closing curly braces (<code>{</code> and <code>}</code>) around each element's style rule(s). You also need to make sure that your element's style definition is between the opening and closing style tags. Finally, be sure to add a semicolon to the end of each of your element's style rules.</p>
</section>`,instructions:`<section id="instructions">
<p>Delete your <code>h2</code> element's style attribute, and instead create a CSS <code>style</code> block. Add the necessary CSS to turn all <code>h2</code> elements blue.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:1,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9d725e424fe3d0e10cad10",title:"Use CSS Variables to change several elements at once",challengeType:0,videoUrl:"https://scrimba.com/c/c6bDECm",forumTopicId:301093,dashedName:"use-css-variables-to-change-several-elements-at-once",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .penguin {

    /* Only change code below this line */
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    /* Only change code above this line */

    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`,error:null,seed:`<style>
  .penguin {

    /* Only change code below this line */
    --penguin-skin: black;
    --penguin-belly: gray;
    --penguin-beak: yellow;
    /* Only change code above this line */

    position: relative;
    margin: auto;
    display: block;
    margin-top: 5%;
    width: 300px;
    height: 300px;
  }

  .penguin-top {
    top: 10%;
    left: 25%;
    background: var(--penguin-skin, gray);
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }

  .penguin-bottom {
    top: 40%;
    left: 23.5%;
    background: var(--penguin-skin, gray);
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }

  .right-hand {
    top: 0%;
    left: -5%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 120% 30%;
    transform: rotate(45deg);
    z-index: -1;
  }

  .left-hand {
    top: 0%;
    left: 75%;
    background: var(--penguin-skin, gray);
    width: 30%;
    height: 60%;
    border-radius: 30% 30% 30% 120%;
    transform: rotate(-45deg);
    z-index: -1;
  }

  .right-cheek {
    top: 15%;
    left: 35%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .left-cheek {
    top: 15%;
    left: 5%;
    background: var(--penguin-belly, white);
    width: 60%;
    height: 70%;
    border-radius: 70% 70% 60% 60%;
  }

  .belly {
    top: 60%;
    left: 2.5%;
    background: var(--penguin-belly, white);
    width: 95%;
    height: 100%;
    border-radius: 120% 120% 100% 100%;
  }

  .right-feet {
    top: 85%;
    left: 60%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(-80deg);
    z-index: -2222;
  }

  .left-feet {
    top: 85%;
    left: 25%;
    background: var(--penguin-beak, orange);
    width: 15%;
    height: 30%;
    border-radius: 50% 50% 50% 50%;
    transform: rotate(80deg);
    z-index: -2222;
  }

  .right-eye {
    top: 45%;
    left: 60%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .left-eye {
    top: 45%;
    left: 25%;
    background: black;
    width: 15%;
    height: 17%;
    border-radius: 50%;
  }

  .sparkle {
    top: 25%;
    left: 15%;
    background: white;
    width: 35%;
    height: 35%;
    border-radius: 50%;
  }

  .blush-right {
    top: 65%;
    left: 15%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .blush-left {
    top: 65%;
    left: 70%;
    background: pink;
    width: 15%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-top {
    top: 60%;
    left: 40%;
    background: var(--penguin-beak, orange);
    width: 20%;
    height: 10%;
    border-radius: 50%;
  }

  .beak-bottom {
    top: 65%;
    left: 42%;
    background: var(--penguin-beak, orange);
    width: 16%;
    height: 10%;
    border-radius: 50%;
  }

  body {
    background:#c6faf1;
  }

  .penguin * {
    position: absolute;
  }
</style>
<div class="penguin">
  <div class="penguin-bottom">
    <div class="right-hand"></div>
    <div class="left-hand"></div>
    <div class="right-feet"></div>
    <div class="left-feet"></div>
  </div>
  <div class="penguin-top">
    <div class="right-cheek"></div>
    <div class="left-cheek"></div>
    <div class="belly"></div>
    <div class="right-eye">
      <div class="sparkle"></div>
    </div>
    <div class="left-eye">
      <div class="sparkle"></div>
    </div>
    <div class="blush-right"></div>
    <div class="blush-left"></div>
    <div class="beak-top"></div>
    <div class="beak-bottom"></div>
  </div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.penguin {--penguin-skin: gray; --penguin-belly: white; --penguin-beak: orange;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>penguin</code> class should declare the <code>--penguin-skin</code> variable and assign it to <code>gray</code>.</p>",testString:`assert(
  code.match(/.penguin\\s*?{[\\s\\S]*--penguin-skin\\s*?:\\s*?gray\\s*?;[\\s\\S]*}/gi)
);`},{text:"<p><code>penguin</code> class should declare the <code>--penguin-belly</code> variable and assign it to <code>white</code>.</p>",testString:`assert(
  code.match(/.penguin\\s*?{[\\s\\S]*--penguin-belly\\s*?:\\s*?white\\s*?;[\\s\\S]*}/gi)
);`},{text:"<p><code>penguin</code> class should declare the <code>--penguin-beak</code> variable and assign it to <code>orange</code>.</p>",testString:`assert(
  code.match(/.penguin\\s*?{[\\s\\S]*--penguin-beak\\s*?:\\s*?orange\\s*?;[\\s\\S]*}/gi)
);`}],description:`<section id="description">
<p><dfn>CSS Variables</dfn> are a powerful way to change many CSS style properties at once by changing only one value.</p>
<p>Follow the instructions below to see how changing just three values can change the styling of many elements.</p>
</section>`,instructions:`<section id="instructions">
<p>In the <code>penguin</code> class, change the <code>black</code> value to <code>gray</code>, the <code>gray</code> value to <code>white</code>, and the <code>yellow</code> value to <code>orange</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:36,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08726",title:"Use Hex Code for Specific Colors",challengeType:0,videoUrl:"https://scrimba.com/c/c8W9mHM",forumTopicId:18350,dashedName:"use-hex-code-for-specific-colors",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: black;
  }
</style>`,error:null,seed:`<style>
  body {
    background-color: black;
  }
</style>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: #000000;
  }
</style>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>body</code> element should have the background-color of black.</p>",testString:"assert($('body').css('background-color') === 'rgb(0, 0, 0)');"},{text:"<p>The <code>hex code</code> for the color black should be used instead of the word <code>black</code>.</p>",testString:`assert(
  code.match(
    /body\\s*{(([\\s\\S]*;\\s*?)|\\s*?)background.*\\s*:\\s*?#000(000)?((\\s*})|(;[\\s\\S]*?}))/gi
  )
);`}],description:`<section id="description">
<p>Did you know there are other ways to represent colors in CSS? One of these ways is called hexadecimal code, or hex code for short.</p>
<p>We usually use <dfn>decimals</dfn>, or base 10 numbers, which use the symbols 0 to 9 for each digit. <dfn>Hexadecimals</dfn> (or <dfn>hex</dfn>) are base 16 numbers. This means it uses sixteen distinct symbols. Like decimals, the symbols 0-9 represent the values zero to nine. Then A,B,C,D,E,F represent the values ten to fifteen. Altogether, 0 to F can represent a digit in hexadecimal, giving us 16 total possible values. You can find more information about <a href="https://en.wikipedia.org/wiki/Hexadecimal">hexadecimal numbers here</a>.</p>
<p>In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red (R), green (G), and blue (B) components. For example, <code>#000000</code> is black and is also the lowest possible value. You can find more information about the <a href="https://en.wikipedia.org/wiki/RGB_color_model">RGB color system here</a>.</p>
<pre><code class="language-css">body {
  color: #000000;
}
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Replace the word <code>black</code> in our <code>body</code> element's background-color with its hex code representation, <code>#000000</code>.</p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:31,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08721",title:"Use Hex Code to Mix Colors",challengeType:0,videoUrl:"https://scrimba.com/c/cK89PhP",forumTopicId:18359,dashedName:"use-hex-code-to-mix-colors",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>`,error:null,seed:`<style>
  .red-text {
    color: black;
  }
  .green-text {
    color: black;
  }
  .dodger-blue-text {
    color: black;
  }
  .orange-text {
    color: black;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: #FF0000;
  }
  .green-text {
    color: #00FF00;
  }
  .dodger-blue-text {
    color: #1E90FF;
  }
  .orange-text {
    color: #FFA500;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="green-text">I am green!</h1>

<h1 class="dodger-blue-text">I am dodger blue!</h1>

<h1 class="orange-text">I am orange!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element with the text <code>I am red!</code> should be given the <code>color</code> red.</p>",testString:"assert($('.red-text').css('color') === 'rgb(255, 0, 0)');"},{text:"<p>The <code>hex code</code> for the color red should be used instead of the word <code>red</code>.</p>",testString:"assert(code.match(/\\.red-text\\s*?{\\s*?color:\\s*?(#FF0000|#F00)\\s*?;\\s*?}/gi));"},{text:"<p>Your <code>h1</code> element with the text <code>I am green!</code> should be given the <code>color</code> green.</p>",testString:"assert($('.green-text').css('color') === 'rgb(0, 255, 0)');"},{text:"<p>The <code>hex code</code> for the color green should be used instead of the word <code>green</code>.</p>",testString:"assert(code.match(/\\.green-text\\s*?{\\s*?color:\\s*?(#00FF00|#0F0)\\s*?;\\s*?}/gi));"},{text:"<p>Your <code>h1</code> element with the text <code>I am dodger blue!</code> should be given the <code>color</code> dodger blue.</p>",testString:"assert($('.dodger-blue-text').css('color') === 'rgb(30, 144, 255)');"},{text:"<p>The <code>hex code</code> for the color dodger blue should be used instead of the word <code>dodgerblue</code>.</p>",testString:"assert(code.match(/\\.dodger-blue-text\\s*?{\\s*?color:\\s*?#1E90FF\\s*?;\\s*?}/gi));"},{text:"<p>Your <code>h1</code> element with the text <code>I am orange!</code> should be given the <code>color</code> orange.</p>",testString:"assert($('.orange-text').css('color') === 'rgb(255, 165, 0)');"},{text:"<p>The <code>hex code</code> for the color orange should be used instead of the word <code>orange</code>.</p>",testString:"assert(code.match(/\\.orange-text\\s*?{\\s*?color:\\s*?#FFA500\\s*?;\\s*?}/gi));"}],description:`<section id="description">
<p>To review, hex codes use 6 hexadecimal digits to represent colors, two each for red (R), green (G), and blue (B) components.</p>
<p>From these three pure colors (red, green, and blue), we can vary the amounts of each to create over 16 million other colors!</p>
<p>For example, orange is pure red, mixed with some green, and no blue. In hex code, this translates to being <code>#FFA500</code>.</p>
<p>The digit <code>0</code> is the lowest number in hex code, and represents a complete absence of color.</p>
<p>The digit <code>F</code> is the highest number in hex code, and represents the maximum possible brightness.</p>
</section>`,instructions:`<section id="instructions">
<p>Replace the color words in our <code>style</code> element with their correct hex codes.</p>
<table class='table table-striped'><tbody><tr><th>Color</th><th>Hex Code</th></tr><tr><td>Dodger Blue</td><td><code>#1E90FF</code></td></tr><tr><td>Green</td><td><code>#00FF00</code></td></tr><tr><td>Orange</td><td><code>#FFA500</code></td></tr><tr><td>Red</td><td><code>#FF0000</code></td></tr></tbody></table>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:32,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad82fee1348bd9aedf08721",title:"Use RGB to Mix Colors",challengeType:0,videoUrl:"https://scrimba.com/c/cm24JU6",forumTopicId:18368,dashedName:"use-rgb-to-mix-colors",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>`,error:null,seed:`<style>
  .red-text {
    color: #000000;
  }
  .orchid-text {
    color: #000000;
  }
  .sienna-text {
    color: #000000;
  }
  .blue-text {
    color: #000000;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .red-text {
    color: rgb(255, 0, 0);
  }
  .orchid-text {
    color: rgb(218, 112, 214);
  }
  .sienna-text {
    color: rgb(160, 82, 45);
  }
  .blue-text {
    color:rgb(0, 0, 255);
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="orchid-text">I am orchid!</h1>

<h1 class="sienna-text">I am sienna!</h1>

<h1 class="blue-text">I am blue!</h1>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element with the text <code>I am red!</code> should have the <code>color</code> red.</p>",testString:"assert($('.red-text').css('color') === 'rgb(255, 0, 0)');"},{text:"<p>You should use <code>rgb</code> for the color red.</p>",testString:`assert(
  code.match(
    /\\.red-text\\s*?{\\s*?color:\\s*?rgb\\(\\s*?255\\s*?,\\s*?0\\s*?,\\s*?0\\s*?\\)\\s*?;\\s*?}/gi
  )
);`},{text:"<p>Your <code>h1</code> element with the text <code>I am orchid!</code> should have the <code>color</code> orchid.</p>",testString:"assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)');"},{text:"<p>You should use <code>rgb</code> for the color orchid.</p>",testString:`assert(
  code.match(
    /\\.orchid-text\\s*?{\\s*?color:\\s*?rgb\\(\\s*?218\\s*?,\\s*?112\\s*?,\\s*?214\\s*?\\)\\s*?;\\s*?}/gi
  )
);`},{text:"<p>Your <code>h1</code> element with the text <code>I am blue!</code> should have the <code>color</code> blue.</p>",testString:"assert($('.blue-text').css('color') === 'rgb(0, 0, 255)');"},{text:"<p>You should use <code>rgb</code> for the color blue.</p>",testString:`assert(
  code.match(
    /\\.blue-text\\s*?{\\s*?color:\\s*?rgb\\(\\s*?0\\s*?,\\s*?0\\s*?,\\s*?255\\s*?\\)\\s*?;\\s*?}/gi
  )
);`},{text:"<p>Your <code>h1</code> element with the text <code>I am sienna!</code> should have the <code>color</code> sienna.</p>",testString:"assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)');"},{text:"<p>You should use <code>rgb</code> for the color sienna.</p>",testString:`assert(
  code.match(
    /\\.sienna-text\\s*?{\\s*?color:\\s*?rgb\\(\\s*?160\\s*?,\\s*?82\\s*?,\\s*?45\\s*?\\)\\s*?;\\s*?}/gi
  )
);`}],description:`<section id="description">
<p>Just like with hex code, you can mix colors in RGB by using combinations of different values.</p>
</section>`,instructions:`<section id="instructions">
<p>Replace the hex codes in our <code>style</code> element with their correct RGB values.</p>
<table class='table table-striped'><tbody><tr><th>Color</th><th>RGB</th></tr><tr><td>Blue</td><td><code>rgb(0, 0, 255)</code></td></tr><tr><td>Red</td><td><code>rgb(255, 0, 0)</code></td></tr><tr><td>Orchid</td><td><code>rgb(218, 112, 214)</code></td></tr><tr><td>Sienna</td><td><code>rgb(160, 82, 45)</code></td></tr></tbody></table>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:35,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aede08718",title:"Use RGB values to Color Elements",challengeType:0,videoUrl:"https://scrimba.com/c/cRkp2fr",forumTopicId:18369,dashedName:"use-rgb-values-to-color-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    background-color: #F00;
  }
</style>`,error:null,seed:`<style>
  body {
    background-color: #F00;
  }
</style>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>body</code> element should have a black background.</p>",testString:"assert($('body').css('background-color') === 'rgb(0, 0, 0)');"},{text:"<p>You should use <code>rgb</code> to give your <code>body</code> element a background of black.</p>",testString:"assert(code.match(/rgb\\s*\\(\\s*0\\s*,\\s*0\\s*,\\s*0\\s*\\)/gi));"}],description:`<section id="description">
<p>Another way you can represent colors in CSS is by using <code>RGB</code> values.</p>
<p>The <code>RGB</code> value for black looks like this:</p>
<pre><code class="language-css">rgb(0, 0, 0)
</code></pre>
<p>The <code>RGB</code> value for white looks like this:</p>
<pre><code class="language-css">rgb(255, 255, 255)
</code></pre>
<p>Instead of using six hexadecimal digits like you do with hex code, with <code>RGB</code> you specify the brightness of each color with a number between 0 and 255.</p>
<p>If you do the math, the two digits for one color equal 16 times 16, which gives us 256 total values. So <code>RGB</code>, which starts counting from zero, has the exact same number of possible values as hex code.</p>
<p>Here's an example of how you'd change the <code>body</code> background to orange using its RGB code.</p>
<pre><code class="language-css">body {
  background-color: rgb(255, 165, 0);
}
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Let's replace the hex code in our <code>body</code> element's background color with the RGB value for black: <code>rgb(0, 0, 0)</code></p>
</section>`,block:"basic-css",order:1,superOrder:1,superBlock:"responsive-web-design",challengeOrder:34,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1}]},"basic-html-and-html5":{meta:{name:"Basic HTML and HTML5",isUpcomingChange:!1,dashedName:"basic-html-and-html5",order:0,time:"5 hours",template:"",required:[],superBlock:"responsive-web-design",superOrder:1,challengeOrder:[["bd7123c8c441eddfaeb5bdef","Say Hello to HTML Elements"],["bad87fee1348bd9aedf0887a","Headline with the h2 Element"],["bad87fee1348bd9aedf08801","Inform with the Paragraph Element"],["bad87fee1348bd9aedf08833","Fill in the Blank with Placeholder Text"],["bad87fee1348bd9aedf08802","Uncomment HTML"],["bad87fee1348bd9aedf08804","Comment out HTML"],["bad87fed1348bd9aedf08833","Delete HTML Elements"],["bad87fee1348bd9aecf08801","Introduction to HTML5 Elements"],["bad87fee1348bd9aedf08812","Add Images to Your Website"],["bad87fee1348bd9aedf08816","Link to External Pages with Anchor Elements"],["bad88fee1348bd9aedf08816","Link to Internal Sections of a Page with Anchor Elements"],["bad87fee1348bd9aede08817","Nest an Anchor Element within a Paragraph"],["bad87fee1348bd9aedf08817","Make Dead Links Using the Hash Symbol"],["bad87fee1348bd9aedf08820","Turn an Image into a Link"],["bad87fee1348bd9aedf08827","Create a Bulleted Unordered List"],["bad87fee1348bd9aedf08828","Create an Ordered List"],["bad87fee1348bd9aedf08829","Create a Text Field"],["bad87fee1348bd9aedf08830","Add Placeholder Text to a Text Field"],["bad87fee1348bd9aede08830","Create a Form Element"],["bad87fee1348bd9aedd08830","Add a Submit Button to a Form"],["bad87fee1348bd9aedc08830","Use HTML5 to Require a Field"],["bad87fee1348bd9aedf08834","Create a Set of Radio Buttons"],["bad87fee1348bd9aedf08835","Create a Set of Checkboxes"],["5c6c06847491271903d37cfd","Use the value attribute with Radio Buttons and Checkboxes"],["bad87fee1348bd9aedd08835","Check Radio Buttons and Checkboxes by Default"],["bad87fee1348bd9aede08835","Nest Many Elements within a Single div Element"],["587d78aa367417b2b2512aed","Declare the Doctype of an HTML Document"],["587d78aa367417b2b2512aec","Define the Head and Body of an HTML Document"]],helpRoom:"Help",fileName:"01-responsive-web-design/basic-html-and-html5.json"},challenges:[{id:"bad87fee1348bd9aedd08830",title:"Add a Submit Button to a Form",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cp2Nkhz",forumTopicId:16627,dashedName:"add-a-submit-button-to-a-form",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>form</code> should have a <code>button</code> inside it.</p>",testString:"assert($('form').children('button').length > 0);"},{text:"<p>Your submit button should have the attribute <code>type</code> set to <code>submit</code>.</p>",testString:"assert($('button').attr('type') === 'submit');"},{text:"<p>Your submit button should only have the text <code>Submit</code>.</p>",testString:`assert(
  $('button')
    .text()
    .match(/^\\s*submit\\s*$/gi)
);`},{text:"<p>Your <code>button</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\\/button>/g).length === code.match(/<button/g).length
);`}],description:`<section id="description">
<p>Let's add a <code>submit</code> button to your form. Clicking this button will send the data from your form to the URL you specified with your form's <code>action</code> attribute.</p>
<p>Here's an example submit button:</p>
<pre><code class="language-html">&#x3C;button type="submit">this button submits the form&#x3C;/button>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Add a button as the last element of your <code>form</code> element with a type of <code>submit</code>, and <code>Submit</code> as its text.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:19,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08812",title:"Add Images to Your Website",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/c8EbJf2",forumTopicId:16640,dashedName:"add-images-to-your-website",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>


  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your page should have an image element.</p>",testString:"assert($('img').length);"},{text:"<p>Your image should have a <code>src</code> attribute that points to the kitten image.</p>",testString:"assert(/^https:\\/\\/(www\\.)?bit\\.ly\\/fcc-relaxing-cat$/i.test($('img').attr('src')));"},{text:"<p>Your image element's <code>alt</code> attribute should not be empty.</p>",testString:`assert(
  $('img').attr('alt') &&
    $('img').attr('alt').length &&
    /<img\\S*alt=(['"])(?!\\1|>)\\S+\\1\\S*\\/?>/.test(
      __helpers.removeWhiteSpace(code)
    )
);`}],description:`<section id="description">
<p>You can add images to your website by using the <code>img</code> element, and point to a specific image's URL using the <code>src</code> attribute.</p>
<p>An example of this would be:</p>
<pre><code class="language-html">&#x3C;img src="https://www.freecatphotoapp.com/your-image.jpg">
</code></pre>
<p>Note that <code>img</code> elements are self-closing.</p>
<p>All <code>img</code> elements <strong>must</strong> have an <code>alt</code> attribute. The text inside an <code>alt</code> attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.</p>
<p><strong>Note:</strong> If the image is purely decorative, using an empty <code>alt</code> attribute is a best practice.</p>
<p>Ideally the <code>alt</code> attribute should not contain special characters unless needed.</p>
<p>Let's add an <code>alt</code> attribute to our <code>img</code> example above:</p>
<pre><code class="language-html">&#x3C;img src="https://www.freecatphotoapp.com/your-image.jpg" alt="A business cat wearing a necktie.">
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Let's try to add an image to our website:</p>
<p>Within the existing <code>main</code> element, insert an <code>img</code> element before the existing <code>p</code> elements.</p>
<p>Now set the <code>src</code> attribute so that it points to the url <code>https://www.bit.ly/fcc-relaxing-cat</code></p>
<p>Finally, don't forget to give your <code>img</code> element an <code>alt</code> attribute with applicable text.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:8,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08830",title:"Add Placeholder Text to a Text Field",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cKdJDhg",forumTopicId:16647,dashedName:"add-placeholder-text-to-a-text-field",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text">
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should add a <code>placeholder</code> attribute to the existing text <code>input</code> element.</p>",testString:"assert($('input[placeholder]').length > 0);"},{text:"<p>You should set the value of your <code>placeholder</code> attribute to <code>cat photo URL</code>.</p>",testString:`assert(
  $('input') &&
    $('input').attr('placeholder') &&
    $('input')
      .attr('placeholder')
      .match(/cat\\s+photo\\s+URL/gi)
);`},{text:"<p>The finished <code>input</code> element should not have a closing tag.</p>",testString:"assert(!code.match(/<input.*\\/?>.*<\\/input>/gi));"},{text:"<p>The finished <code>input</code> element should have valid syntax.</p>",testString:"assert($('input[type=text]').length > 0);"}],description:`<section id="description">
<p>Placeholder text is what is displayed in your <code>input</code> element before your user has inputted anything.</p>
<p>You can create placeholder text like so:</p>
<pre><code class="language-html">&#x3C;input type="text" placeholder="this is placeholder text">
</code></pre>
<p><strong>Note:</strong> Remember that <code>input</code> elements are self-closing.</p>
</section>`,instructions:`<section id="instructions">
<p>Set the <code>placeholder</code> value of your text <code>input</code> to "cat photo URL".</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:17,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedd08835",title:"Check Radio Buttons and Checkboxes by Default",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cWk3Qh6",forumTopicId:301094,dashedName:"check-radio-buttons-and-checkboxes-by-default",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your first radio button on your form should be checked by default.</p>",testString:`assert($('input[type="radio"]').prop('checked'));`},{text:"<p>Your first checkbox on your form should be checked by default.</p>",testString:`assert($('input[type="checkbox"]').prop('checked'));`}],description:`<section id="description">
<p>You can set a checkbox or radio button to be checked by default using the <code>checked</code> attribute.</p>
<p>To do this, just add the word <code>checked</code> to the inside of an input element. For example:</p>
<pre><code class="language-html">&#x3C;input type="radio" name="test-name" checked>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Set the first of your radio buttons and the first of your checkboxes to both be checked by default.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:24,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08804",title:"Comment out HTML",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cGyGbca",forumTopicId:16782,dashedName:"comment-out-html",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->`,error:null,seed:`<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<!--<h1>Hello World</h1>-->
<h2>CatPhotoApp</h2> 
<!--<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p> -->`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should be commented out so that it is not visible on the page.</p>",testString:"assert($('h1').length === 0);"},{text:"<p>Your <code>h2</code> element should not be commented out so that it is visible on the page.</p>",testString:"assert($('h2').length > 0);"},{text:"<p>Your <code>p</code> element should be commented out so that it is not visible on the page.</p>",testString:"assert($('p').length === 0);"},{text:"<p>Each of your comments should be closed with <code>--></code>.</p>",testString:"assert(code.match(/[^fc]-->/g).length > 1);"},{text:"<p>You should not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.</p>",testString:`assert(
  code.match(/<([a-z0-9]){1,2}>/g)[0] === '<h1>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[1] === '<h2>' &&
    code.match(/<([a-z0-9]){1,2}>/g)[2] === '<p>'
);`}],description:`<section id="description">
<p>Remember that in order to start a comment, you need to use <code>&#x3C;!--</code> and to end a comment, you need to use <code>--></code></p>
<p>Here you'll need to end the comment before your <code>h2</code> element begins.</p>
</section>`,instructions:`<section id="instructions">
<p>Comment out your <code>h1</code> element and your <code>p</code> element, but not your <code>h2</code> element.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:5,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08827",title:"Create a Bulleted Unordered List",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cDKVPuv",forumTopicId:16814,dashedName:"create-a-bulleted-unordered-list",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <ul>
    <li>milk</li>
    <li>mice</li>
    <li>catnip</li>
  </ul>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Create a <code>ul</code> element.</p>",testString:"assert($('ul').length > 0);"},{text:"<p>You should have three <code>li</code> elements within your <code>ul</code> element.</p>",testString:"assert($('ul li').length > 2);"},{text:"<p>Your <code>ul</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/ul>/gi) &&
    code.match(/<ul/gi) &&
    code.match(/<\\/ul>/gi).length === code.match(/<ul/gi).length
);`},{text:"<p>Your <code>li</code> elements should have closing tags.</p>",testString:`assert(
  code.match(/<\\/li>/gi) &&
    code.match(/<li[\\s>]/gi) &&
    code.match(/<\\/li>/gi).length === code.match(/<li[\\s>]/gi).length
);`},{text:"<p>Your <code>li</code> elements should not contain an empty string or only white-space.</p>",testString:"assert($('ul li').filter((_, item) => !$(item).text().trim()).length === 0);"}],description:`<section id="description">
<p>HTML has a special element for creating <dfn>unordered lists</dfn>, or bullet point style lists.</p>
<p>Unordered lists start with an opening <code>&#x3C;ul></code> element, followed by any number of <code>&#x3C;li></code> elements. Finally, unordered lists close with a <code>&#x3C;/ul></code></p>
<p>For example:</p>
<pre><code class="language-html">&#x3C;ul>
  &#x3C;li>milk&#x3C;/li>
  &#x3C;li>cheese&#x3C;/li>
&#x3C;/ul>
</code></pre>
<p>would create a bullet point style list of <code>milk</code> and <code>cheese</code>.</p>
</section>`,instructions:`<section id="instructions">
<p>Remove the last two <code>p</code> elements and create an unordered list of three things that cats love at the bottom of the page.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:14,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aede08830",title:"Create a Form Element",challengeType:0,forumTopicId:16817,dashedName:"create-a-form-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <input type="text" placeholder="cat photo URL">
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The existing <code>input</code> element should be nested within a <code>form</code> element.</p>",testString:`const inputElem = document.querySelector('form input');
assert(
  inputElem.getAttribute('type') === 'text' &&
    inputElem.getAttribute('placeholder') === 'cat photo URL'
);`},{text:"<p>Your <code>form</code> should have an <code>action</code> attribute which is set to <code>https://www.freecatphotoapp.com/submit-cat-photo</code></p>",testString:`const action = $('form').attr('action');
assert(action.match(/^https:\\/\\/(www\\.)?freecatphotoapp\\.com\\/submit-cat-photo$/i))`},{text:"<p>Your <code>form</code> element should have well-formed open and close tags.</p>",testString:`assert(
  code.match(/<\\/form>/g) &&
    code.match(/<form [^<]*>/g) &&
    code.match(/<\\/form>/g).length === code.match(/<form [^<]*>/g).length
);`}],description:`<section id="description">
<p>You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an <code>action</code> attribute on your <code>form</code> element.</p>
<p>For example:</p>
<pre><code class="language-html">&#x3C;form action="/url-where-you-want-to-submit-form-data">
  &#x3C;input>
&#x3C;/form>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Nest the existing <code>input</code> element inside a <code>form</code> element and assign <code>"https://www.freecatphotoapp.com/submit-cat-photo"</code> to the <code>action</code> attribute of the <code>form</code> element.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:18,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08835",title:"Create a Set of Checkboxes",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cqrkJsp",forumTopicId:16821,dashedName:"create-a-set-of-checkboxes",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="playful"><input id="playful" type="checkbox" name="personality">Playful</label>
    <label for="lazy"><input id="lazy" type="checkbox" 
name="personality">Lazy</label>
    <label for="evil"><input id="evil" type="checkbox" 
name="personality">Evil</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your page should have three checkbox elements.</p>",testString:`assert($('input[type="checkbox"]').length > 2);`},{text:"<p>Each of your three checkbox elements should be nested in its own <code>label</code> element.</p>",testString:`assert($('label > input[type="checkbox"]:only-child').length > 2);`},{text:"<p>Make sure each of your <code>label</code> elements has a closing tag.</p>",testString:`assert(
  code.match(/<\\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\\/label>/g).length === code.match(/<label/g).length
);`},{text:"<p>Your checkboxes should be given the <code>name</code> attribute of <code>personality</code>.</p>",testString:`assert(
  $('label > input[type="checkbox"]').filter('[name="personality"]').length > 2
);`},{text:"<p>Each of your checkboxes should be added within the <code>form</code> tag.</p>",testString:"assert($('label').parent().get(0).tagName.match('FORM'));"}],description:`<section id="description">
<p>Forms commonly use <dfn>checkboxes</dfn> for questions that may have more than one answer.</p>
<p>Checkboxes are a type of <code>input</code>.</p>
<p>Each of your checkboxes can be nested within its own <code>label</code> element. By wrapping an <code>input</code> element inside of a <code>label</code> element it will automatically associate the checkbox input with the label element surrounding it.</p>
<p>All related checkbox inputs should have the same <code>name</code> attribute.</p>
<p>It is considered best practice to explicitly define the relationship between a checkbox <code>input</code> and its corresponding <code>label</code> by setting the <code>for</code> attribute on the <code>label</code> element to match the <code>id</code> attribute of the associated <code>input</code> element.</p>
<p>Here's an example of a checkbox:</p>
<pre><code class="language-html">&#x3C;label for="loving">&#x3C;input id="loving" type="checkbox" name="personality"> Loving&#x3C;/label>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Add to your form a set of three checkboxes. Each checkbox should be nested within its own <code>label</code> element. All three should share the <code>name</code> attribute of <code>personality</code>.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:22,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08834",title:"Create a Set of Radio Buttons",challengeType:0,forumTopicId:16822,dashedName:"create-a-set-of-radio-buttons",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
   <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your page should have two <code>radio</code> button elements.</p>",testString:`assert($('input[type="radio"]').length > 1);`},{text:"<p>Your radio buttons should be given the <code>name</code> attribute of <code>indoor-outdoor</code>.</p>",testString:`assert($('input[type="radio"]').filter("[name='indoor-outdoor']").length > 1);`},{text:"<p>Each of your two radio button elements should be nested in its own <code>label</code> element.</p>",testString:`assert($('label > input[type="radio"]:only-child').length > 1);`},{text:"<p>Each of your <code>label</code> elements should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/label>/g) &&
    code.match(/<label/g) &&
    code.match(/<\\/label>/g).length === code.match(/<label/g).length
);`},{text:"<p>One of your radio buttons should have the label <code>indoor</code>.</p>",testString:`assert(
  $('label')
    .text()
    .match(/indoor/gi)
);`},{text:"<p>One of your radio buttons should have the label <code>outdoor</code>.</p>",testString:`assert(
  $('label')
    .text()
    .match(/outdoor/gi)
);`},{text:"<p>Each of your radio button elements should be added within the <code>form</code> tag.</p>",testString:"assert($('label').parent().get(0).tagName.match('FORM'));"}],description:`<section id="description">
<p>You can use <dfn>radio buttons</dfn> for questions where you want the user to only give you one answer out of multiple options.</p>
<p>Radio buttons are a type of <code>input</code>.</p>
<p>Each of your radio buttons can be nested within its own <code>label</code> element. By wrapping an <code>input</code> element inside of a <code>label</code> element it will automatically associate the radio button input with the label element surrounding it.</p>
<p>All related radio buttons should have the same <code>name</code> attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.</p>
<p>Here's an example of a radio button:</p>
<pre><code class="language-html">&#x3C;label> 
  &#x3C;input type="radio" name="indoor-outdoor">Indoor 
&#x3C;/label>
</code></pre>
<p>It is considered best practice to set a <code>for</code> attribute on the <code>label</code> element, with a value that matches the value of the <code>id</code> attribute of the <code>input</code> element. This allows assistive technologies to create a linked relationship between the label and the related <code>input</code> element. For example:</p>
<pre><code class="language-html">&#x3C;input id="indoor" type="radio" name="indoor-outdoor">
&#x3C;label for="indoor">Indoor&#x3C;/label>
</code></pre>
<p>We can also nest the <code>input</code> element within the <code>label</code> tags:</p>
<pre><code class="language-html">&#x3C;label for="indoor"> 
  &#x3C;input id="indoor" type="radio" name="indoor-outdoor">Indoor 
&#x3C;/label>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Add a pair of radio buttons to your form, each nested in its own <code>label</code> element. One should have the option of <code>indoor</code> and the other should have the option of <code>outdoor</code>. Both should share the <code>name</code> attribute of <code>indoor-outdoor</code> to create a radio group.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:21,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08829",title:"Create a Text Field",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/c2EVnf6",forumTopicId:16823,dashedName:"create-a-text-field",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>


</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>


</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form>
    <input type="text">
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your app should have an <code>input</code> element of type <code>text</code>.</p>",testString:"assert($('input[type=text]').length > 0);"}],description:`<section id="description">
<p>Now let's create a web form.</p>
<p><code>input</code> elements are a convenient way to get input from your user.</p>
<p>You can create a text input like this:</p>
<pre><code class="language-html">&#x3C;input type="text">
</code></pre>
<p>Note that <code>input</code> elements are self-closing.</p>
</section>`,instructions:`<section id="instructions">
<p>Create an <code>input</code> element of type <code>text</code> below your lists.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:16,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08828",title:"Create an Ordered List",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cQ3B8TM",forumTopicId:16824,dashedName:"create-an-ordered-list",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>hate 1</li>
    <li>hate 2</li>
    <li>hate 3</li>
  </ol>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should have an ordered list for <code>Top 3 things cats hate:</code></p>",testString:"assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));"},{text:"<p>You should have an unordered list for <code>Things cats love:</code></p>",testString:"assert(/Things cats love:/i.test($('ul').prev().text()));"},{text:"<p>You should have only one <code>ul</code> element.</p>",testString:"assert.equal($('ul').length, 1);"},{text:"<p>You should have only one <code>ol</code> element.</p>",testString:"assert.equal($('ol').length, 1);"},{text:"<p>You should have three <code>li</code> elements within your <code>ul</code> element.</p>",testString:"assert.equal($('ul li').length, 3);"},{text:"<p>You should have three <code>li</code> elements within your <code>ol</code> element.</p>",testString:"assert.equal($('ol li').length, 3);"},{text:"<p>Your <code>ul</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/ul>/g) &&
    code.match(/<\\/ul>/g).length === code.match(/<ul>/g).length
);`},{text:"<p>Your <code>ol</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/ol>/g) &&
    code.match(/<\\/ol>/g).length === code.match(/<ol>/g).length
);`},{text:"<p>Your <code>li</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\\/li>/g).length === code.match(/<li>/g).length
);`},{text:"<p>The <code>li</code> elements in your unordered list should not be empty.</p>",testString:`$('ul li').each((i, val) =>
  assert(__helpers.removeWhiteSpace(val.textContent))
);`},{text:"<p>The <code>li</code> elements in your ordered list should not be empty.</p>",testString:`$('ol li').each((i, val) =>
  assert(!!__helpers.removeWhiteSpace(val.textContent))
);`}],description:`<section id="description">
<p>HTML has another special element for creating <dfn>ordered lists</dfn>, or numbered lists.</p>
<p>Ordered lists start with an opening <code>&#x3C;ol></code> element, followed by any number of <code>&#x3C;li></code> elements. Finally, ordered lists are closed with the <code>&#x3C;/ol></code> tag.</p>
<p>For example:</p>
<pre><code class="language-html">&#x3C;ol>
  &#x3C;li>Garfield&#x3C;/li>
  &#x3C;li>Sylvester&#x3C;/li>
&#x3C;/ol>
</code></pre>
<p>would create a numbered list of <code>Garfield</code> and <code>Sylvester</code>.</p>
</section>`,instructions:`<section id="instructions">
<p>Create an ordered list of the top 3 things cats hate the most.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:15,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78aa367417b2b2512aed",title:"Declare the Doctype of an HTML Document",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cra98AJ",forumTopicId:301095,dashedName:"declare-the-doctype-of-an-html-document",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:"",error:null,seed:""}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your code should include a <code>&#x3C;!DOCTYPE html></code> tag.</p>",testString:"assert(code.match(/<!DOCTYPE\\s+?html\\s*?>/gi));"},{text:"<p>There should be one <code>html</code> element.</p>",testString:"assert($('html').length == 1);"},{text:"<p>The <code>html</code> tags should wrap around one <code>h1</code> element.</p>",testString:"assert(code.match(/<html>\\s*?<h1>\\s*?.*?\\s*?<\\/h1>\\s*?<\\/html>/gi));"}],description:`<section id="description">
<p>The challenges so far have covered specific HTML elements and their uses. However, there are a few elements that give overall structure to your page, and should be included in every HTML document.</p>
<p>At the top of your document, you need to tell the browser which version of HTML your page is using. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.</p>
<p>You tell the browser this information by adding the <code>&#x3C;!DOCTYPE ...></code> tag on the first line, where the <code>...</code> part is the version of HTML. For HTML5, you use <code>&#x3C;!DOCTYPE html></code>.</p>
<p>The <code>!</code> and uppercase <code>DOCTYPE</code> is important, especially for older browsers. The <code>html</code> is not case sensitive.</p>
<p>Next, the rest of your HTML code needs to be wrapped in <code>html</code> tags. The opening <code>&#x3C;html></code> goes directly below the <code>&#x3C;!DOCTYPE html></code> line, and the closing <code>&#x3C;/html></code> goes at the end of the page.</p>
<p>Here's an example of the page structure. Your HTML code would go in the space between the two <code>html</code> tags.</p>
<pre><code class="language-html">&#x3C;!DOCTYPE html>
&#x3C;html>

&#x3C;/html>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Add a <code>DOCTYPE</code> tag for HTML5 to the top of the blank HTML document in the code editor. Under it, add opening and closing <code>html</code> tags, which wrap around an <code>h1</code> element. The heading can include any text.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:26,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78aa367417b2b2512aec",title:"Define the Head and Body of an HTML Document",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cra9bfP",forumTopicId:301096,dashedName:"define-the-head-and-body-of-an-html-document",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>`,error:null,seed:`<!DOCTYPE html>
<html>
  <title>The best page ever</title>

  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

</html>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<!DOCTYPE html>
<html>
 <head>
  <title>The best page ever</title>
 </head>
 <body>
  <h1>The best page ever</h1>
  <p>Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed. Go into a room to decide you didn't want to be in there anyway. I like big cats and i can not lie kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Meow i could pee on this if i had the energy for slap owner's face at 5am until human fills food dish yet scamper. Knock dish off table head butt cant eat out of my own dish scratch the furniture. Make meme, make cute face. Sleep in the bathroom sink chase laser but pee in the shoe. Paw at your fat belly licks your face and eat grass, throw it back up kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
 </body>
</html>`,head:"",tail:"",id:""}}],tests:[{text:"<p>There should be only one <code>head</code> element on the page.</p>",testString:`const headElems = code.replace(/\\n/g, '').match(/\\<head\\s*>.*?\\<\\/head\\s*>/g);
assert(headElems && headElems.length === 1);`},{text:"<p>There should be only one <code>body</code> element on the page.</p>",testString:`const bodyElems = code.replace(/\\n/g, '').match(/<body\\s*>.*?<\\/body\\s*>/g);
assert(bodyElems && bodyElems.length === 1);`},{text:"<p>The <code>head</code> element should be a child of the <code>html</code> element.</p>",testString:`const htmlChildren = code
  .replace(/\\n/g, '')
  .match(/<html\\s*>(?<children>.*)<\\/html\\s*>/);
let foundHead;
if (htmlChildren) {
  const { children } = htmlChildren.groups;

  foundHead = children.match(/<head\\s*>.*<\\/head\\s*>/);
}
assert(foundHead);`},{text:"<p>The <code>body</code> element should be a child of the <code>html</code> element.</p>",testString:`const htmlChildren = code
  .replace(/\\n/g, '')
  .match(/<html\\s*>(?<children>.*?)<\\/html\\s*>/);
let foundBody;
if (htmlChildren) {
  const { children } = htmlChildren.groups;
  foundBody = children.match(/<body\\s*>.*<\\/body\\s*>/);
}
assert(foundBody);`},{text:"<p>The <code>head</code> element should wrap around the <code>title</code> element.</p>",testString:`const headChildren = code
  .replace(/\\n/g, '')
  .match(/<head\\s*>(?<children>.*?)<\\/head\\s*>/);
let foundTitle;
if (headChildren) {
  const { children } = headChildren.groups;
  foundTitle = children.match(/<title\\s*>.*?<\\/title\\s*>/);
}
assert(foundTitle);`},{text:"<p>The <code>body</code> element should wrap around both the <code>h1</code> and <code>p</code> elements.</p>",testString:`const bodyChildren = code
  .replace(/\\n/g, '')
  .match(/<body\\s*>(?<children>.*?)<\\/body\\s*>/);
let foundElems;
if (bodyChildren) {
  const { children } = bodyChildren.groups;
  const h1s = children.match(/<h1\\s*>.*<\\/h1\\s*>/g);
  const ps = children.match(/<p\\s*>.*<\\/p\\s*>/g);
  const numH1s = h1s ? h1s.length : 0;
  const numPs = ps ? ps.length : 0;
  foundElems = numH1s === 1 && numPs === 1;
}
assert(foundElems);`}],description:`<section id="description">
<p>You can add another level of organization in your HTML document within the <code>html</code> tags with the <code>head</code> and <code>body</code> elements. Any markup with information about your page would go into the <code>head</code> tag. Then any markup with the content of the page (what displays for a user) would go into the <code>body</code> tag.</p>
<p>Metadata elements, such as <code>link</code>, <code>meta</code>, <code>title</code>, and <code>style</code>, typically go inside the <code>head</code> element.</p>
<p>Here's an example of a page's layout:</p>
<pre><code class="language-html">&#x3C;!DOCTYPE html>
&#x3C;html>
  &#x3C;head>
    &#x3C;meta />
  &#x3C;/head>
  &#x3C;body>
    &#x3C;div>
    &#x3C;/div>
  &#x3C;/body>
&#x3C;/html>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Edit the markup so there's a <code>head</code> and a <code>body</code>. The <code>head</code> element should only include the <code>title</code>, and the <code>body</code> element should only include the <code>h1</code> and <code>p</code>.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:27,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fed1348bd9aedf08833",title:"Delete HTML Elements",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/ckK73C9",forumTopicId:17559,dashedName:"delete-html-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`,error:null,seed:`<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<h2>CatPhotoApp</h2><p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>",head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should be deleted.</p>",testString:"assert(!code.match(/<h1>/gi) && !code.match(/<\\/h1>/gi));"},{text:"<p>Your <code>h2</code> element should be on the page.</p>",testString:"assert(code.match(/<h2>[\\w\\W]*<\\/h2>/gi));"},{text:"<p>Your <code>p</code> element should be on the page.</p>",testString:"assert(code.match(/<p>[\\w\\W]*<\\/p>/gi));"}],description:`<section id="description">
<p>Our phone doesn't have much vertical space.</p>
<p>Let's remove the unnecessary elements so we can start building our CatPhotoApp.</p>
</section>`,instructions:`<section id="instructions">
<p>Delete your <code>h1</code> element so we can simplify our view.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:6,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08833",title:"Fill in the Blank with Placeholder Text",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cgR7Dc7",forumTopicId:18178,dashedName:"fill-in-the-blank-with-placeholder-text",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>`,error:null,seed:`<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff</p>`,head:"",tail:"",id:""}}],tests:[{text:'<p>Your <code>p</code> element should contain the first few words of the provided "kitty ipsum" text.</p>',testString:"assert.isTrue(/Kitty(\\s)+ipsum/gi.test($('p').text()));"}],description:`<section id="description">
<p>Web developers traditionally use <dfn>lorem ipsum text</dfn> as placeholder text. The lorem ipsum text is randomly scraped from a famous passage by Cicero of Ancient Rome.</p>
<p>Lorem ipsum text has been used as placeholder text by typesetters since the 16th century, and this tradition continues on the web.</p>
<p>Well, 5 centuries is long enough. Since we're building a CatPhotoApp, let's use something called "kitty ipsum" text.</p>
</section>`,instructions:`<section id="instructions">
<p>Replace the text inside your <code>p</code> element with the first few words of this kitty ipsum text: <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code></p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:3,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf0887a",title:"Headline with the h2 Element",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cE8Gqf3",forumTopicId:18196,dashedName:"headline-with-the-h2-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:"<h1>Hello World</h1>",error:null,seed:"<h1>Hello World</h1>"}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h1>Hello World</h1>
<h2>CatPhotoApp</h2>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should create an <code>h2</code> element.</p>",testString:"assert($('h2').length > 0);"},{text:"<p>Your <code>h2</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/h2>/g) &&
    code.match(/<\\/h2>/g).length === code.match(/<h2>/g).length
);`},{text:"<p>Your <code>h2</code> element should have the text <code>CatPhotoApp</code>.</p>",testString:"assert.isTrue(/cat(\\s)?photo(\\s)?app/gi.test($('h2').text()));"},{text:"<p>Your <code>h1</code> element should have the text <code>Hello World</code>.</p>",testString:"assert.isTrue(/hello(\\s)+world/gi.test($('h1').text()));"},{text:"<p>Your <code>h1</code> element should be before your <code>h2</code> element.</p>",testString:"assert(code.match(/<h1>\\s*?.*?\\s*?<\\/h1>\\s*<h2>\\s*?.*?\\s*?<\\/h2>/gi));"}],description:`<section id="description">
<p>Over the next few lessons, we'll build an HTML5 cat photo web app piece-by-piece.</p>
<p>The <code>h2</code> element you will be adding in this step will add a level two heading to the web page.</p>
<p>This element tells the browser about the structure of your website. <code>h1</code> elements are often used for main headings, while <code>h2</code> elements are generally used for subheadings. There are also <code>h3</code>, <code>h4</code>, <code>h5</code> and <code>h6</code> elements to indicate different levels of subheadings.</p>
</section>`,instructions:`<section id="instructions">
<p>Add an <code>h2</code> tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" <code>h1</code> element.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:1,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08801",title:"Inform with the Paragraph Element",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/ceZ7DtN",forumTopicId:18202,dashedName:"inform-with-the-paragraph-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h1>Hello World</h1>
<h2>CatPhotoApp</h2>`,error:null,seed:`<h1>Hello World</h1>
<h2>CatPhotoApp</h2>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your code should have a valid <code>p</code> element.</p>",testString:"assert($('p').length > 0);"},{text:"<p>Your <code>p</code> element should have the text <code>Hello Paragraph</code>.</p>",testString:"assert.isTrue(/hello(\\s)+paragraph/gi.test($('p').text()));"},{text:"<p>Your <code>p</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/p>/g) &&
    code.match(/<\\/p>/g).length === code.match(/<p/g).length
);`}],description:`<section id="description">
<p><code>p</code> elements are the preferred element for paragraph text on websites. <code>p</code> is short for "paragraph".</p>
<p>You can create a paragraph element like this:</p>
<pre><code class="language-html">&#x3C;p>I'm a p tag!&#x3C;/p>
</code></pre>
</section>`,instructions:`<section id="instructions">
<p>Create a <code>p</code> element below your <code>h2</code> element, and give it the text <code>Hello Paragraph</code>.</p>
<p><strong>Note:</strong> As a convention, all HTML tags are written in lowercase, for example <code>&#x3C;p>&#x3C;/p></code> and not <code>&#x3C;P>&#x3C;/P></code>.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:2,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aecf08801",title:"Introduction to HTML5 Elements",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cBkZGpt7",forumTopicId:301097,dashedName:"introduction-to-html5-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`,error:null,seed:`<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should have 2 <code>p</code> elements with Kitty Ipsum text.</p>",testString:"assert($('p').length > 1);"},{text:"<p>Each of your <code>p</code> elements should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/p>/g) &&
    code.match(/<\\/p>/g).length === code.match(/<p/g).length
);`},{text:"<p>Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.</p>",testString:"assert.isTrue(/Purr\\s+jump\\s+eat/gi.test($('p').text()));"},{text:"<p>Your code should have one <code>main</code> element.</p>",testString:"assert($('main').length === 1);"},{text:"<p>The <code>main</code> element should have two paragraph elements as children.</p>",testString:"assert($('main').children('p').length === 2);"},{text:"<p>The opening <code>main</code> tag should come before the first paragraph tag.</p>",testString:"assert(code.match(/<main>\\s*?<p>/g));"},{text:"<p>The closing <code>main</code> tag should come after the second closing paragraph tag.</p>",testString:"assert(code.match(/<\\/p>\\s*?<\\/main>/g));"}],description:`<section id="description">
<p>HTML5 introduces more descriptive HTML tags. These include <code>main</code>, <code>header</code>, <code>footer</code>, <code>nav</code>, <code>video</code>, <code>article</code>, <code>section</code> and others.</p>
<p>These tags give a descriptive structure to your HTML, make your HTML easier to read, and help with Search Engine Optimization (SEO) and accessibility. The <code>main</code> HTML5 tag helps search engines and other developers find the main content of your page.</p>
<p>Example usage, a <code>main</code> element with two child elements nested inside it:</p>
<pre><code class="language-html">&#x3C;main> 
  &#x3C;h1>Hello World&#x3C;/h1>
  &#x3C;p>Hello Paragraph&#x3C;/p>
&#x3C;/main>
</code></pre>
<p><strong>Note:</strong> Many of the new HTML5 tags and their benefits are covered in the Applied Accessibility section.</p>
</section>`,instructions:`<section id="instructions">
<p>Create a second <code>p</code> element with the following kitty ipsum text: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code></p>
<p>Then, create a <code>main</code> element and nest only the two <code>p</code> elements inside the <code>main</code> element.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:7,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08816",title:"Link to External Pages with Anchor Elements",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/c8EkncB",forumTopicId:18226,dashedName:"link-to-external-pages-with-anchor-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>



  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>



  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  
  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  <a href="https://www.freecatphotoapp.com">cat photos</a>
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>a</code> element should have the anchor text of <code>cat photos</code>.</p>",testString:"assert(/cat photos/gi.test($('a').text()));"},{text:"<p>You need an <code>a</code> element that links to <code>https://www.freecatphotoapp.com</code></p>",testString:"assert(/^https?:\\/\\/(www\\.)?freecatphotoapp\\.com\\/?$/i.test($('a').attr('href')));"},{text:"<p>Your <code>a</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/a>/g) &&
    code.match(/<\\/a>/g).length === code.match(/<a/g).length
);`}],description:`<section id="description">
<p>You can use <code>a</code> (<em>anchor</em>) elements to link to content outside of your web page.</p>
<p><code>a</code> elements need a destination web address called an <code>href</code> attribute. They also need anchor text. Here's an example:</p>
<pre><code class="language-html">&#x3C;a href="https://www.freecodecamp.org">this links to freecodecamp.org&#x3C;/a>
</code></pre>
<p>Then your browser will display the text <code>this links to freecodecamp.org</code> as a link you can click. And that link will take you to the web address <code>https://www.freecodecamp.org</code>.</p>
</section>`,instructions:`<section id="instructions">
<p>Create an <code>a</code> element that links to <code>https://www.freecatphotoapp.com</code> and has "cat photos" as its anchor text.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:9,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad88fee1348bd9aedf08816",title:"Link to Internal Sections of a Page with Anchor Elements",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cyrDRUL",forumTopicId:301098,dashedName:"link-to-internal-sections-of-a-page-with-anchor-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer>Copyright Cat Photo App</footer>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>

  <a href="#footer">Jump to Bottom</a>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
  <p>Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture, especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.</p>
  <p>Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand run outside as soon as door open yet destroy couch.</p>

</main>

<footer id="footer">Copyright Cat Photo App</footer>`,head:"",tail:"",id:""}}],tests:[{text:"<p>There should be only one anchor tag on your page.</p>",testString:"assert($('a').length == 1);"},{text:"<p>There should be only one <code>footer</code> tag on your page.</p>",testString:"assert($('footer').length == 1);"},{text:'<p>The <code>a</code> tag should have an <code>href</code> attribute set to "#footer".</p>',testString:"assert($('a').eq(0).attr('href') == '#footer');"},{text:"<p>The <code>a</code> tag should not have a <code>target</code> attribute</p>",testString:`assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);`},{text:'<p>The <code>a</code> text should be "Jump to Bottom".</p>',testString:`assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);`},{text:'<p>The <code>footer</code> tag should have an <code>id</code> attribute set to "footer".</p>',testString:"assert($('footer').eq(0).attr('id') == 'footer');"}],description:`<section id="description">
<p><code>a</code> (<em>anchor</em>) elements can also be used to create internal links to jump to different sections within a webpage.</p>
<p>To create an internal link, you assign a link's <code>href</code> attribute to a hash symbol <code>#</code> plus the value of the <code>id</code> attribute for the element that you want to internally link to, usually further down the page. You then need to add the same <code>id</code> attribute to the element you are linking to. An <code>id</code> is an attribute that uniquely describes an element.</p>
<p>Below is an example of an internal anchor link and its target element:</p>
<pre><code class="language-html">&#x3C;a href="#contacts-header">Contacts&#x3C;/a>
...
&#x3C;h2 id="contacts-header">Contacts&#x3C;/h2>
</code></pre>
<p>When users click the <code>Contacts</code> link, they'll be taken to the section of the webpage with the <strong>Contacts</strong> header element.</p>
</section>`,instructions:`<section id="instructions">
<p>Change your external link to an internal link by changing the <code>href</code> attribute to <code>"#footer"</code> and the text from <code>cat photos</code> to <code>Jump to Bottom</code>.</p>
<p>Remove the <code>target="_blank"</code> attribute from the anchor tag since this causes the linked document to open in a new window tab.</p>
<p>Then add an <code>id</code> attribute with a value of <code>footer</code> to the <code>&#x3C;footer></code> element at the bottom of the page.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:10,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08817",title:"Make Dead Links Using the Hash Symbol",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cMdkytL",forumTopicId:18230,dashedName:"make-dead-links-using-the-hash-symbol",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>.</p>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#" target="_blank">cat photos</a>.</p>
  
  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,head:"",tail:"",id:""}}],tests:[{text:'<p>Your <code>a</code> element should be a dead link with the value of the <code>href</code> attribute set to "#".</p>',testString:"assert($('a').attr('href') === '#');"}],description:`<section id="description">
<p>Sometimes you want to add <code>a</code> elements to your website before you know where they will link.</p>
<p>This is also handy when you're changing the behavior of a link using <code>JavaScript</code>, which we'll learn about later.</p>
</section>`,instructions:`<section id="instructions">
<p>The current value of the <code>href</code> attribute is a link that points to "<code>https://www.freecatphotoapp.com</code>". Replace the <code>href</code> attribute value with a <code>#</code>, also known as a hash symbol, to create a dead link.</p>
<p>For example: <code>href="#"</code></p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:12,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aede08817",title:"Nest an Anchor Element within a Paragraph",challengeType:0,forumTopicId:18244,dashedName:"nest-an-anchor-element-within-a-paragraph",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>

  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>View more <a target="_blank" href="https://www.freecatphotoapp.com">cat photos</a></p>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>You should only have one <code>a</code> element.</p>",testString:`assert(
  $('a').length  === 1 
);`},{text:'<p>The <code>a</code> element should link to "<code>https://www.freecatphotoapp.com</code>".</p>',testString:`assert(
  $('a[href="https://www.freecatphotoapp.com"]').length  === 1 
);`},{text:"<p>Your <code>a</code> element should have the anchor text of <code>cat photos</code></p>",testString:`assert(
  $('a')
    .text()
    .match(/cat\\sphotos/gi)
);`},{text:"<p>You should create a new <code>p</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.</p>",testString:"assert($('p') && $('p').length > 2);"},{text:"<p>Your <code>a</code> element should be nested within your new <code>p</code> element.</p>",testString:`assert(
  $('a[href="https://www.freecatphotoapp.com"]').parent().is('p')
);`},{text:"<p>Your <code>p</code> element should have the text <code>View more </code> (with a space after it).</p>",testString:`assert(
  $('a[href="https://www.freecatphotoapp.com"]')
    .parent()
    .text()
    .match(/View\\smore\\s/gi)
);`},{text:"<p>Your <code>a</code> element should <em>not</em> have the text <code>View more</code>.</p>",testString:`assert(
  !$('a')
    .text()
    .match(/View\\smore/gi)
);`},{text:"<p>Each of your <code>p</code> elements should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/p>/g) &&
    code.match(/<p/g) &&
    code.match(/<\\/p>/g).length === code.match(/<p/g).length
);`},{text:"<p>Each of your <code>a</code> elements should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\\/a>/g).length === code.match(/<a/g).length
);`}],description:`<section id="description">
<p>You can nest links within other text elements.</p>
<pre><code class="language-html">&#x3C;p>
  Here's a &#x3C;a target="_blank" href="https://www.freecodecamp.org"> link to www.freecodecamp.org&#x3C;/a> for you to follow.
&#x3C;/p>
</code></pre>
<p>Let's break down the example. Normal text is wrapped in the <code>p</code> element:</p>
<pre><code class="language-html">&#x3C;p> Here's a ... for you to follow. &#x3C;/p>
</code></pre>
<p>Next is the <em>anchor</em> element <code>&#x3C;a></code> (which requires a closing tag <code>&#x3C;/a></code>):</p>
<pre><code class="language-html">&#x3C;a> ... &#x3C;/a>
</code></pre>
<p><code>target</code> is an anchor tag attribute that specifies where to open the link. The value <code>_blank</code> specifies to open the link in a new tab. The <code>href</code> is an anchor tag attribute that contains the URL address of the link:</p>
<pre><code class="language-html">&#x3C;a href="https://www.freecodecamp.org" target="_blank"> ... &#x3C;/a>
</code></pre>
<p>The text, <code>link to www.freecodecamp.org</code>, within the <code>a</code> element is called <dfn>anchor text</dfn>, and will display the link to click:</p>
<pre><code class="language-html">&#x3C;a href=" ... " target="...">link to freecodecamp.org&#x3C;/a>
</code></pre>
<p>The final output of the example will look like this:</p>
<p>Here's a <a href="https://www.freecodecamp.org" target="_blank">link to www.freecodecamp.org</a> for you to follow.</p>
</section>`,instructions:`<section id="instructions">
<p>Nest the existing <code>a</code> element within a new <code>p</code> element. The new paragraph should have text that says <code>View more cat photos</code>, where <code>cat photos</code> is a link, and the rest is plain text.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:11,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aede08835",title:"Nest Many Elements within a Single div Element",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cNW4kC3",forumTopicId:18246,dashedName:"nest-many-elements-within-a-single-div-element",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>

  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>

  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving" checked> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>p</code> elements should be nested inside your <code>div</code> element.</p>",testString:"assert($('div').children('p').length > 1);"},{text:"<p>Your <code>ul</code> element should be nested inside your <code>div</code> element.</p>",testString:"assert($('div').children('ul').length > 0);"},{text:"<p>Your <code>ol</code> element should be nested inside your <code>div</code> element.</p>",testString:"assert($('div').children('ol').length > 0);"},{text:"<p>Your <code>div</code> element should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/div>/g) &&
    code.match(/<\\/div>/g).length === code.match(/<div>/g).length
);`}],description:`<section id="description">
<p>The <code>div</code> element, also known as a division element, is a general purpose container for other elements.</p>
<p>The <code>div</code> element is probably the most commonly used HTML element of all.</p>
<p>Just like any other non-self-closing element, you can open a <code>div</code> element with <code>&#x3C;div></code> and close it on another line with <code>&#x3C;/div></code>.</p>
</section>`,instructions:`<section id="instructions">
<p>Nest your "Things cats love" and "Top 3 things cats hate" lists all within a single <code>div</code> element.</p>
<p>Hint: Try putting your opening <code>div</code> tag above your "Things cats love" <code>p</code> element and your closing <code>div</code> tag after your closing <code>ol</code> tag so that both of your lists are within one <code>div</code>.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:25,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bd7123c8c441eddfaeb5bdef",title:"Say Hello to HTML Elements",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cE8Gpt2",forumTopicId:18276,dashedName:"say-hello-to-html-elements",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:"<h1>Hello</h1>",error:null,seed:"<h1>Hello</h1>"}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<h1>Hello World</h1>",head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should have the text <code>Hello World</code>.</p>",testString:"assert.isTrue(/hello(\\s)+world/gi.test($('h1').text()));"}],description:`<section id="description">
<p>Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.</p>
<p>First, you'll start by building a simple web page using HTML. You can edit code in your code editor, which is embedded into this web page.</p>
<p>Do you see the code in your code editor that says <code>&#x3C;h1>Hello&#x3C;/h1></code>? That's an HTML element.</p>
<p>Most HTML elements have an opening tag and a closing tag.</p>
<p>Opening tags look like this:</p>
<pre><code class="language-html">&#x3C;h1>
</code></pre>
<p>Closing tags look like this:</p>
<pre><code class="language-html">&#x3C;/h1>
</code></pre>
<p>The only difference between opening and closing tags is the forward slash after the opening bracket of a closing tag.</p>
<p>Each challenge has tests you can run at any time by clicking the "Run tests" button. When you pass all tests, you'll be prompted to submit your solution and go to the next coding challenge.</p>
</section>`,instructions:`<section id="instructions">
<p>To pass the test on this challenge, change your <code>h1</code> element's text to say <code>Hello World</code>.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:0,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08820",title:"Turn an Image into a Link",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cRdBnUr",forumTopicId:18327,dashedName:"turn-an-image-into-a-link",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The existing <code>img</code> element should be nested within an <code>a</code> element.</p>",testString:"assert($('a').children('img').length > 0);"},{text:"<p>Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.</p>",testString:"assert(new RegExp('#').test($('a').children('img').parent().attr('href')));"},{text:"<p>Each of your <code>a</code> elements should have a closing tag.</p>",testString:`assert(
  code.match(/<\\/a>/g) &&
    code.match(/<a/g) &&
    code.match(/<\\/a>/g).length === code.match(/<a/g).length
);`}],description:`<section id="description">
<p>You can make elements into links by nesting them within an <code>a</code> element.</p>
<p>Nest your image within an <code>a</code> element. Here's an example:</p>
<pre><code class="language-html">&#x3C;a href="#">&#x3C;img src="https://www.bit.ly/fcc-running-cats" alt="Three kittens running towards the camera.">&#x3C;/a>
</code></pre>
<p>Remember to use <code>#</code> as your <code>a</code> element's <code>href</code> property in order to turn it into a dead link.</p>
</section>`,instructions:`<section id="instructions">
<p>Place the existing image element within an <code>a</code> (<em>anchor</em>) element.</p>
<p>Once you've done this, hover over your image with your cursor. Your cursor's normal pointer should become the link clicking pointer. The photo is now a link.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:13,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedf08802",title:"Uncomment HTML",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cBmG9T7",forumTopicId:18329,dashedName:"uncomment-html",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->`,error:null,seed:`<!--
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
-->`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>h1</code> element should be visible on the page by uncommenting it.</p>",testString:"assert($('h1').length > 0);"},{text:"<p>Your <code>h2</code> element should be visible on the page by uncommenting it.</p>",testString:"assert($('h2').length > 0);"},{text:"<p>Your <code>p</code> element should be visible on the page by uncommenting it.</p>",testString:"assert($('p').length > 0);"},{text:"<p>No trailing comment tags should be visible on the page (i.e. <code>--></code>).</p>",testString:`assert(!$('*:contains("-->")')[1]);`}],description:`<section id="description">
<p>Commenting is a way that you can leave comments for other developers within your code without affecting the resulting output that is displayed to the end user.</p>
<p>Commenting is also a convenient way to make code inactive without having to delete it entirely.</p>
<p>Comments in HTML start with <code>&#x3C;!--</code> and end with a <code>--></code></p>
</section>`,instructions:`<section id="instructions">
<p>Uncomment your <code>h1</code>, <code>h2</code> and <code>p</code> elements.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:4,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"bad87fee1348bd9aedc08830",title:"Use HTML5 to Require a Field",challengeType:0,videoUrl:"https://scrimba.com/p/pVMPUv/cMd4EcQ",forumTopicId:18360,dashedName:"use-html5-to-require-a-field",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>
  
  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
  
  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <input type="text" required placeholder="cat photo URL">
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your text <code>input</code> element should have the <code>required</code> attribute.</p>",testString:"assert($('input').prop('required'));"}],description:`<section id="description">
<p>You can require specific form fields so that your user will not be able to submit your form until he or she has filled them out.</p>
<p>For example, if you wanted to make a text input field required, you can just add the attribute <code>required</code> within your <code>input</code> element, like this: <code>&#x3C;input type="text" required></code></p>
</section>`,instructions:`<section id="instructions">
<p>Make your text <code>input</code> a <code>required</code> field, so that your user can't submit the form without completing this field.</p>
<p>Then try to submit the form without inputting any text. See how your HTML5 form notifies you that the field is required?</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:20,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5c6c06847491271903d37cfd",title:"Use the value attribute with Radio Buttons and Checkboxes",challengeType:0,forumTopicId:301099,dashedName:"use-the-value-attribute-with-radio-buttons-and-checkboxes",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,error:null,seed:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://www.bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>
  <form action="https://www.freecatphotoapp.com/submit-cat-photo">
    <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
    <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label><br>
    <label for="loving"><input id="loving" type="checkbox" name="personality" value="loving"> Loving</label>
    <label for="lazy"><input id="lazy" type="checkbox" name="personality" value="lazy"> Lazy</label>
    <label for="energetic"><input id="energetic" type="checkbox" name="personality" value="energetic"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
</main>`,head:"",tail:"",id:""}}],tests:[{text:"<p>One of your radio buttons should have the <code>value</code> attribute of <code>indoor</code>.</p>",testString:`assert(
  $('label:contains("Indoor") > input[type="radio"]').filter("[value='indoor']")
    .length > 0
);`},{text:"<p>One of your radio buttons should have the <code>value</code> attribute of <code>outdoor</code>.</p>",testString:`assert(
  $('label:contains("Outdoor") > input[type="radio"]').filter(
    "[value='outdoor']"
  ).length > 0
);`},{text:"<p>One of your checkboxes should have the <code>value</code> attribute of <code>loving</code>.</p>",testString:`assert(
  $('label:contains("Loving") > input[type="checkbox"]').filter(
    "[value='loving']"
  ).length > 0
);`},{text:"<p>One of your checkboxes should have the <code>value</code> attribute of <code>lazy</code>.</p>",testString:`assert(
  $('label:contains("Lazy") > input[type="checkbox"]').filter("[value='lazy']")
    .length > 0
);`},{text:"<p>One of your checkboxes should have the <code>value</code> attribute of <code>energetic</code>.</p>",testString:`assert(
  $('label:contains("Energetic") > input[type="checkbox"]').filter(
    "[value='energetic']"
  ).length > 0
);`}],description:`<section id="description">
<p>When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type <code>radio</code> and <code>checkbox</code> report their values from the <code>value</code> attribute.</p>
<p>For example:</p>
<pre><code class="language-html">&#x3C;label for="indoor">
  &#x3C;input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
&#x3C;/label>
&#x3C;label for="outdoor">
  &#x3C;input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
&#x3C;/label>
</code></pre>
<p>Here, you have two <code>radio</code> inputs. When the user submits the form with the <code>indoor</code> option selected, the form data will include the line: <code>indoor-outdoor=indoor</code>. This is from the <code>name</code> and <code>value</code> attributes of the "indoor" input.</p>
<p>If you omit the <code>value</code> attribute, the submitted form data uses the default value, which is <code>on</code>. In this scenario, if the user clicked the "indoor" option and submitted the form, the resulting form data would be <code>indoor-outdoor=on</code>, which is not useful. So the <code>value</code> attribute needs to be set to something to identify the option.</p>
</section>`,instructions:`<section id="instructions">
<p>Give each of the <code>radio</code> and <code>checkbox</code> inputs the <code>value</code> attribute. Use the input label text, in lowercase, as the value for the attribute.</p>
</section>`,block:"basic-html-and-html5",order:0,superOrder:1,superBlock:"responsive-web-design",challengeOrder:23,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1}]},"css-flexbox":{meta:{name:"CSS Flexbox",isUpcomingChange:!1,dashedName:"css-flexbox",order:5,time:"5 hours",template:"",required:[],superBlock:"responsive-web-design",superOrder:1,challengeOrder:[["587d78ab367417b2b2512af0","Use display: flex to Position Two Boxes"],["587d78ab367417b2b2512af1","Add Flex Superpowers to the Tweet Embed"],["587d78ab367417b2b2512af2","Use the flex-direction Property to Make a Row"],["587d78ab367417b2b2512af3","Apply the flex-direction Property to Create Rows in the Tweet Embed"],["587d78ac367417b2b2512af4","Use the flex-direction Property to Make a Column"],["587d78ac367417b2b2512af5","Apply the flex-direction Property to Create a Column in the Tweet Embed"],["587d78ac367417b2b2512af6","Align Elements Using the justify-content Property"],["587d78ac367417b2b2512af7","Use the justify-content Property in the Tweet Embed"],["587d78ad367417b2b2512af8","Align Elements Using the align-items Property"],["587d78ad367417b2b2512af9","Use the align-items Property in the Tweet Embed"],["587d78ad367417b2b2512afa","Use the flex-wrap Property to Wrap a Row or Column"],["587d78ad367417b2b2512afb","Use the flex-shrink Property to Shrink Items"],["587d78ae367417b2b2512afc","Use the flex-grow Property to Expand Items"],["587d78ae367417b2b2512afd","Use the flex-basis Property to Set the Initial Size of an Item"],["587d78ae367417b2b2512afe","Use the flex Shorthand Property"],["587d78ae367417b2b2512aff","Use the order Property to Rearrange Items"],["587d78af367417b2b2512b00","Use the align-self Property"]],helpRoom:"Help",fileName:"01-responsive-web-design/css-flexbox.json"},challenges:[{id:"587d78ab367417b2b2512af1",title:"Add Flex Superpowers to the Tweet Embed",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/c9W7MhM",forumTopicId:301100,dashedName:"add-flex-superpowers-to-the-tweet-embed",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
  }
  header .follow-btn {

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {

    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {

  }
  footer .stats {

    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,error:null,seed:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {

    margin-left: 10px;
  }
  header .follow-btn {

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {

    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {

  }
  footer .stats {

    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
   display: flex;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>.follow-btn</code> should be rendered on the page. Be sure to turn off any extensions such as ad blockers.</p>",testString:"assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');"},{text:"<p>Your <code>header</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('header').css('display') == 'flex');"},{text:"<p>Your <code>footer</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('footer').css('display') == 'flex');"},{text:"<p>Your <code>h3</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('h3').css('display') == 'flex');"},{text:"<p>Your <code>h4</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('h4').css('display') == 'flex');"},{text:"<p>Your <code>.profile-name</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('.profile-name').css('display') == 'flex');"},{text:"<p>Your <code>.follow-btn</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('.follow-btn').css('display') == 'flex');"},{text:"<p>Your <code>.stats</code> should have a <code>display</code> property set to <code>flex</code>.</p>",testString:"assert($('.stats').css('display') == 'flex');"}],description:`<section id="description">
<p>To the right is the tweet embed that will be used as a practical example. Some of the elements would look better with a different layout. The last challenge demonstrated <code>display: flex</code>. Here you'll add it to several components in the tweet embed to start adjusting their positioning.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>display: flex</code> to all of the following items - note that the selectors are already set up in the CSS:</p>
<p><code>header</code>, the header's <code>.profile-name</code>, the header's <code>.follow-btn</code>, the header's <code>h3</code> and <code>h4</code>, the <code>footer</code>, and the footer's <code>.stats</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:1,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ad367417b2b2512af8",title:"Align Elements Using the align-items Property",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/c8aggtk",forumTopicId:301101,dashedName:"align-elements-using-the-align-items-property",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>`,error:null,seed:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of <code>center</code>.</p>",testString:"assert($('#box-container').css('align-items') == 'center');"}],description:`<section id="description">
<p>The <code>align-items</code> property is similar to <code>justify-content</code>. Recall that the <code>justify-content</code> property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.</p>
<p>Flex containers also have a <strong>cross axis</strong> which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.</p>
<p>CSS offers the <code>align-items</code> property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.</p>
<p>The different values available for <code>align-items</code> include:</p>
<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.</li><li><code>center</code>: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).</li><li><code>stretch</code>: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no <code>align-items</code> value is specified.</li><li><code>baseline</code>: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.</li></ul>
</section>`,instructions:`<section id="instructions">
<p>An example helps show this property in action. Add the CSS property <code>align-items</code> to the <code>#box-container</code> element, and give it a value of <code>center</code>.</p>
<p><strong>Bonus</strong><br>
Try the other options for the <code>align-items</code> property in the code editor to see their differences. But note that a value of <code>center</code> is the only one that will pass this challenge.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:8,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ac367417b2b2512af6",title:"Align Elements Using the justify-content Property",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/c43gnHm",forumTopicId:301102,dashedName:"align-elements-using-the-justify-content-property",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-container</code> element should have a <code>justify-content</code> property set to a value of <code>center</code>.</p>",testString:"assert($('#box-container').css('justify-content') == 'center');"}],description:`<section id="description">
<p>Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. Fortunately, the <code>justify-content</code> property has several options to do this. But first, there is some important terminology to understand before reviewing those options.</p>
<p><a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg">Here is a useful image showing a row to illustrate the concepts below.</a></p>
<p>Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the <strong>main axis</strong>. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.</p>
<p>There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is <code>justify-content: center;</code>, which aligns all the flex items to the center inside the flex container. Other options include:</p>
<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no <code>justify-content</code> is specified.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.</li><li><code>space-between</code>: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed evenly among the other items.</li><li><code>space-around</code>: similar to <code>space-between</code> but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.</li><li><code>space-evenly</code>: Distributes space evenly between the flex items with a full space at either end of the flex container</li></ul>
</section>`,instructions:`<section id="instructions">
<p>An example helps show this property in action. Add the CSS property <code>justify-content</code> to the <code>#box-container</code> element, and give it a value of <code>center</code>.</p>
<p><strong>Bonus</strong><br>
Try the other options for the <code>justify-content</code> property in the code editor to see their differences. But note that a value of <code>center</code> is the only one that will pass this challenge.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:6,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ac367417b2b2512af5",title:"Apply the flex-direction Property to Create a Column in the Tweet Embed",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cnzdVC9",forumTopicId:301103,dashedName:"apply-the-flex-direction-property-to-create-a-column-in-the-tweet-embed",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;

    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,error:null,seed:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;

    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>.follow-btn</code> should be rendered on the page. Be sure to turn off any extensions such as ad blockers.</p>",testString:"assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');"},{text:"<p>The <code>.profile-name</code> element should have a <code>flex-direction</code> property set to <code>column</code>.</p>",testString:"assert($('.profile-name').css('flex-direction') == 'column');"}],description:`<section id="description">
<p>The tweet embed <code>header</code> and <code>footer</code> used the <code>flex-direction</code> property earlier with a row value. Similarly, the items inside the <code>.profile-name</code> element would work well stacked as a column.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex-direction</code> to the header's <code>.profile-name</code> element and set the value to <code>column</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:5,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ab367417b2b2512af3",title:"Apply the flex-direction Property to Create Rows in the Tweet Embed",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cJb8yuq",forumTopicId:301104,dashedName:"apply-the-flex-direction-property-to-create-rows-in-the-tweet-embed",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;

  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,error:null,seed:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;

  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;

  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer {
    display: flex;
    flex-direction: row;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>.follow-btn</code> should be rendered on the page. Be sure to turn off any extensions such as ad blockers.</p>",testString:"assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');"},{text:"<p>The <code>header</code> should have a <code>flex-direction</code> property set to <code>row</code>.</p>",testString:"assert(code.match(/header\\s*?{[^}]*?flex-direction:\\s*?row;/g));"},{text:"<p>The <code>footer</code> should have a <code>flex-direction</code> property set to <code>row</code>.</p>",testString:"assert(code.match(/footer\\s*?{[^}]*?flex-direction:\\s*?row;/g));"}],description:`<section id="description">
<p>The <code>header</code> and <code>footer</code> in the tweet embed example have child items that could be arranged as rows using the <code>flex-direction</code> property. This tells CSS to align the children horizontally.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex-direction</code> to both the <code>header</code> and <code>footer</code> and set the value to <code>row</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:3,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ab367417b2b2512af0",title:"Use display: flex to Position Two Boxes",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cgz3QS7",forumTopicId:301105,dashedName:"use-display-flex-to-position-two-boxes",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    height: 500px;
    display: flex;
  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p><code>#box-container</code> should have the <code>display</code> property set to a value of <code>flex</code>.</p>",testString:"assert($('#box-container').css('display') == 'flex');"}],description:`<section id="description">
<p>This section uses alternating challenge styles to show how to use CSS to position elements in a flexible way. First, a challenge will explain theory, then a practical challenge using a simple tweet component will apply the flexbox concept.</p>
<p>Placing the CSS property <code>display: flex;</code> on an element allows you to use other flex properties to build a responsive page.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>display</code> to <code>#box-container</code> and set its value to <code>flex</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:0,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ad367417b2b2512af9",title:"Use the align-items Property in the Tweet Embed",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cd3PNfq",forumTopicId:301106,dashedName:"use-the-align-items-property-in-the-tweet-embed",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,error:null,seed:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;

    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    align-items: center;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>.follow-btn</code> should be rendered on the page. Be sure to turn off any extensions such as ad blockers.</p>",testString:"assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');"},{text:"<p>The <code>.follow-btn</code> element should have the <code>align-items</code> property set to a value of <code>center</code>.</p>",testString:"assert($('.follow-btn').css('align-items') == 'center');"}],description:`<section id="description">
<p>The last challenge introduced the <code>align-items</code> property and gave an example. This property can be applied to a few tweet embed elements to align the flex items inside them.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>align-items</code> to the header's <code>.follow-btn</code> element. Set the value to <code>center</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:9,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78af367417b2b2512b00",title:"Use the align-self Property",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cMbvzfv",forumTopicId:301107,dashedName:"use-the-align-self-property",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-1</code> element should have the <code>align-self</code> property set to a value of <code>center</code>.</p>",testString:"assert($('#box-1').css('align-self') == 'center');"},{text:"<p>The <code>#box-2</code> element should have the <code>align-self</code> property set to a value of <code>flex-end</code>.</p>",testString:"assert($('#box-2').css('align-self') == 'flex-end');"}],description:`<section id="description">
<p>The final property for flex items is <code>align-self</code>. This property allows you to adjust each item's alignment individually, instead of setting them all at once. This is useful since other common adjustment techniques using the CSS properties <code>float</code>, <code>clear</code>, and <code>vertical-align</code> do not work on flex items.</p>
<p><code>align-self</code> accepts the same values as <code>align-items</code> and will override any value set by the <code>align-items</code> property.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>align-self</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>center</code> and give <code>#box-2</code> a value of <code>flex-end</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:16,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ae367417b2b2512afd",title:"Use the flex-basis Property to Set the Initial Size of an Item",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/c3d9nCa",forumTopicId:301108,dashedName:"use-the-flex-basis-property-to-set-the-initial-size-of-an-item",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-1</code> element should have the <code>flex-basis</code> property.</p>",testString:"assert($('#box-1').css('flex-basis') != 'auto');"},{text:"<p>The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.</p>",testString:"assert(code.match(/#box-1\\s*?{\\s*?.*?\\s*?.*?\\s*?flex-basis:\\s*?10em;/g));"},{text:"<p>The <code>#box-2</code> element should have the <code>flex-basis</code> property.</p>",testString:"assert($('#box-2').css('flex-basis') != 'auto');"},{text:"<p>The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.</p>",testString:"assert(code.match(/#box-2\\s*?{\\s*?.*?\\s*?.*?\\s*?flex-basis:\\s*?20em;/g));"}],description:`<section id="description">
<p>The <code>flex-basis</code> property specifies the initial size of the item before CSS makes adjustments with <code>flex-shrink</code> or <code>flex-grow</code>.</p>
<p>The units used by the <code>flex-basis</code> property are the same as other size properties (<code>px</code>, <code>em</code>, <code>%</code>, etc.). The value <code>auto</code> sizes items based on the content.</p>
</section>`,instructions:`<section id="instructions">
<p>Set the initial size of the boxes using <code>flex-basis</code>. Add the CSS property <code>flex-basis</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>10em</code> and <code>#box-2</code> a value of <code>20em</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:13,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ac367417b2b2512af4",title:"Use the flex-direction Property to Make a Column",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cZmWeA4",forumTopicId:301109,dashedName:"use-the-flex-direction-property-to-make-a-column",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: column;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-container</code> element should have a <code>flex-direction</code> property set to <code>column</code>.</p>",testString:"assert($('#box-container').css('flex-direction') == 'column');"}],description:`<section id="description">
<p>The last two challenges used the <code>flex-direction</code> property set to <code>row</code>. This property can also create a column by vertically stacking the children of a flex container.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex-direction</code> to the <code>#box-container</code> element, and give it a value of <code>column</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:4,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ab367417b2b2512af2",title:"Use the flex-direction Property to Make a Row",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cBEkbfJ",forumTopicId:301110,dashedName:"use-the-flex-direction-property-to-make-a-row",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-container</code> element should have a <code>flex-direction</code> property set to <code>row-reverse</code>.</p>",testString:"assert($('#box-container').css('flex-direction') == 'row-reverse');"}],description:`<section id="description">
<p>Adding <code>display: flex</code> to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the <code>flex-direction</code> property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.</p>
<p>Other options for <code>flex-direction</code> are <code>row-reverse</code> and <code>column-reverse</code>.</p>
<p><strong>Note:</strong> The default value for the <code>flex-direction</code> property is <code>row</code>.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex-direction</code> to the <code>#box-container</code> element, and give it a value of <code>row-reverse</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:2,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ae367417b2b2512afc",title:"Use the flex-grow Property to Expand Items",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/c2p78cg",forumTopicId:301111,dashedName:"use-the-flex-grow-property-to-expand-items",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of <code>1</code>.</p>",testString:"assert($('#box-1').css('flex-grow') == '1');"},{text:"<p>The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of <code>2</code>.</p>",testString:"assert($('#box-2').css('flex-grow') == '2');"}],description:`<section id="description">
<p>The opposite of <code>flex-shrink</code> is the <code>flex-grow</code> property. Recall that <code>flex-shrink</code> controls the size of the items when the container shrinks. The <code>flex-grow</code> property controls the size of items when the parent container expands.</p>
<p>Using a similar example from the last challenge, if one item has a <code>flex-grow</code> value of <code>1</code> and the other has a <code>flex-grow</code> value of <code>3</code>, the one with the value of <code>3</code> will grow three times as much as the other.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex-grow</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>1</code> and <code>#box-2</code> a value of <code>2</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:12,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ae367417b2b2512afe",title:"Use the flex Shorthand Property",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cbpW2tE",forumTopicId:301112,dashedName:"use-the-flex-shorthand-property",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-1</code> element should have the <code>flex</code> property set to a value of <code>2 2 150px</code>.</p>",testString:`assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);`},{text:"<p>The <code>#box-2</code> element should have the <code>flex</code> property set to a value of <code>1 1 150px</code>.</p>",testString:`assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);`},{text:"<p>Your code should use the <code>flex</code> property for <code>#box-1</code> and <code>#box-2</code>.</p>",testString:"assert(code.match(/flex:\\s*?\\d\\s+?\\d\\s+?150px;/g).length == 2);"}],description:`<section id="description">
<p>There is a shortcut available to set several flex properties at once. The <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code> properties can all be set together by using the <code>flex</code> property.</p>
<p>For example, <code>flex: 1 0 10px;</code> will set the item to <code>flex-grow: 1;</code>, <code>flex-shrink: 0;</code>, and <code>flex-basis: 10px;</code>.</p>
<p>The default property settings are <code>flex: 0 1 auto;</code>.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> the values so its <code>flex-grow</code> is <code>2</code>, its <code>flex-shrink</code> is <code>2</code>, and its <code>flex-basis</code> is <code>150px</code>. Give <code>#box-2</code> the values so its <code>flex-grow</code> is <code>1</code>, its <code>flex-shrink</code> is <code>1</code>, and its <code>flex-basis</code> is <code>150px</code>.</p>
<p>These values will cause <code>#box-1</code> to grow to fill the extra space at twice the rate of <code>#box-2</code> when the container is greater than 300px and shrink at twice the rate of <code>#box-2</code> when the container is less than 300px. 300px is the combined size of the <code>flex-basis</code> values of the two boxes.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:14,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ad367417b2b2512afb",title:"Use the flex-shrink Property to Shrink Items",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cd3PBfr",forumTopicId:301113,dashedName:"use-the-flex-shrink-property-to-shrink-items",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of <code>1</code>.</p>",testString:"assert($('#box-1').css('flex-shrink') == '1');"},{text:"<p>The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of <code>2</code>.</p>",testString:"assert($('#box-2').css('flex-shrink') == '2');"}],description:`<section id="description">
<p>So far, all the properties in the challenges apply to the flex container (the parent of the flex items). However, there are several useful properties for the flex items.</p>
<p>The first is the <code>flex-shrink</code> property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.</p>
<p>The <code>flex-shrink</code> property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a <code>flex-shrink</code> value of <code>1</code> and the other has a <code>flex-shrink</code> value of <code>3</code>, the one with the value of <code>3</code> will shrink three times as much as the other.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>flex-shrink</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>1</code> and <code>#box-2</code> a value of <code>2</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:11,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ad367417b2b2512afa",title:"Use the flex-wrap Property to Wrap a Row or Column",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cQv9ZtG",forumTopicId:301114,dashedName:"use-the-flex-wrap-property-to-wrap-a-row-or-column",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of <code>wrap</code>.</p>",testString:"assert($('#box-container').css('flex-wrap') == 'wrap');"}],description:`<section id="description">
<p>CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.</p>
<p>However, using the <code>flex-wrap</code> property tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.</p>
<p>CSS also has options for the direction of the wrap:</p>
<ul><li><code>nowrap</code>: this is the default setting, and does not wrap items.</li><li><code>wrap</code>: wraps items onto multiple lines from top-to-bottom if they are in rows and left-to-right if they are in columns.</li><li><code>wrap-reverse</code>: wraps items onto multiple lines from bottom-to-top if they are in rows and right-to-left if they are in columns.</li></ul>
</section>`,instructions:`<section id="instructions">
<p>The current layout has too many boxes for one row. Add the CSS property <code>flex-wrap</code> to the <code>#box-container</code> element, and give it a value of <code>wrap</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:10,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ac367417b2b2512af7",title:"Use the justify-content Property in the Tweet Embed",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/c43GgTa",forumTopicId:301115,dashedName:"use-the-justify-content-property-in-the-tweet-embed",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,error:null,seed:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  body {
    font-family: Arial, sans-serif;
  }
  header, footer {
    display: flex;
    flex-direction: row;
  }
  header .profile-thumbnail {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  header .profile-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
  header .follow-btn {
    display: flex;
    margin: 0 0 0 auto;
  }
  header .follow-btn button {
    border: 0;
    border-radius: 3px;
    padding: 5px;
  }
  header h3, header h4 {
    display: flex;
    margin: 0;
  }
  #inner p {
    margin-bottom: 10px;
    font-size: 20px;
  }
  #inner hr {
    margin: 20px 0;
    border-style: solid;
    opacity: 0.1;
  }
  footer .stats {
    display: flex;
    font-size: 15px;
  }
  footer .stats strong {
    font-size: 18px;
  }
  footer .stats .likes {
    margin-left: 10px;
  }
  footer .cta {
    margin-left: auto;
  }
  footer .cta button {
    border: 0;
    background: transparent;
  }
</style>
<header>
  <img src="https://freecodecamp.s3.amazonaws.com/quincy-twitter-photo.jpg" alt="Quincy Larson's profile picture" class="profile-thumbnail">
  <div class="profile-name">
    <h3>Quincy Larson</h3>
    <h4>@ossia</h4>
  </div>
  <div class="follow-btn">
    <button>Follow</button>
  </div>
</header>
<div id="inner">
  <p>I meet so many people who are in search of that one trick that will help them work smart. Even if you work smart, you still have to work hard.</p>
  <span class="date">1:32 PM - 12 Jan 2018</span>
  <hr>
</div>
<footer>
  <div class="stats">
    <div class="Retweets">
      <strong>107</strong> Retweets
    </div>
    <div class="likes">
      <strong>431</strong> Likes
    </div>
  </div>
  <div class="cta">
    <button class="share-btn">Share</button>
    <button class="retweet-btn">Retweet</button>
    <button class="like-btn">Like</button>
  </div>
</footer>`,head:"",tail:"",id:""}}],tests:[{text:"<p>Your <code>.follow-btn</code> should be rendered on the page. Be sure to turn off any extensions such as ad blockers.</p>",testString:"assert($('.follow-btn').length > 0 && $('.follow-btn').css('display') !== 'none');"},{text:"<p>The <code>.profile-name</code> element should have the <code>justify-content</code> property set to any of these values: <code>center</code>, <code>flex-start</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, or <code>space-evenly</code>.</p>",testString:`assert(
  code.match(
    /header\\s.profile-name\\s*{\\s*?.*?\\s*?.*?\\s*?\\s*?.*?\\s*?justify-content\\s*:\\s*(center|flex-start|flex-end|space-between|space-around|space-evenly)\\s*;/g
  )
);`}],description:`<section id="description">
<p>The last challenge showed an example of the <code>justify-content</code> property. For the tweet embed, this property can be applied to align the items in the <code>.profile-name</code> element.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>justify-content</code> to the header's <code>.profile-name</code> element and set the value to any of the options from the last challenge.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:7,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"587d78ae367417b2b2512aff",title:"Use the order Property to Rearrange Items",challengeType:0,videoUrl:"https://scrimba.com/p/pVaDAv/cMbvNAG",forumTopicId:301116,dashedName:"use-the-order-property-to-rearrange-items",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,error:null,seed:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>#box-1</code> element should have the <code>order</code> property set to a value of <code>2</code>.</p>",testString:"assert($('#box-1').css('order') == '2');"},{text:"<p>The <code>#box-2</code> element should have the <code>order</code> property set to a value of <code>1</code>.</p>",testString:"assert($('#box-2').css('order') == '1');"}],description:`<section id="description">
<p>The <code>order</code> property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.</p>
</section>`,instructions:`<section id="instructions">
<p>Add the CSS property <code>order</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>2</code> and give <code>#box-2</code> a value of <code>1</code>.</p>
</section>`,block:"css-flexbox",order:5,superOrder:1,superBlock:"responsive-web-design",challengeOrder:15,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1}]},"css-grid":{meta:{name:"CSS Grid",isUpcomingChange:!1,dashedName:"css-grid",order:6,time:"5 hours",template:"",required:[],superBlock:"responsive-web-design",superOrder:1,challengeOrder:[["5a858944d96184f06fd60d61","Create Your First CSS Grid"],["5a9036d038fddaf9a66b5d32","Add Columns with grid-template-columns"],["5a9036e138fddaf9a66b5d33","Add Rows with grid-template-rows"],["5a9036ee38fddaf9a66b5d34","Use CSS Grid units to Change the Size of Columns and Rows"],["5a9036ee38fddaf9a66b5d35","Create a Column Gap Using grid-column-gap"],["5a9036ee38fddaf9a66b5d36","Create a Row Gap using grid-row-gap"],["5a9036ee38fddaf9a66b5d37","Add Gaps Faster with grid-gap"],["5a90372638fddaf9a66b5d38","Use grid-column to Control Spacing"],["5a90373638fddaf9a66b5d39","Use grid-row to Control Spacing"],["5a90374338fddaf9a66b5d3a","Align an Item Horizontally using justify-self"],["5a90375238fddaf9a66b5d3b","Align an Item Vertically using align-self"],["5a90376038fddaf9a66b5d3c","Align All Items Horizontally using justify-items"],["5a94fdf869fb03452672e45b","Align All Items Vertically using align-items"],["5a94fe0569fb03452672e45c","Divide the Grid Into an Area Template"],["5a94fe1369fb03452672e45d","Place Items in Grid Areas Using the grid-area Property"],["5a94fe2669fb03452672e45e","Use grid-area Without Creating an Areas Template"],["5a94fe3669fb03452672e45f","Reduce Repetition Using the repeat Function"],["5a94fe4469fb03452672e460","Limit Item Size Using the minmax Function"],["5a94fe5469fb03452672e461","Create Flexible Layouts Using auto-fill"],["5a94fe6269fb03452672e462","Create Flexible Layouts Using auto-fit"],["5a94fe7769fb03452672e463","Use Media Queries to Create Responsive Layouts"],["5a94fe8569fb03452672e464","Create Grids within Grids"]],helpRoom:"Help",fileName:"01-responsive-web-design/css-grid.json"},challenges:[{id:"5a9036d038fddaf9a66b5d32",title:"Add Columns with grid-template-columns",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/c7NzDHv",forumTopicId:301117,dashedName:"add-columns-with-grid-template-columns",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-template-columns: 100px 100px 100px;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?100px\\s*?100px\\s*?100px\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the <code>grid-template-columns</code> property on a grid container as demonstrated below:</p>
<pre><code class="language-css">.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
</code></pre>
<p>This will give your grid two columns that are each 50px wide. The number of parameters given to the <code>grid-template-columns</code> property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.</p>
</section>`,instructions:`<section id="instructions">
<p>Give the grid container three columns that are each <code>100px</code> wide.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:1,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9036ee38fddaf9a66b5d37",title:"Add Gaps Faster with grid-gap",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/ca2qVtv",forumTopicId:301118,dashedName:"add-gaps-faster-with-grid-gap",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-gap: 10px 20px;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-gap</code> property that introduces a <code>10px</code> gap between the rows and a <code>20px</code> gap between the columns.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-gap\\s*?:\\s*?10px\\s+?20px\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p><code>grid-gap</code> is a shorthand property for <code>grid-row-gap</code> and <code>grid-column-gap</code> from the previous two challenges that's more convenient to use. If <code>grid-gap</code> has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.</p>
</section>`,instructions:`<section id="instructions">
<p>Use <code>grid-gap</code> to introduce a <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:6,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9036e138fddaf9a66b5d33",title:"Add Rows with grid-template-rows",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cbp9Pua",forumTopicId:301119,dashedName:"add-rows-with-grid-template-rows",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-template-rows: 50px 50px;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-rows</code> property with two units of <code>50px</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-template-rows\\s*?:\\s*?50px\\s*?50px\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>The grid you created in the last challenge will set the number of rows automatically. To adjust the rows manually, use the <code>grid-template-rows</code> property in the same way you used <code>grid-template-columns</code> in the previous challenge.</p>
</section>`,instructions:`<section id="instructions">
<p>Add two rows to the grid that are <code>50px</code> tall each.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:2,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a90376038fddaf9a66b5d3c",title:"Align All Items Horizontally using justify-items",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cJbpECn",forumTopicId:301120,dashedName:"align-all-items-horizontally-using-justify-items",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {justify-items: center;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>justify-items</code> property that has the value of <code>center</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*justify-items\\s*?:\\s*?center\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>Sometimes you want all the items in your CSS Grid to share the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using <code>justify-items</code> on your grid container. This property can accept all the same values you learned about in the previous two challenges, the difference being that it will move <strong>all</strong> the items in our grid to the desired alignment.</p>
</section>`,instructions:`<section id="instructions">
<p>Use this property to center all our items horizontally.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:11,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fdf869fb03452672e45b",title:"Align All Items Vertically using align-items",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/ckzPeUv",forumTopicId:301121,dashedName:"align-all-items-vertically-using-align-items",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {align-items: end;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>align-items</code> property that has the value of <code>end</code>.</p>",testString:`assert(
  code.match(/.container\\s*?{[\\s\\S]*align-items\\s*?:\\s*?end\\s*?;[\\s\\S]*}/gi)
);`}],description:`<section id="description">
<p>Using the <code>align-items</code> property on a grid container will set the vertical alignment for all the items in our grid.</p>
</section>`,instructions:`<section id="instructions">
<p>Use it now to move all the items to the end of each cell.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:12,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a90374338fddaf9a66b5d3a",title:"Align an Item Horizontally using justify-self",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cJbpKHq",forumTopicId:301122,dashedName:"align-an-item-horizontally-using-justify-self",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.item2 {justify-self: center;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.</p>",testString:`assert(
  code.match(/.item2\\s*?{[\\s\\S]*justify-self\\s*?:\\s*?center\\s*?;[\\s\\S]*}/gi)
);`}],description:`<section id="description">
<p>In CSS Grid, the content of each item is located in a box which is referred to as a <dfn>cell</dfn>. You can align the content's position within its cell horizontally using the <code>justify-self</code> property on a grid item. By default, this property has a value of <code>stretch</code>, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:</p>
<p><code>start</code>: aligns the content at the left of the cell,</p>
<p><code>center</code>: aligns the content in the center of the cell,</p>
<p><code>end</code>: aligns the content at the right of the cell.</p>
</section>`,instructions:`<section id="instructions">
<p>Use the <code>justify-self</code> property to center the item with the class <code>item2</code>.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:9,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a90375238fddaf9a66b5d3b",title:"Align an Item Vertically using align-self",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cmzd4fz",forumTopicId:301123,dashedName:"align-an-item-vertically-using-align-self",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.item3 {align-self: end;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>item3</code> class should have a <code>align-self</code> property that has the value of <code>end</code>.</p>",testString:"assert(code.match(/.item3\\s*?{[\\s\\S]*align-self\\s*?:\\s*?end\\s*?;[\\s\\S]*}/gi));"}],description:`<section id="description">
<p>Just as you can align an item horizontally, there's a way to align an item vertically as well. To do this, you use the <code>align-self</code> property on an item. This property accepts all of the same values as <code>justify-self</code> from the last challenge.</p>
</section>`,instructions:`<section id="instructions">
<p>Align the item with the class <code>item3</code> vertically at the <code>end</code>.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:10,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9036ee38fddaf9a66b5d35",title:"Create a Column Gap Using grid-column-gap",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cVZ8vfD",forumTopicId:301124,dashedName:"create-a-column-gap-using-grid-column-gap",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

   
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

   
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-column-gap: 20px;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-column-gap</code> property that has the value of <code>20px</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-column-gap\\s*?:\\s*?20px\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>So far in the grids you have created, the columns have all been tight up against each other. Sometimes you want a gap in between the columns. To add a gap between the columns, use the <code>grid-column-gap</code> property like this:</p>
<pre><code class="language-css">grid-column-gap: 10px;
</code></pre>
<p>This creates 10px of empty space between all of our columns.</p>
</section>`,instructions:`<section id="instructions">
<p>Give the columns in the grid a <code>20px</code> gap.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:4,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9036ee38fddaf9a66b5d36",title:"Create a Row Gap using grid-row-gap",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cPbJ2Cv",forumTopicId:301125,dashedName:"create-a-row-gap-using-grid-row-gap",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-row-gap: 5px;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-row-gap</code> property that has the value of <code>5px</code>.</p>",testString:`assert(
  code.match(/.container\\s*?{[\\s\\S]*grid-row-gap\\s*?:\\s*?5px\\s*?;[\\s\\S]*}/gi)
);`}],description:`<section id="description">
<p>You can add a gap in between the rows of a grid using <code>grid-row-gap</code> in the same way that you added a gap in between columns in the previous challenge.</p>
</section>`,instructions:`<section id="instructions">
<p>Create a gap for the rows that is <code>5px</code> tall.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:5,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe5469fb03452672e461",title:"Create Flexible Layouts Using auto-fill",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cmzdycW",forumTopicId:301126,dashedName:"create-flexible-layouts-using-auto-fill",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}
  
  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */
    
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    
    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  
  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?repeat\\s*?\\(\\s*?auto-fill\\s*?,\\s*?minmax\\s*?\\(\\s*?60px\\s*?,\\s*?1fr\\s*?\\)\\s*?\\)\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>The repeat function comes with an option called <dfn>auto-fill</dfn>. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining <code>auto-fill</code> with <code>minmax</code>, like this:</p>
<pre><code class="language-css">repeat(auto-fill, minmax(60px, 1fr));
</code></pre>
<p>When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one. <strong>Note:</strong> If your container can't fit all your items on one row, it will move them down to a new one.</p>
</section>`,instructions:`<section id="instructions">
<p>In the first grid, use <code>auto-fill</code> with <code>repeat</code> to fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>. Then resize the preview to see auto-fill in action.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:18,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe6269fb03452672e462",title:"Create Flexible Layouts Using auto-fit",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/c3dPph8",forumTopicId:301127,dashedName:"create-flexible-layouts-using-auto-fit",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container2</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fit</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and a maximum of <code>1fr</code>.</p>",testString:`assert(
  code.match(
    /.container2\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?repeat\\s*?\\(\\s*?auto-fit\\s*?,\\s*?minmax\\s*?\\(\\s*?60px\\s*?,\\s*?1fr\\s*?\\)\\s*?\\)\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p><code>auto-fit</code> works almost identically to <code>auto-fill</code>. The only difference is that when the container's size exceeds the size of all the items combined, <code>auto-fill</code> keeps inserting empty rows or columns and pushes your items to the side, while <code>auto-fit</code> collapses those empty rows or columns and stretches your items to fit the size of the container.</p>
<p><strong>Note:</strong> If your container can't fit all your items on one row, it will move them down to a new one.</p>
</section>`,instructions:`<section id="instructions">
<p>In the second grid, use <code>auto-fit</code> with <code>repeat</code> to fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>. Then resize the preview to see the difference.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:19,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe8569fb03452672e464",title:"Create Grids within Grids",challengeType:0,forumTopicId:301128,dashedName:"create-grids-within-grids",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>`,error:null,seed:`<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.</p>",testString:`assert(
  code.match(
    /.item3\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?auto\\s*?1fr\\s*?;[\\s\\S]*}/gi
  )
);`},{text:"<p><code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.</p>",testString:"assert(code.match(/.item3\\s*?{[\\s\\S]*display\\s*?:\\s*?grid\\s*?;[\\s\\S]*}/gi));"}],description:`<section id="description">
<p>Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.</p>
<p>For example, by setting the <code>display</code> and <code>grid-template-columns</code> properties of the element with the <code>item3</code> class, you create a grid within your grid.</p>
</section>`,instructions:`<section id="instructions">
<p>Turn the element with the <code>item3</code> class into a grid with two columns with a width of <code>auto</code> and <code>1fr</code> using <code>display</code> and <code>grid-template-columns</code>.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:21,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a858944d96184f06fd60d61",title:"Create Your First CSS Grid",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cqwREC4",forumTopicId:301129,dashedName:"create-your-first-css-grid",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {display: grid;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.</p>",testString:"assert(code.match(/.container\\s*?{[\\s\\S]*display\\s*?:\\s*?grid\\s*?;[\\s\\S]*}/gi));"}],description:`<section id="description">
<p>Turn any HTML element into a grid container by setting its <code>display</code> property to <code>grid</code>. This gives you the ability to use all the other properties associated with CSS Grid.</p>
<p><strong>Note:</strong> In CSS Grid, the parent element is referred to as the <dfn>container</dfn> and its children are called <dfn>items</dfn>.</p>
</section>`,instructions:`<section id="instructions">
<p>Change the display of the div with the <code>container</code> class to <code>grid</code>.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:0,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe0569fb03452672e45c",title:"Divide the Grid Into an Area Template",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cLLpGAy",forumTopicId:301130,dashedName:"divide-the-grid-into-an-area-template",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "footer footer footer";
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "footer footer footer";
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      ". content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-areas</code> property similar to the preview but with<code>.</code> instead of the <code>advert</code> area.</p>",testString:`assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\\s*?{[\\s\\S]*grid-template-areas\\s*?:\\s*?"\\s*?header\\s*?header\\s*?header\\s*?"\\s*?"\\s*?.\\s*?content\\s*?content\\s*?"\\s*?"\\s*?footer\\s*?footer\\s*?footer\\s*?"\\s*?;[\\s\\S]*}/gi
    )
);`}],description:`<section id="description">
<p>You can group cells of your grid together into an <dfn>area</dfn> and give the area a custom name. Do this by using <code>grid-template-areas</code> on the container like this:</p>
<pre><code class="language-css">grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
</code></pre>
<p>The code above merges the top three cells together into an area named <code>header</code>, the bottom three cells into a <code>footer</code> area, and it makes two areas in the middle row; <code>advert</code> and <code>content</code>. <strong>Note:</strong> Every word in the code represents a cell and every pair of quotation marks represent a row. In addition to custom labels, you can use a period (<code>.</code>) to designate an empty cell in the grid.</p>
</section>`,instructions:`<section id="instructions">
<p>Place the area template so that the cell labeled <code>advert</code> becomes an empty cell.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:13,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe4469fb03452672e460",title:"Limit Item Size Using the minmax Function",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cD97RTv",forumTopicId:301131,dashedName:"limit-item-size-using-the-minmax-function",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?repeat\\s*?\\(\\s*?3\\s*?,\\s*?minmax\\s*?\\(\\s*?90px\\s*?,\\s*?1fr\\s*?\\)\\s*?\\)\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>There's another built-in function to use with <code>grid-template-columns</code> and <code>grid-template-rows</code> called <code>minmax</code>. It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:</p>
<pre><code class="language-css">grid-template-columns: 100px minmax(50px, 200px);
</code></pre>
<p>In the code above, <code>grid-template-columns</code> is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.</p>
</section>`,instructions:`<section id="instructions">
<p>Using the <code>minmax</code> function, replace the <code>1fr</code> in the <code>repeat</code> function with a column size that has the minimum width of <code>90px</code> and the maximum width of <code>1fr</code>, and resize the preview panel to see the effect.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:17,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe1369fb03452672e45d",title:"Place Items in Grid Areas Using the grid-area Property",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cRrqmtV",forumTopicId:301132,dashedName:"place-items-in-grid-areas-using-the-grid-area-property",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.item5 {grid-area: footer;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.</p>",testString:`assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\\s*?{[\\s\\S]*grid-area\\s*?:\\s*?footer\\s*?;[\\s\\S]*}/gi)
);`}],description:`<section id="description">
<p>After creating an area template for your grid container, as shown in the previous challenge, you can place an item in your custom area by referencing the name you gave it. To do this, you use the <code>grid-area</code> property on an item like this:</p>
<pre><code class="language-css">.item1 {
  grid-area: header;
}
</code></pre>
<p>This lets the grid know that you want the <code>item1</code> class to go in the area named <code>header</code>. In this case, the item will use the entire top row because that whole row is named as the header area.</p>
</section>`,instructions:`<section id="instructions">
<p>Place an element with the <code>item5</code> class in the <code>footer</code> area using the <code>grid-area</code> property.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:14,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe3669fb03452672e45f",title:"Reduce Repetition Using the repeat Function",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cQvqyHR",forumTopicId:301133,dashedName:"reduce-repetition-using-the-repeat-function",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-template-columns: repeat(3, 1fr);}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the width of <code>1fr</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?repeat\\s*?\\(\\s*?3\\s*?,\\s*?1fr\\s*?\\)\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>When you used <code>grid-template-columns</code> and <code>grid-template-rows</code> to define the structure of a grid, you entered a value for each row or column you created.</p>
<p>Let's say you want a grid with 100 rows of the same height. It isn't very practical to insert 100 values individually. Fortunately, there's a better way - by using the <code>repeat</code> function to specify the number of times you want your column or row to be repeated, followed by a comma and the value you want to repeat.</p>
<p>Here's an example that would create the 100 row grid, each row at 50px tall.</p>
<pre><code class="language-css">grid-template-rows: repeat(100, 50px);
</code></pre>
<p>You can also repeat multiple values with the repeat function and insert the function amongst other values when defining a grid structure. Here's what that looks like:</p>
<pre><code class="language-css">grid-template-columns: repeat(2, 1fr 50px) 20px;
</code></pre>
<p>This translates to:</p>
<pre><code class="language-css">grid-template-columns: 1fr 50px 1fr 50px 20px;
</code></pre>
<p><strong>Note:</strong> The <code>1fr 50px</code> is repeated twice followed by 20px.</p>
</section>`,instructions:`<section id="instructions">
<p>Use <code>repeat</code> to remove repetition from the <code>grid-template-columns</code> property.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:16,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a9036ee38fddaf9a66b5d34",title:"Use CSS Grid units to Change the Size of Columns and Rows",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cvE8phd",forumTopicId:301134,dashedName:"use-css-grid-units-to-change-the-size-of-columns-and-rows",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`,error:null,seed:`<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p><code>container</code> class should have a <code>grid-template-columns</code> property that has three columns with the following widths: <code>1fr, 100px, and 2fr</code>.</p>",testString:`assert(
  code.match(
    /.container\\s*?{[\\s\\S]*grid-template-columns\\s*?:\\s*?1fr\\s*?100px\\s*?2fr\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>You can use absolute and relative units like <code>px</code> and <code>em</code> in CSS Grid to define the size of rows and columns. You can use these as well:</p>
<p><code>fr</code>: sets the column or row to a fraction of the available space,</p>
<p><code>auto</code>: sets the column or row to the width or height of its content automatically,</p>
<p><code>%</code>: adjusts the column or row to the percent width of its container.</p>
<p>Here's the code that generates the output in the preview:</p>
<pre><code class="language-css">grid-template-columns: auto 50px 10% 2fr 1fr;
</code></pre>
<p>This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.</p>
</section>`,instructions:`<section id="instructions">
<p>Make a grid with three columns whose widths are as follows: 1fr, 100px, and 2fr.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:3,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe2669fb03452672e45e",title:"Use grid-area Without Creating an Areas Template",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/c6N7VhK",forumTopicId:301135,dashedName:"use-grid-area-without-creating-an-areas-template",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:"<style>.item5 {grid-area: 3/1/4/4;}</style>",head:"",tail:"",id:""}}],tests:[{text:"<p>The <code>item5</code> class should have a <code>grid-area</code> property to make it fill the whole area between the third and fourth horizontal lines, and first and fourth vertical lines.</p>",testString:`assert(
  code.match(
    /.item5\\s*?{[\\s\\S]*grid-area\\s*?:\\s*?3\\s*?\\/\\s*?1\\s*?\\/\\s*?4\\s*?\\/\\s*?4\\s*?;[\\s\\S]*}/gi
  )
);`}],description:`<section id="description">
<p>The <code>grid-area</code> property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:</p>
<pre><code class="language-css">item1 { grid-area: 1/1/2/4; }
</code></pre>
<p>This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:</p>
<pre><code class="language-css">grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
</code></pre>
<p>So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.</p>
</section>`,instructions:`<section id="instructions">
<p>Using the <code>grid-area</code> property, place the element with <code>item5</code> class between the third and fourth horizontal lines and between the first and fourth vertical lines.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:15,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a90372638fddaf9a66b5d38",title:"Use grid-column to Control Spacing",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cnzkDSr",forumTopicId:301136,dashedName:"use-grid-column-to-control-spacing",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p><code>item5</code> class should have a <code>grid-column</code> property.</p>",testString:`assert(
  __helpers
    .removeWhiteSpace($('style').text())
    .match(/\\.item5{.*grid-column:.*}/g)
);`},{text:"<p><code>item5</code> class should have a <code>grid-column</code> property which results in it consuming the last two columns of the grid.</p>",testString:`const colStart = getComputedStyle($('.item5')[0]).gridColumnStart;
const colEnd = getComputedStyle($('.item5')[0]).gridColumnEnd;
const result = colStart.toString() + colEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));`}],description:`<section id="description">
<p>Up to this point, all the properties that have been discussed are for grid containers. The <code>grid-column</code> property is the first one for use on the grid items themselves.</p>
<p>The hypothetical horizontal and vertical lines that create the grid are referred to as <dfn>lines</dfn>. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward.</p>
<p>This is what the lines look like for a 3x3 grid:</p>
<div style='position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;'><p style='left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;'>column lines</p><p style='left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>1</p><p style='left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>2</p><p style='left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>3</p><p style='left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>4</p><p style='left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;'>row lines</p><p style='left:-10%;top:-10%;font-size:130%;position:absolute;'>1</p><p style='left:-10%;top:21%;font-size:130%;position:absolute;'>2</p><p style='left:-10%;top:53%;font-size:130%;position:absolute;'>3</p><p style='left:-10%;top:85%;font-size:130%;position:absolute;'>4</p><div style='left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;'></div></div>
<p>To control the number of columns an item will consume, you can use the <code>grid-column</code> property in conjunction with the line numbers you want the item to start and stop at.</p>
<p>Here's an example:</p>
<pre><code class="language-css">grid-column: 1 / 3;
</code></pre>
<p>This will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns.</p>
</section>`,instructions:`<section id="instructions">
<p>Make the item with the class <code>item5</code> consume the last two columns of the grid.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:7,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a90373638fddaf9a66b5d39",title:"Use grid-row to Control Spacing",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/c9WBLU4",forumTopicId:301137,dashedName:"use-grid-row-to-control-spacing",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
    /* Only change code below this line */

    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,error:null,seed:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
    /* Only change code below this line */

    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
    grid-row: 2 / 4;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p><code>item5</code> class should have a <code>grid-row</code> property.</p>",testString:`assert(
  __helpers.removeWhiteSpace($('style').text()).match(/\\.item5{.*grid-row:.*}/g)
);`},{text:"<p><code>item5</code> class should have a <code>grid-row</code> property which results in it consuming the last two rows of the grid.</p>",testString:`const rowStart = getComputedStyle($('.item5')[0]).gridRowStart;
const rowEnd = getComputedStyle($('.item5')[0]).gridRowEnd;
const result = rowStart.toString() + rowEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));`}],description:`<section id="description">
<p>Of course, you can make items consume multiple rows just like you can with columns. You define the horizontal lines you want an item to start and stop at using the <code>grid-row</code> property on a grid item.</p>
</section>`,instructions:`<section id="instructions">
<p>Make the element with the <code>item5</code> class consume the last two rows.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:8,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1},{id:"5a94fe7769fb03452672e463",title:"Use Media Queries to Create Responsive Layouts",challengeType:0,videoUrl:"https://scrimba.com/p/pByETK/cMbqeHk",forumTopicId:301138,dashedName:"use-media-queries-to-create-responsive-layouts",files:{indexhtml:{key:"indexhtml",head:"",tail:"",id:"",editableRegionBoundaries:[],history:["index.html"],name:"index",ext:"html",path:"index.html",contents:`<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Only change code below this line */
        "advert header"
        "advert content"
        "advert footer";
      /* Only change code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>`,error:null,seed:`<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Only change code below this line */
        "advert header"
        "advert content"
        "advert footer";
      /* Only change code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>`}},solutions:[{indexhtml:{key:"indexhtml",ext:"html",name:"index",contents:`<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>`,head:"",tail:"",id:""}}],tests:[{text:"<p>When the viewport is <code>400px</code> or more, <code>container</code> class should have a <code>grid-template-areas</code> property in which the header and footer areas occupy the top and bottom rows respectively and advert and content occupy the left and right columns of the middle row.</p>",testString:`assert(
  __helpers
    .removeCssComments(code)
    .match(
      /@media\\s*?\\(\\s*?min-width\\s*?:\\s*?400px\\s*?\\)[\\s\\S]*.container\\s*?{[\\s\\S]*grid-template-areas\\s*?:\\s*?"\\s*?header\\s*?header\\s*?"\\s*?"\\s*?advert\\s*?content\\s*?"\\s*?"\\s*?footer\\s*?footer\\s*?"\\s*?;[\\s\\S]*}/gi
    )
);`}],description:`<section id="description">
<p>CSS Grid can be an easy way to make your site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.</p>
<p>In the preview, when the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely.</p>
</section>`,instructions:`<section id="instructions">
<p>When the viewport width is <code>400px</code> or more, make the header area occupy the top row completely and the footer area occupy the bottom row completely.</p>
</section>`,block:"css-grid",order:6,superOrder:1,superBlock:"responsive-web-design",challengeOrder:20,required:[],template:"",time:"5 hours",helpCategory:"HTML-CSS",translationPending:!1}]}}}},s=c["responsive-web-design"].blocks;console.log("Blocks: ",s);const r=Object.values(s);console.log("Blocks Array: ",r);console.log(r[0].meta.name);const h=document.querySelector(".navbar"),p=n=>{const e=document.createElement("a");e.classList.add("btn","btn-ghost","normal-case","text-xl","mx-4"),e.textContent=n,h.appendChild(e)};r.forEach(n=>{p(n.meta.name)});class u{constructor(e,t,i){o(this,"title");o(this,"explanation");o(this,"code");this.title=e,this.explanation=t,this.code=i}getTitle(){return this.title}getExplanation(){return this.explanation}getCode(){return this.code}}class m{constructor(e,t,i){this.title=e,this.explanation=t,this.code=i}getTitle(){return this.title}getExplanation(){return this.explanation}getCode(){return this.code}}let a=new u("How to define a class","Here is where I explain how to define a class",'<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>');console.log(a.getTitle());console.log(a.getExplanation(),a.getCode());console.log(Math.random());let g=new m("How to define a simpler, shortcut class","Here is where I explain how to define a more simple, shortcut class using the constructor",'<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>');console.log(g.getTitle());
//# sourceMappingURL=classes-122ab9df.js.map

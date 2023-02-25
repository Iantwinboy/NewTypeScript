var d=Object.defineProperty;var n=(t,e,r)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var o=(t,e,r)=>(n(t,typeof e!="symbol"?e+"":e,r),r);import"./input-502df8bf.js";const i=[{"button-title":"Function Parameter Types",title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`},{"button-title":"Object Types",title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
        <pre data-prefix="2"><code></code></pre>
        <pre data-prefix="3"><code>const sportsCar: {</code></pre>
        <pre data-prefix="4"><code>  make: string</code></pre>
        <pre data-prefix="5"><code>  model: string</code></pre>
        <pre data-prefix="6"><code>  horsepower: number</code></pre>
        <pre data-prefix="7"><code>  style: string</code></pre>
        <pre data-prefix="8"><code>  isFast: boolean</code></pre>
        <pre data-prefix="9"><code>  colors: string[]</code></pre>
        <pre data-prefix="10"><code>  driver: [number, string]</code></pre>
        <pre data-prefix="11"><code>  role: Role</code></pre>
        <pre data-prefix="12"><code>} = {</code></pre>
        <pre data-prefix="13"><code>  make: 'McLaren',</code></pre>
        <pre data-prefix="14"><code>  model: '720s',</code></pre>
        <pre data-prefix="15"><code>  horsepower: 720,</code></pre>
        <pre data-prefix="16"><code>  style: 'coupe',</code></pre>
        <pre data-prefix="17"><code>  isFast: true,</code></pre>
        <pre data-prefix="18"><code>  colors: ['red', 'blue', 'silver'],</code></pre>
        <pre data-prefix="19"><code>  driver: [1, 'McLaren'],</code></pre>
        <pre data-prefix="20"><code>  role: Role.ADMIN,</code></pre>
        <pre data-prefix="21"><code>}</code></pre>`}],c={data:i},s=t=>{t.forEach(e=>{console.log(e)})};s(c);class l{constructor(e,r,a){o(this,"title");o(this,"explanation");o(this,"code");this.title=e,this.explanation=r,this.code=a}getTitle(){return this.title}getExplanation(){return this.explanation}getCode(){return this.code}}class x{constructor(e,r,a){this.title=e,this.explanation=r,this.code=a}getTitle(){return this.title}getExplanation(){return this.explanation}getCode(){return this.code}}let p=new l("How to define a class","Here is where I explain how to define a class",'<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>');console.log(p.getTitle());console.log(p.getExplanation(),p.getCode());console.log(Math.random());let f=new x("How to define a simpler, shortcut class","Here is where I explain how to define a more simple, shortcut class using the constructor",'<pre data-prefix="1"><code>class ExampleCodeSnippet {</code></pre>');console.log(f.getTitle());
//# sourceMappingURL=classes-f4532e40.js.map

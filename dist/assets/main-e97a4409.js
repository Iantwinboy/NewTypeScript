import"./input-502df8bf.js";const a=()=>({title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`}),n=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
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
        <pre data-prefix="21"><code>}</code></pre>`});console.log(JSON.stringify(a()),JSON.stringify(n()));function s(e,r){return e+r}const i=25,l=3.5;let u=s(i,l);console.log(u);const f={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0};console.log("My car is one of these",f);function d(e,r){let o;return typeof e=="number"&&typeof r=="number"?o=e+r:o=e.toString()+r.toString(),o}console.log(d(25,3.5));console.log(d("25","3.5"));function c(e,r,o){let t;return typeof e=="number"&&typeof r=="number"||o==="as-number"?t=+e+ +r:t=e.toString()+r.toString(),t}console.log(c(25,3.5,"as-number"));console.log(c("25","3.5","as-number"));console.log(c("25","3.5","as-text"));const m=document.querySelector("#funcParams"),x=document.querySelector("#objectTypes"),b=document.querySelector(".card-title"),y=document.querySelector("#card-content"),g=document.querySelector("#code-content");m.addEventListener("click",p.bind(globalThis,a));x.addEventListener("click",p.bind(globalThis,n));function p(e){const{title:r,explanation:o,code:t}=e();b.textContent=r,y.textContent=o,g.innerHTML=t}
//# sourceMappingURL=main-e97a4409.js.map

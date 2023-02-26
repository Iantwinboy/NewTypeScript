import"./input-541fcbf8.js";const c=()=>({title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`}),i=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
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
        <pre data-prefix="21"><code>}</code></pre>`}),d=()=>({title:"Tuple, Enum, and Array Together",explanation:`Tuples are fixed lengths arrays, and each element can have a different type. They can be used with standard JavaScript features, and the type of operator lets us check the type and do something according to each type. Enum is a type of collection that is used by name.

        It makes code easier to read and ensures that fixed sets of values are used consistently. TypeScript enums have number values by default, but can also assign a string value to it. There are some limitations, such as comparing values from different enums, and setting an enum constant to a string if it is after the constant that has a value assigned to it.`,code:`<pre data-prefix="1"><code>type MyArrayType = string[];</code></pre>
            <pre data-prefix="2"><code>type MyTupleType = [string, number];</code></pre>
        <pre data-prefix="3">enum MyEnumType {<code>}</code></pre>
        <pre data-prefix="3">FirstItem = 'First',</code></pre>
        <pre data-prefix="3">SecondItem = 'Second',</code></pre>
        <pre data-prefix="3">ThirdItem = 'Third'</code></pre>
        <pre data-prefix="3">}</code></pre>`}),s=()=>({title:"Working with Union Types",explanation:`It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members. If you have a value of a union type, how do you work with it?

        TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:`,code:`<pre data-prefix="1"><code>type MyUnionType = string | number;</code></pre>
            <pre data-prefix="2"><code>type MyLiteralType = 'Hello' | 'World' | 42;</code></pre>
        <pre data-prefix="3"><code>const myLiteralValue = 'Hello' as const;</code></pre>`}),l=()=>({title:"Call Signatures",explanation:"In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a call signature in an object type:",code:`<pre data-prefix="1"><code>type MyFunctionType = (arg1: string, arg2: number)
    => boolean;</code></pre>
          `});console.log(JSON.stringify(c()),JSON.stringify(i()));function u(e,t){return e+t}const y=25,f=3.5;let m=u(y,f);console.log(m);const h={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren",!0,"bar"],role:0};console.log("My car is one of these",h);function p(e,t){let r;return typeof e=="number"&&typeof t=="number"?r=e+t:r=e.toString()+t.toString(),r}console.log(p(25,3.5));console.log(p("25","3.5"));function n(e,t,r){let o;return typeof e=="number"&&typeof t=="number"||r==="as-number"?o=+e+ +t:o=e.toString()+t.toString(),o}console.log(n(25,3.5,"as-number"));console.log(n("25","3.5","as-number"));console.log(n("25","3.5","as-text"));const x=document.querySelector("#funcParams"),b=document.querySelector("#objectTypes"),g=document.querySelector("#arrayTypes"),T=document.querySelector("#unionTypes"),v=document.querySelector("#funcAsType"),S=document.querySelector(".card-title"),w=document.querySelector("#card-content"),E=document.querySelector("#code-content");x.addEventListener("click",a.bind(globalThis,c));b.addEventListener("click",a.bind(globalThis,i));g.addEventListener("click",a.bind(globalThis,d));T.addEventListener("click",a.bind(globalThis,s));v.addEventListener("click",a.bind(globalThis,l));function a(e){const{title:t,explanation:r,code:o}=e();S.textContent=t,w.textContent=r,E.innerHTML=o}
//# sourceMappingURL=main-a7bde578.js.map

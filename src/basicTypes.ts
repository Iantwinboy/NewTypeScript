export const functionParamsExample = () => {
    return {
        title: `Data types can be set on function parameters`,
        explanation: `This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')`,
        code: `<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`
    }
}

export const objectTypeExample = () => {
    return {
        title: `Object data type with all properties set`,
        explanation: `TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.`,
        code: `<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
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
        <pre data-prefix="21"><code>}</code></pre>`
    }
}





export const arrayTypesExample = () => {
    return {
        title: `Tuple, Enum, and Array Together`,
        explanation: `Tuples are fixed lengths arrays, and each element can have a different type. They can be used with standard JavaScript features, and the type of operator lets us check the type and do something according to each type. Enum is a type of collection that is used by name.

        It makes code easier to read and ensures that fixed sets of values are used consistently. TypeScript enums have number values by default, but can also assign a string value to it. There are some limitations, such as comparing values from different enums, and setting an enum constant to a string if it is after the constant that has a value assigned to it.`,
        code: `<pre data-prefix="1"><code>type MyArrayType = string[];</code></pre>
            <pre data-prefix="2"><code>type MyTupleType = [string, number];</code></pre>
        <pre data-prefix="3">enum MyEnumType {<code>}</code></pre>
        <pre data-prefix="3">FirstItem = 'First',</code></pre>
        <pre data-prefix="3">SecondItem = 'Second',</code></pre>
        <pre data-prefix="3">ThirdItem = 'Third'</code></pre>
        <pre data-prefix="3">}</code></pre>`
        
    }
}




export const unionTypeExample = () => {
    return {
        title: `Working with Union Types`,
        explanation: `It’s easy to provide a value matching a union type - simply provide a type matching any of the union’s members. If you have a value of a union type, how do you work with it?

        TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:`,
        code: `<pre data-prefix="1"><code>type MyUnionType = string | number;</code></pre>
            <pre data-prefix="2"><code>type MyLiteralType = 'Hello' | 'World' | 42;</code></pre>
        <pre data-prefix="3"><code>const myLiteralValue = 'Hello' as const;</code></pre>`
    }
}





export const funcTypeExample = () => {
    return {
        title: `Call Signatures`,
        explanation: `In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a call signature in an object type:`,
        code: `<pre data-prefix="1"><code>type MyFunctionType = (arg1: string, arg2: number)
    => boolean;</code></pre>
          `
    }
}



console.log(JSON.stringify(functionParamsExample()), JSON.stringify(objectTypeExample()))

// A parameter is a named variable passed into a function
function add(num1: number, num2: number): number {
    return num1 + num2
}

const numberOne = 25
const numberTwo = 3.5

// an argument is a value (primitve or object) passed as input to a function.
let result = add(numberOne, numberTwo)
console.log(result)

enum Role {ADMIN, DEV, STUDENT}

const sportsCar: {
    make: string;
    model: string;
    horsepower: number;
    style: string;
    isFast: boolean;
    colors: string[];
    driver: [number, string, boolean, string];
    role: Role;
} = {
    make: "McLaren",
    model: '720s',
    horsepower: 720,
    style: 'coupe',
    isFast: true,
    colors: ['red', 'blue', 'silver'],
    driver: [1, 'McLaren', true, 'bar'], // tuple with mixed data types
    role: Role.ADMIN,
}

console.log('My car is one of these', sportsCar)

// Example of typescript union types    

function combine(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(25, 3.5))
console.log(combine('25', '3.5'))

// Example of typescript literal types

function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine2(25, 3.5, 'as-number'))
console.log(combine2('25', '3.5', 'as-number'))
console.log(combine2('25', '3.5', 'as-text'))

// Example of typescript function as type
//function loadExample(functionExample: () => { title: string, explanation: string, code: string })





type MyNumberType = number;
type MyBooleanType = boolean;
type MyStringType = string;
type MyArrayType = string[];
type MyTupleType = [string, number];
enum MyEnumType {
  One,
  Two,
  Three,
}
type MyUnionType = string | number;
type MyLiteralType = 'Hello' | 'World' | 42;
const myLiteralValue = 'Hello' as const;
type MyFunctionType = (arg1: string, arg2: number) => boolean;

const myNumber: MyNumberType = 42;
const myBoolean: MyBooleanType = false;
const myString: MyStringType = 'Hello World';
const myArray: MyArrayType = ['apple', 'banana', 'orange'];
const myTuple: MyTupleType = ['Hello', 42];
const myEnum: MyEnumType = MyEnumType.One;
const myUnion: MyUnionType = 'Hello';
const myLiteral: MyLiteralType = 'Hello';
const myFunction: MyFunctionType = (arg1: string, arg2: number) => {
  return arg1.length === arg2;
};

export {
  MyNumberType,
  MyBooleanType,
  MyStringType,
  MyArrayType,
  MyTupleType,
  MyEnumType,
  MyUnionType,
  MyLiteralType,
  myLiteralValue,
  MyFunctionType,
  myNumber,
  myBoolean,
  myString,
  myArray,
  myTuple,
  myEnum,
  myUnion,
  myLiteral,
  myFunction,
};



## Polyfill


## Fallback (Respaldo)
A **fallback** is like a backup plan in your code. Imagine you’re trying to get something done, but it might fail—like fetching data from the internet. A fallback is what you use when the main plan doesn’t work, ensuring your program doesn’t crash. It’s your safety net!

**Example**: If a user’s name isn’t provided, use a default "Guest" instead.
```javascript
let username = userInput || "Guest"; // If userInput is empty, "Guest" is the fallback
console.log(username);
```

---

## Type Check (Verificación de Tipo)
A **type check** is when you ask, “What kind of thing is this?” in your code. JavaScript has different *types* like strings, numbers, or objects, and sometimes you need to make sure you’re working with the right one before doing something—like checking if a value is a string before calling a string method.

**Example**: Check if a variable is a string before trimming it.
```javascript
let value = "Hello";
if (typeof value === "string") {
    console.log(value.trim()); // Safe to trim because it’s a string
} else {
    console.log("Not a string!");
}
```

---

## Promise (Promesa)
A **promise** is like a pinky swear in coding. It’s a way to handle tasks that take time (like downloading a file) without stopping everything else. A promise says, “I’ll try to do this, and I’ll let you know if I succeed or fail.” It’s great for asynchronous stuff!

**Example**: Pretend you’re asking for ice cream—it might take a second.
```javascript
let getIceCream = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Vanilla"), 1000); // Success after 1 second
});
getIceCream.then(flavor => console.log(`Got ${flavor}!`));
```

---

## Callback (Función de Retrollamada)
A **callback** is a function you give to another function to run later, like handing someone a note saying, “Call me when you’re done!” It’s often used with things that take time, so your code knows what to do next.

**Example**: Say “Hello” after a delay.
```javascript
function sayHello(name, callback) {
    setTimeout(() => callback(`Hello, ${name}!`), 1000);
}
sayHello("Ana", message => console.log(message));
```

---

## Fetch (Obtener)
**Fetch** is like sending a messenger to grab something from the internet—like a webpage or data. It’s a built-in JavaScript tool that returns a Promise, so you can wait for the response and then use it.

**Example**: Get some fake data from an API.
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data.title));
```

---

## Variable (Variable)
A **variable** is a box where you store stuff in your code—like a number, word, or list. You give it a name so you can use it later. Think of it as labeling a jar to hold cookies!

**Example**: Store a number in a jar called `age`.
```javascript
let age = 25;
console.log(age); // 25
```

---

## Function (Función)
A **function** is a recipe in your code—a set of instructions you can reuse. You name it, give it ingredients (parameters), and it cooks something up (returns a result).

**Example**: A function to add two numbers.
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(3, 4)); // 7
```

---

## Loop (Bucle)
A **loop** is like a merry-go-round—it keeps doing something over and over until you tell it to stop. It’s perfect for repeating tasks, like counting or checking a list.

**Example**: Count from 1 to 3.
```javascript
for (let i = 1; i <= 3; i++) {
    console.log(i); // 1, 2, 3
}
```

---

## Array (Arreglo)
An **array** is a shopping list in your code—a way to keep multiple things (like numbers or names) in one place. You can add, remove, or check items on the list.

**Example**: A list of fruits.
```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // "banana"
```

---

## Object (Objeto)
An **object** is like a folder with labeled pockets. Each pocket (called a property) holds something—like a name or age. It’s a way to group related info together.

**Example**: Describe a person.
```javascript
let person = { name: "Luis", age: 30 };
console.log(person.name); // "Luis"
```

---

## Condition (Condición)
A **condition** is a question your code asks, like “Is it raining?” Based on the answer (true or false), it decides what to do next. It’s how programs make choices!

**Example**: Check if it’s sunny.
```javascript
let isSunny = true;
if (isSunny) {
    console.log("Go outside!");
} else {
    console.log("Stay in.");
}
```

---

## Event (Evento)
An **event** is something that happens—like a button click or a key press. Your code can listen for these events and react, like a dog perking up when it hears a doorbell.

**Example**: Log a message when a button is clicked (in a browser).
```javascript
document.querySelector("button").addEventListener("click", () => {
    console.log("Button clicked!");
});
```

---

## Scope (Alcance)
**Scope** is like a room where variables live. Some variables are only available inside their room (local scope), while others can be used everywhere (global scope). It keeps things organized!

**Example**: A variable inside a function isn’t seen outside.
```javascript
function test() {
    let secret = "shh"; // Local scope
}
console.log(secret); // Error: secret isn’t defined here
```

---

## Async (Asíncrono)
**Async** means “not at the same time.” In coding, it’s for tasks that take a while (like fetching data) so your program can keep running instead of waiting around.

**Example**: Wait for a message without freezing.
```javascript
async function sayHi() {
    await new Promise(resolve => setTimeout(() => resolve("Hi!"), 1000));
    console.log("Hi after 1 second!");
}
sayHi();

```


> [!info]- Async vs. Promise: What’s the Difference and When to Use Them?
> Let’s break down these two JavaScript concepts—like figuring out if you need a pinky swear or a way to wait for it!
> ### What is a Promise? (¿Qué es una Promesa?)
> A **Promise** is like a pinky swear from your code. It’s an object that says, “I’m working on something (like fetching data), and I’ll let you know if I succeed or fail.” It has three states:
> - **Pending**: Still working on it.
> - **Fulfilled**: Yay, it worked! Here’s the result.
> - **Rejected**: Oops, something went wrong.
>
> You use `.then()` to handle success and `.catch()` for errors.
>
> ```javascript
> let promise = new Promise((resolve, reject) => {
>     setTimeout(() => resolve("Done!"), 1000); // Pinky swear to finish in 1 second
> });
> promise.then(result => console.log(result)); // "Done!" after 1 second
> ```
> ### What is Async? (¿Qué es Asíncrono?)
> **Async** is a special word you put before a function to say, “Hey, this function will deal with Promises and make them easier to handle.” It’s like a helper that lets you write code that *waits* for pinky swears to finish, using `await`, without messy `.then()` chains. An async function *always returns a Promise* itself.
>
> ```javascript
> async function waitForIt() {
>     let result = await new Promise(resolve => setTimeout(() => resolve("Ready!"), 1000));
>     console.log(result); // "Ready!" after 1 second
> }
> waitForIt();
> ```
> ### Key Differences (Diferencias Clave)
> - **Promise**: The raw "pinky swear" itself—an object that represents a future result. You create it or get it from functions like `fetch`.
> - **Async**: A way to *use* Promises more naturally. It’s a function wrapper that lets you pause with `await` instead of chaining `.then()`.
> - **Syntax**: Promises use `.then()` and `.catch()`; async uses `await` inside an `async` function.
> - **Return**: An async function automatically wraps its result in a Promise, even if you don’t see it.
> ### When to Use Each? (¿Cuándo Usar Cada Uno?)
> - **Use Promise**:
>   - When you need to *create* a one-off task that might take time, like a custom delay or a single operation.
>   - When a function (like `fetch`) already gives you a Promise, and you’re okay with `.then()` for simple handling.
>   - Example: 
>     ```javascript
>     fetch("https://api.example.com/data")
>         .then(response => response.json())
>         .then(data => console.log(data));
>     ```
>
> - **Use Async**:
>   - When you’re working with multiple Promises and want cleaner, step-by-step code (no chaining mess!).
>   - When you want to *wait* for something inside a function and make it feel like normal, non-async code.
>   - Example:
>     ```javascript
>     async function getData() {
>         let response = await fetch("https://api.example.com/data");
>         let data = await response.json();
>         console.log(data);
>     }
>     getData();
>     ```
> ### Quick Tip (Consejo Rápido)
> Think of **Promise** as the promise itself (the pinky swear) and **async** as the way you wait for it to happen. You’ll often use them together—Promises are the building blocks, and async/await is the comfy chair you sit in while waiting!
---

## Method (Método)
A **method** is a function that belongs to something, like a tool attached to an object or array. It’s a built-in action you can use on that thing.

**Example**: Use the `push` method to add to an array.
```javascript
let numbers = [1, 2];
numbers.push(3);
console.log(numbers); // [1, 2, 3]
```

---

## Parameter (Parámetro)
A **parameter** is a placeholder in a function—it’s like a blank spot in a form you fill out when you call the function. It lets the function work with different values.

**Example**: A greeting function with a name parameter.
```javascript
function greet(name) {
    console.log(`Hi, ${name}!`);
}
greet("Maria"); // "Hi, Maria!"
```

---

## Return (Retorno)
**Return** is when a function hands back a result, like a chef giving you a finished dish. Once it returns, the function stops, and you can use that result elsewhere.

**Example**: Return the sum of two numbers.
```javascript
function sum(a, b) {
    return a + b;
}
let result = sum(5, 3);
console.log(result); // 8
```

---

## String (Cadena)
A **string** is a piece of text in your code—like a word or sentence. It’s wrapped in quotes so the computer knows it’s not a number or something else.

**Example**: A simple message.
```javascript
let message = "Hello, world!";
console.log(message);
```

---

## Template Literal (Literal de Plantilla)
A **template literal** is a fancy way to write strings using backticks (`` ` ``). It lets you mix in variables easily, like filling in a Mad Libs story.

**Example**: Combine a name into a greeting.
```javascript
let name = "Carlos";
let greeting = `Hola, ${name}!`;
console.log(greeting); // "Hola, Carlos!"
```

---

## Error Handling (Manejo de Errores)
**Error handling** is like putting up a safety net for when your code trips. You use `try` and `catch` to deal with problems gracefully instead of crashing.

**Example**: Catch a mistake when dividing by zero.
```javascript
try {
    let result = 5 / 0;
    if (!isFinite(result)) throw "Division by zero!";
    console.log(result);
} catch (error) {
    console.log("Oops: " + error);
}
```

---



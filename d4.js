1. How many operators do we have in JS ?

ans:
a)  Aritmetic Operators
b)  Assignment Operators
c)  Comparison Operators
d)  Logical Operators
e)  Conditional Operators
f)  string operators

2. What are pure functions?

ans:
 It's a function that would give same or consistent output if same input is being passed.<br>it is nothing but a well defined function.

 function add(a,b){
     console.log(a+b);
 }
 add(9,7);
 add(5,8);

3. What is callback hell ?

ans:

It's function that will executed after execution of its parent function is executed completely<br>it also form pyramid like structure that is difficult to undestand and debug.

function printNumber() {
    setTimeout(() => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
                setTimeout(() => {
                    console.log('4');
                    setTimeout(() => {
                        console.log('5');
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}
 printNumber();


4. What are promises and why do we need them ?

ans:
Promises - Promises are used to handle asynchronous operations in JavaScript.
They are easy to manage when dealing with multiple asynchronous operations when callbacks can create callback hell leading to unmanageable code. 
It also allow us to make API calls or fetch data from Web Servers successfully. 
If not able to do so fetch us with error message.
It have three stages. 

5. What is promise chaining ?

ans:
const PrintNumber=(time,value)=>{
    return new Promise ((resolved,rejected)=>{
        setTimeout(()=>{
            console.log(value)
            resolved();
        },time);
    })
}
 PrintNumbers(5000,"3")
 .then(()=> PrintNumbers(4000,"2"))
 .then(()=> PrintNumbers(4000,"1"))

6. What is the purpose of async/await keywords ?

ans:
"async and await make promises easier to write"
"async makes a function return a Promise"
"await makes a function wait for a Promise"

7. Give an example of async/await?

async function newFunction(){
    await printAlphabets(5000, 'a')
    await printAlphabets(4000, 'e')
    await printAlphabets(4000, 'i')
    await printAlphabets(2000, 'o')
    await printAlphabets(1000, 'u')
}
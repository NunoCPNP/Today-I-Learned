---
title: Differences between "var" and "let" keywords?
date: '2019-08-22T22:12:03.284Z'
description: ''
---

This post will be the first of a large series of small posts that will cover some questions you are likely to come across during your job interviews.

I'll be more focused on JavaScript but there will be some posts about HTML , CSS and React JS in the future !

Ok , let's get started !

## **_Difference nr 1!_**

**"var"** was introduced in JavaScript from the beginning while **"let"** was introduced in ES2015/ES6.

## **_Difference n 2!_**

**"Let"** has a <u>block scope</u> while **"var"** as a <u>function scope</u>

Let's see this example

```

let x = function() {

  if(true) {
    var v = 2;
    let l = 1;
  }

  console.log(v);
  --> 2
  console.log(l);
  --> Uncaught Reference: l is not defined
}

x();
```

The console.log of the variable v will return 2 because of the function scope of the **"var"** keyword while the l variable will return an error because of the block scope of the **"let"** keyword.

## **_Difference n 3!_**

Variables defined with **"var"** <u>gets hoisted</u> at the top of his function while variables defined with **"let"** <u>don't get hoisted</u>.

```
let x = function() {

  if(true) {
    console.log(v);
    --> undefined
    console.log(l);
    --> Uncaught Reference: l is not defined

    var v = 2;
    let l = 1;
  }
}

x();
```

In this case the variable v will return undefined while the l variable will return an error, this happens because declarations using **var** are <u>hoisted / lifted</u> to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made.

_That's it ! nothing too complicated but it's important to keep these concepts fresh in your minds._

_See you soon for more tips !_

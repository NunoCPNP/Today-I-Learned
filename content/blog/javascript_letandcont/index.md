---
title: Differences between "let" and "const" keywords?
date: '2019-08-24T22:12:03.284Z'
description: ''
---

In my last article we discuss the differences between the **"var"** and **"let"** keywords, now it's time to discuss the differences the **"let"** and **"const"** keywords.

Let's gets started !

**“let”** and **“const”** they are both used to define variables.

## **_Difference nr 1!_**

With keyword **“const”** you can define constant variables which means, after the first assignment of the value you cannot reassign the value again.

With keyword **“let”** you can reassign the value as many times as you need, you can even change the type of value if needed.

Let’s take a look at some code:

```
let l = 1;
l = 2;
console.log(l);
// 2

const c = 1;
c = 2;
Console.log(c);
// Error: Uncaught TypeError: Assignment to constant variable
```

<br/>

## **_Difference nr 2!_**

Variables defined with **“const”** keyword cannot be initialized without any value. You must specify its value in the same statement in which its declared (which makes sense, given that it can't be changed later).

Let’s take a look at this example:

```
let l
l = 1
console.log(l)
// 1

const c;
c = 1;
console.log(c);
// Error: Uncaught TypeError: Missing initializer on constant variable
```

<br/>

## **_Difference nr 3!_**

The **"const"** declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents can be altered.

Let’s see this in action:

```
const c = [ 1, 2 ];
c.push(3);
console.log(c);
// [ 1, 2, 3 ]

Const c = [ 1, 2 ];
C = [ 1, 2, 3 ];
console.log(c);
// Error: Uncaught TypeError: Assignment to constant variable
```

<br/>

_That's it ! Once again simple but important concepts to keep fresh in your minds._

_See you soon for more tips !_

---
title: Differences between "null" and "undefined" keywords?
date: '2019-08-28T22:12:03.284Z'
description: ''
---

They both represent a <u>empty value</u>.

## **_Difference nr 1!_**

When you define a variable but not assign a value to it, it automatically puts a placeholder which is called **undefined** so you don't have do it manually, javascript does it for you.

**Null** means an empty or non-existent value.

**Null** is assigned, and explicitly means nothing. while **undefined** typically means a variable has been declared but not defined yet.

```
var a;
console.log(a);
// undefined

var b = null;
console.log(b);
// null
```

<br/>

## **_Difference nr 2!_**

**Null** and **undefined** are both <u>primitives and falsy values</u>. However **null** is also an object. Interestingly, this was actually an error in the original JavaScript implementation.

```
var a;
console.log(typeof(a));
// undefined

var b = null;
console.log(typeof(b));
// object
```

<br/>

## **_Difference nr 3!_**

As you can see so far, **null** and **undefined** are different, but share some similarities. Thus, it makes sense that **null** does not strictly equal **undefined**.

```
console.log(null !== undefined);
// true
```

But, and this may surprise you, **null** loosely equals **undefined**.

```
console.log(null == undefined);
// true
```

In JavaScript, a double equals tests for loose equality and preforms <u>type coercion</u>. This means we compare two values after converting them to a common type.

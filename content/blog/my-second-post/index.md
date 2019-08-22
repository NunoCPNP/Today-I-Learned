---
title: CSS Grid - Auto-Fit & Auto-Fill
date: '2019-08-18T23:46:37.121Z'
---

In CSS Grid when using repeat, instead of a set number of times, we can use auto-fit or auto-fill.

By using one of these properties we can create a responsive grid container without the need of extra media queries.

Let’s imagine we want to build a 5 column grid container, we can quickly do that by adding a couple of css lines to our div container:

```
.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
```

<br/>

To use **auto-fit** or **auto-fill** properties, first we need to use the **minmax** property in our grid, minmax will let you define the minimum and maximum width of each column in our container.

Lets refactor our code to use minmax property, in this particular case I will define 150px as minimum and 1fr as maximum, 1fr will allow for each column to stretch evenly if we have space on the container :

```
.grid-container {
    display: grid;
    grid-template-columns: repeat(5, minmax(150px, 1fr));
}
```

<br/>

I added a couple extra lines of css just to make things easier to see.

Let’s check that code in action [here](https://codepen.io/nuno-pereira/pen/ZEzBQLz) !

Great, we have a 5 column grid layout that is working as expected but as soon as we try to view our grid on smaller devices we notice that it’s not responsive.

Let’s implement the auto-fit property and see the differences:

```
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
```

<br/>

And with this simple change suddenly we have a responsive 5 column grid layout, let’s see it in action [here](https://codepen.io/nuno-pereira/pen/JjPbGNR) !

Now we have a fully responsive 5 grid container without the need to use any media query.
The difference between using auto-fill and auto-fit for sizing columns is only noticeable when the row is wide enough to fit columns in it.

If you’re using auto-fit, the content will stretch to fill the entire row width whereas with auto-fill, the browser will allow empty columns to occupy space in the rows.

Let’s see the same example we have been using but now with the auto-fill property in action [here](https://codepen.io/nuno-pereira/pen/zYOozPe) !

And that’s it, hope you enjoyed this small tip on CSS Grid properties.

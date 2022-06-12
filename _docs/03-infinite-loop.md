# Infinite-loop

Methods:

1.  setInterval
2.  setTimeout
3.  setImmediate



## 1.  setInterval

This is the best way to keep a Node application alive (I think).
Variant 2 is maybe better as it does not trigger as often.

```js
// Variant 1
var keepAliveTimer = setInterval(() => {}, 0);

// Variant 2
var keepAliveTimer = setInterval(() => {}, Number.MAX_SAFE_INTEGER);
```


## 2.  setTimeout

This method is ok.
But suspect this snippet maybe memory-leaks?)

ZX: What are the pros of this approach? 🤔

```js
// Definition
function timeoutFunc() {
    setTimeout(timeoutFunc, 0);
} 

// To run
timeoutFunc();
```


## 3.  setImmediate

This method is maybe not recommended.
It seems to take up CPU more than neccessary.
(and I suspect this snippet maybe memory-leaks?)

ZX: What are the pros of this approach? 🤔

```js
// Definition
const next = () => {
    setImmediate(next);
}

// To run
next();
```
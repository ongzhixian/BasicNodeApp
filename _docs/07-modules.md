# Modules

## CommonJs modules

`module.exports` can only return one value

So its either:

```js

function AppState() {
    this.Name = "AppState";
    this.DoSomething = function() {
        console.log("AppState DoSomething");
    }
}

module.exports = new AppState();
```

OR we can do it as an anonymous function

```js
module.exports = (() => {
    this.Name = "AnonymousAppState";
    this.DoSomething = function() {
        console.log("AnonymousAppState DoSomething");
    }
    return this;
})();
```

To return multiple values as a single unit:

```js
module.exports = {
    logInfo: info,
    logError: error,
    defaultMessage,
};
```
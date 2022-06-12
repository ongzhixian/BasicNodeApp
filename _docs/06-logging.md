# Logging

Still have not solve the logging problem.

``` js -- How console.log is implemented
Console.prototype.log = function() {
  this._stdout.write(util.format.apply(this, arguments) + '\n');
};
```

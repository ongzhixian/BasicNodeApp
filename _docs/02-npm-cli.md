# npm CLI 

## Installing modules

Using `nodemon` as example.

`nodemon` restart the application automatically,
whenever there is a change in the application.

### Installing modules globally

```
npm i -g nodemon
```

`npm root -g` display location where global installed modules

### Installing modules as development-only dependency

```
npm i --save-dev nodemon
```

### Installing a specific version

```
npm install cowsay@1.2.0
```

### Running using nodemon

```
nodemon app.js
```

### Update packages

```
npm update 
```

Updates `package.json` with newer minor or patch versions. 
Use `npm update --no-save` to prevent modifying package.json

To discover new package releases, use `npm outdated`.

### package-lock.json file

In version 5, npm introduced the `package-lock.json` file.

`package-lock.json` keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.

Specifying version

1.  `~0.13.0`   -- you want to only update patch releases: 0.13.1 is ok, but 0.14.0 is not.

2.  `^0.13.0`, you want to get updates that do not change the leftmost non-zero number: 0.13.1, 0.13.2 and so on. 

3.  `^1.13.0`, you will get patch and minor releases: 1.13.1, 1.14.0 and so on up to 2.0.0 but not 2.0.0.

4.  `0.13.0`, that is the exact version that will be used, always


## Running installed module with npx

`./node_modules/.bin/cowsay` works, but...
 `npx` included in the recent versions of npm (since 5.2)
 is a much better option 
 (it tries to use installed version in `node_modules` before seeking
 for executable elsewhere)

To run:
`npx cowsay take me out of here`
and npx will find the executable location.

## package.json

The package.json file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. 

```
npm set init.author.email "zhixian@hotmail.com"
npm set init.author.name "Zhixian Ong"
npm set init.license "MIT"
npm init --yes
New-Item index.js
```

The `npm set` statements should probably set once and forget about it.
But you might have different ideas (example changing different license).

`New-Item` applies only in PowerShell.
The choice of `index.js` is because that is what `npm init` sets by
default for `main` in `package.json`

## Workspaces

Not sure whether to endorse workspaces yet.
But for knowledge:

`npm init -w packages/sf`

# Reference

https://nodejs.dev/learn/

https://docs.npmjs.com/creating-a-package-json-file
# Working With Webpack

This project is split into two separate folders.
Both will be setup and run in the following manner.
Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run build
```

The purpose of this will be to familiarize you with the basics of Webpack, and
to step through a simple debugging exercise. 

Why Webpack? 
While it is much more convenient to use Create React App - CRA - as it is often called;
Webpack allows the developer to manage their own custom build configurations.

Why even use a static module bundler?
Static module bundlers allows the developer to to create a bundle of their assests from
which to serve their content. This is convenient and portable, as it handles your 
dependencies in a programmatic way.

How does Webpack work? 
Roughly speaking, Webpack starts with an entry point (or more, if desired) and builds a 
dependency graph. That dependency graph is a graph of all the modules needed by the 
application. From there, Webpack takes the dependency graph and uses it to bundle the
modules together to create one or more bundles.

Webpack can be used without a `webpack.config.js` file. One has been provided here to give 
a general walk through of the different parts of a `webpack.config.js`

## Demo
This is the demo portion of the repository.

### Demo Walkthrough
I'm going to assume that you know the basics of how the `package.json` works.

## Debug
This is the debug portion of the repository, things intentionally are broken here.
i.e. running `npm run build` will fail.

## Resources 
https://webpack.js.org/concepts/
https://webpack.js.org/guides/getting-started/
https://webpack.js.org/concepts/dependency-graph/
https://webpack.js.org/configuration/resolve/#root


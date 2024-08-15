/* const heading = React.createElement(
      "h1",
      { id: "heading", xyz: "abc"},
      "Hello world from React" 
);  /* here we giving atribute to h1 tag , bcz we are pointing to h1 tag here */
 /* this {heading} is nothing but a react element which is nothing but a js obj. */
/*const root = ReactDOM.createRoot(document.getElementById("root")); /*here we are adding the element into the dom that which is not the core property of react , createElement is the core of the react but creating a root is not the core of it, it is comming from reactDOM 
                so we need to add reactDOM for this create root element to work on , we need something so that we can render the stuff inside of it hence creating the root */

                /* createRoot is used to create a root for a React tree. It replaces the older ReactDOM.render() method as the primary way to render a React application.*/
/* root.render(heading); /*this render method will convert {heading} object into the html tag which will be understood  by js */
     
/*

<div id ="parent">
    <div id = "child1">
       <h1> I'm h1 tag </h1>
       <h2> I'm h2 tag </h2>
    </div>
    <div id= "child2">
       <h1> I'm h1 tag </h1>
       <h2> I'm h2 tag </h2>
     </div>
</div> 

*/

const parent = React.createElement("div", {id:"parent"}, [ /* we are creating html elemenets inside the react so that it will later convernt into the html while remdering , nothing else */
      React.createElement("div",{id :"child1"}, [
            React.createElement("h1",{}, "I'm h1 tag"), /* therefore we are using jsx to avoid such complex nesting, are very useful when we need to crteate the tags */ 
            React.createElement("h2",{}, "I'm h2 tag"),
      ]),
      React.createElement("div",{id :"child2"}, [
            React.createElement("h1",{}, "I'm h1 tag"),
            React.createElement("h2",{}, "I'm h2 tag"),
          ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root")); /* we need an element under wich we will all the stuff , 
when we are creating a root it is witin the dom , hence we need to use ReactDOM library along with createRoot */
 
root.render(parent);  /* here we are rendering parent inside the root

react can work indipendently on a small peice of code also there fore it is called a library , where framework comes with a lot of stuff , applied on the all of it */

/* here we are pointing to div hence react will work only for div, inside of it whatever be there it will simply replace it and 
execute what have we asked it to render */

/* & 'C:\Program Files\Git\cmd\git.exe' init ---- this is used by me to create a git inside the folder */

/* working of createRoot behind the scenes 

Your understanding is close, but let me clarify it a bit more precisely:

`createRoot` is not used for creating an element, but rather for creating a React root. Here's a more detailed explanation:

1. Purpose of `createRoot`:
   - `createRoot` is used to create a React root, which is the top-level data structure React uses to track a tree to render.
   - It doesn't create a new DOM element. Instead, it prepares an existing DOM element to become the container for a React application.

2. Where it renders:
   - `createRoot` is typically called on an existing DOM element, often a `<div>` with an id of "root" that you've already included in your HTML.
   - It doesn't create this element; it just sets it up as the container for your React app.

3. Usage:
   ```javascript
   const container = document.getElementById('root');
   const root = ReactDOM.createRoot(container);
   ```

4. Rendering:
   - After creating the root, you use the `render` method on this root to actually render your React elements:
     ```javascript
     root.render(<App />);
     ```

5. Difference from older versions:
   - In React versions prior to 18, you would use `ReactDOM.render()` directly. `createRoot` is part of the new concurrent rendering system introduced in React 18.

So, to summarize:
- `createRoot` doesn't create a new element. It prepares an existing DOM element to become the container for your React app.
- It's used to create a React root, which is then used to render your React components into the specified container.

Your understanding that it's used "under which we are going to render the things" is correct. It sets up the entry point for your React application in the DOM.*/
 /* at the end react is nothing but few functions that help us build application faster */

 /* git init we are configuring the the remote git , into our project , for that first we are making pur local repo as git repo.*/

 /* 1} first make the repo. a git repo. by using git init {this will make the local repo. a git repo}
2} if u are not able to make master to the main than first make the initial commit by following these steps 
          git add .
          git commit -m "Initial commit"
3} than after rename the brnach :
          git branch -m master main
git bash 
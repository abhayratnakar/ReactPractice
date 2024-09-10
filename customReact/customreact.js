import React from "./React"


function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    
    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
        if (prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
   }
   
   container.appendChild(domElement)
}


/*
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click me to visit google"
}

const reactElement1 = {
    type: 'a',
    props: {
        href: "https://youtube.com",
        target: "_blank"
    },
    children: "Click me to visit youtube"
}

const brelement = {
    type: "br",
    children: ""
}
*/

const elementsArray = [
    {
        type: 'a',
        props: {
            href: "https://google.com",
            target: "_blank",
        },
        children: "Click me to visit google"
    },
    {
        type: 'a',
        props: {
            href: "https://youtube.com",
            target: "_blank"
        },
        children: "Click me to visit youtube"
    },
    {
        type: 'a',
        props: {
            href: "https://chatgpt.com",
            target: "_blank"
        },
        children: "Click me to visit chatgpt"
    },
    
];

const br =     {
    type: "br",
    children: ""
}

const mainContainer = document.querySelector("#root");

elementsArray.map((element)=>{
    customRender(element, mainContainer);
    customRender(br, mainContainer);
})


/*
customRender(reactElement, mainContainer)

customRender(brelement, mainContainer)

customRender(reactElement1, mainContainer)
*/  
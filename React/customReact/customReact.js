function customRender(reactElement,container){
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)  
    */

    //Under Looping approach
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if( prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// const { Children } = require("react")

const reactElement = {

    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'Click me to visit Google'

}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
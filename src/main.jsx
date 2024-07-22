import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom"
import Router0 from './Router0.1.jsx'


// let see dynamic path 
// basically dynamic path is to use a url dynamically means we can take a query or you can say some information from the url 
// to use dynamic path we should import the useParams from react-router-dom
// after importing the useParams we should use the useParams in the component
// let create the component


function Sumit(){
  const parm=useParams()
  return<h1>hello my name is {parm.name}</h1>
}


ReactDOM.createRoot(document.getElementById('root')).render(
    //let study the router with some example it will help to get more about router in react
    // to implement the router first we should install he react-router-dom 
    // to install react-router-dom just write npm install react-router-dom
    // after installing the react-router-dom we should import the BrowserRouter from react-router-dom
    // after importing the BrowserRouter we should wrap the whole app with BrowserRouter
    // after wrapping the whole app with BrowserRouter we should import the Routes from react-router-dom
    // after importing the Routes we should wrap the Routes with BrowserRouter
    // and pass ech path and element in side element should pass render component


   

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/router' element={<Router0/>} />
        <Route path='/user/:name' element={<Sumit/>} />
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
)


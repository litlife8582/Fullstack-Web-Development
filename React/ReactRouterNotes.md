To run react routers:

1.We have to define seperated folders for each component and save a .jsx file of the component in the folders.

2.The routing is controlled by main.jsx. So in the main.jsx file 
    we have to : 
    import {RouterProvider,createBrowserRouter} from 'react-router-dom'
    import ComponentName from "./ComponentFolder/ComponentFile"
    
    Then we use createBrowserRouter function to define the routing structure for a web application with a shared layout. It establishes a parent route that wraps several child routes.
    
    The general syntax for defining a parent route object is:
        
        const router=createBrowserRouter([
            {
                path:"/"
                element:<Component Which Will Contain The Child Components/>
                children:[
                    {
                        path: 'Path To Be Given In The NavLink',
                        element: <Component To be Rendered>
                    },......for other components
                ]
            }
        ])

        Alternate Syntax

        const router=createBrowserRouter([
            createRoutesFromElements(
                <Route path="/" element={<Parent_Element/>}>
                    <Route path="/pathOfChildRoutes" element={<Child Component/>}>
                    ..
                    ..Other child components
                </Route>....End of Parent Route
            )
        ])
        
In the file where we use the components we write:
1.import { Link, NavLink } from 'react-router-dom';

2.<NavLink to="/path..."
  className={({ isActive })=>
  css.... ${isActive?"css...if isActive:True":"css...if isActive:False} remaining css...."}>Component Name</NavLink>  
  
  Here the tag used is NavLink which check's whether a component is Active or not.The active component is shown in a different color than the rest of the components. {isActive} is a boolean property to return active components.

To make a extract a parameter from url:
    In the required component:
    import { useParams } from 'react-router-dom'

    export default function User() {
        const { parameterName }=useParams()
        return (
            <div>
                Text_To_Be_Displayed:{ ParameterName }
            </div>
        )
    }

    In main.jsx:
    
    Include <Route path='/pathOfComponent/:parameterName' element={<Component/>}/>

    The parameter passed in the url http://..../:abcd, abcd will be displayed in the page
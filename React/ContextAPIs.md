In the src folder we create another folder called context.In it:
    1.We create a file where we want to store the context
        In the file we use 

        const UserContext=React.createContext()
        export default UserContext;

        UserContext Acts as a wrapper in which we include the components using the contexts. The component gets access to all the variables included in the context file.

    2.We have to create another file which acts as the context provider - this is a .jsx file
        
        import React from "react";
        import UserContext from "./UserContext";

        const UserContextProvider=({children})=>{
            const [user,setUser]=React.useState(null)
            return(
                <UserContext.Provider value={{user,setUser}}>
                    {children}
                </UserContext.Provider>
            )
        }

        export default UserContextProvider

        Explaination:
        In simple terms, UserContextProvider is a special component that holds a piece of state (the user data) and makes it available to any component nested inside it, no matter how deep they are. This avoids the need to pass props down through many layers of components (a problem known as "prop drilling").

        Breakdown of the Code
        
        (a) import UserContext from "./UserContext";
        
        This line imports the actual Context object, which was likely created in another file using React.createContext(). Think of UserContext as the channel through which the data will be sent.

        (b) const UserContextProvider = ({children}) => { ... }
        This defines a React component named UserContextProvider.

        (c) ({children}): This is a special prop that represents any components or JSX that you nest inside <UserContextProvider>. For example, in {children}, children would be <YourEntireApp />.

        (d)const [user, setUser] = React.useState(null) This line uses the useState hook to create a piece of state for this provider.
                user: The state variable that will hold the user data (initially null).

                setUser: The function used to update the user data.

        <UserContext.Provider value={{user, setUser}}>
        This is the most important part.

        UserContext.Provider: Every context object has a Provider component. Its job is to provide the context value to all its descendants.

        value={{user, setUser}}: The value prop is where you pass the data you want to share. Here, you're passing an object containing both the current user and the setUser function. This is powerful because it means any child component can not only read the user data but also update it.

        {children}
        This renders any child components that were passed to the provider. This ensures that your application, or the part of it you wrap, is displayed on the screen and has access to the context.

    3.We create the files that uses the context API's:
        
        Login.jsx - Writing to the Global State
        This component is a simple form that captures a username and password and sends it to the global context.

            useState for Inputs: The username and password are handled by local state using useState. This is standard for controlling form inputs.

            useContext(UserContext): This is the key part.

            const {setUser} = useContext(UserContext): This hook reaches up to the nearest <UserContextProvider> and grabs the value object it provides. You are specifically destructuring the setUser function from that value.

            handleSubmit Function:

            e.preventDefault(): Prevents the form from doing a full page refresh on submission.

            setUser({username, password}): This is where the magic happens. You call the global setUser function that you got from the context and pass it an object with the current username and password. This updates the state that lives inside UserContextProvider.

        In short, the Login component's only job is to update the shared user data.

        Profile.jsx - Reading from the Global State
        This component's job is to display information based on the current user's login status.

            useContext(UserContext):

            const {user} = useContext(UserContext): Just like in Login, this hook connects to the UserContextProvider. However, this time it pulls out the user state variable.

            Conditional Rendering: The component's display logic is based on whether the user object exists.

            if(!user) return <div>Please Login!</div>: When the app first loads, the user state in your context is null. In this case, the component shows a "Please Login!" message.

            return <div>Welcome {user.username}</div>: After you fill out the login form and click "Submit," the setUser function is called. This updates the global state, causing the Profile component to re-render. Now, the user object is no longer null, so this line runs, displaying a welcome message with the username.

        In short, the Profile component reactively displays content based on the shared user data.

        The Complete Workflow
            Initial State: The app loads. UserContextProvider's state is { user: null }. The Profile component sees that user is null and displays "Please Login!".

            User Action: You type a username and password into the Login component.

            State Update: You click "Submit." The handleSubmit function in Login calls setUser with the new user data.

            Global Change: The state inside UserContextProvider is now { user: { username: 'your_name', password: '...' } }.

            Reactive Re-render: Because the context value has changed, React automatically re-renders the Profile component.

        Final State: The Profile component now sees that user exists and displays "Welcome {user.username}".
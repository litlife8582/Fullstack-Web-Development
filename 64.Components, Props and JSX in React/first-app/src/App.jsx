import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Card from "./components/Card";
import "./App.css"

  function App() {
  return (
    <>
     <Navbar/>
     <div className="cards">
      <Card title="Products" description="Browse through the limits of innovation"/>
      <Card title="Services" description="Get to know the various services we provide"/>
      <Card title="Outlet locations" description="We are available across 1000+ locations all over the world "/>
      <Card title="Track Orders" description="Your order status"/>
     </div>
     <Footer/>
    </>
  )
}

export default App

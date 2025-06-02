import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Klips from "./Components/Pages/Klips"
import Songs from "./Components/Pages/Songs"

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar/>
      <Header/>
      <Klips/>
      <Songs/>
    </div>
  )
}

export default App

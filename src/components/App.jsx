import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Projects from './projects';
import Gallery from './gallery';
import Footer from "./footer";

function App() {

  useEffect (() => {
    document.documentElement.classList.toggle("dark");
    // console.log(document.documentElement.classList, "----is dark? in App");
  }, [])

  return (
    <>
      <main className="max-w-screen-xl m-0 p-8 text-center min-w-[375px]">
        <Navbar />
        <section className="md:flex md:justify-between">
        <Header/>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </section>
      </main>
      <footer className="md:hidden">
        <Footer />  
      </footer>
    </>
  )
}

export default App

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
      <nav className="fixed top-0 right-0 flex w-full bg-zinc-50 dark:bg-zinc-800 border-b border-orange-500 z-50">
        <div className="grow"></div>
        <Navbar />
      </nav>
      <main className="max-w-screen-2xl m-0 pr-8 pl-8 text-center min-w-[375px]">
        <Header/>
        <section className="md:pt-20 md:flex md:justify-end ">
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

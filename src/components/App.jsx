import { Route, Routes } from "react-router-dom";
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from "./footer";


function App() {

  return (
    <>
      <main className="max-w-screen-xl m-0 p-8 text-center min-w-[375px]">
        <Navbar />
        <section className="md:flex md:justify-between">
          <Header/>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App

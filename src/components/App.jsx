import { Route, Routes } from "react-router-dom";
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {

  return (
    <main className="bg-stone-300 max-w-screen-xl m-0 p-8 text-center min-w-[375px]">
      <Navbar />
      <section className="lg:flex lg:justify-between border border-black">
        <Header/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </main>
    
  )
}

export default App

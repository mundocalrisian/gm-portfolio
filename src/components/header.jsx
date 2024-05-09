import { DarkContext } from '../context/dark'
import { useContext, useEffect } from 'react'
import gitHub from '../assets/contact-logos/github.svg'
import linkedIn from '../assets/contact-logos/linkedin.svg'
import envelope from '../assets/contact-logos/envelope.svg'
import instagram from '../assets/contact-logos/instagram.svg'
import tumblr from '../assets/contact-logos/square-tumblr.svg'
import meHeadshot from "../assets/me-headshot.jpg"
import Footer from './footer'
import LightSwitch from './light-switch'

export default function Header () {

    const {dark, setDark} = useContext(DarkContext)
    
    const toggleDark = () => {
        setDark((currDark) => {
                return currDark === 'false' ? 'true' : 'false'
            })
        document.documentElement.classList.toggle("dark");
    }
    
    const linkOptions = [
        ["GitHub", gitHub, "https://github.com/mundocalrisian"],
        ["LinkedIn", linkedIn, "https://www.linkedin.com/in/greg-munden/"],
        ["Email", envelope, "mailto:greg.munden@gmail.com"],
        ["Instagram", instagram, "https://www.instagram.com/soundslikescience/"],
        ["Tumblr", tumblr, "https://www.tumblr.com/landoficeandrock"]
    ]

    return (
        <header className="flex flex-col justify-between md:fixed pt-24 md:pt-0 md:top-24 md:h-screen md:pb-24 w-[350px] text-left">
            <section>
                <h1 className="text-4xl pl-4 pt-4 pb-2 font-bold">Greg Munden</h1>
                <div className=" pl-4 pb-4">
                    <h2 className="text-xl font-semibold mb-1">Junior Software Developer</h2>
                    <p>Ilkley, West Yorkshire</p>
                </div>
                <div className="ml-4">
                    <img src={meHeadshot} alt="a headshot of Greg" className="w-[150px] rounded-full "/>
                </div>
                <ul className='flex justify-start items-center md:justify-start mt-4 mb-4 ml-2'>
                    {linkOptions.map(([title, icon, url]) => {
                        return (
                            <li key={title} className='ml-2 mr-2 h-8'>
                                <a href={url} target="_blank" rel="noreferrer noopener">
                                <img src={icon} className="filter-orange opacity-80 hover:opacity-100" alt={`${title} link`} width="30" height="30"/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <div className="ml-4 mb-4 w-5/6 flex flex-end items-center md:hidden">
                <LightSwitch />
                <p onClick={toggleDark} className="ml-4 text-sm hover:cursor-pointer">Click  {dark === "true" ? "to see the light" : "for some darkness"}</p>
            </div>
            <footer className="hidden md:block">
                <div className=" ml-4 mb-4 w-5/6 hidden md:flex md:flex-col md:justify-start md:items-between">
                    <LightSwitch />
                </div>
                <p onClick={toggleDark} className="ml-4 hidden md:block mb-4 text-sm hover:cursor-pointer">Click  {dark === "true" ? "to see the light" : "for some darkness"}</p>
                <Footer />
            </footer>
        </header>
    )
}
import gitHub from '../assets/contact-logos/github.svg'
import linkedIn from '../assets/contact-logos/linkedin.svg'
import envelope from '../assets/contact-logos/envelope.svg'
import instagram from '../assets/contact-logos/instagram.svg'
import tumblr from '../assets/contact-logos/square-tumblr.svg'
import { DarkContext } from '../context/dark'
import { useContext, useEffect } from 'react'


export default function Header () {

    useEffect (() => {
        toggleDark()
    }, [])

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
        <header className="flex flex-col w-[350px] text-left">
            <h1 className="text-4xl pl-4 pt-4 pb-2 font-bold">Greg Munden</h1>
            <div className=" pl-4 pb-4">
                <h2 className="text-xl font-semibold">Junior Software Developer</h2>
                <p>Slowly getting there...</p>
            </div>
            <ul className='flex justify-start items-center md:justify-start mt-0 mb-4 ml-2 '>
                {linkOptions.map(([title, icon, url]) => {
                    
                    return (
                        <li key={title} className='ml-2 mr-2 h-8'>
                            <a href={url} target="_blank" rel="noreferrer noopener">
                            <img src={icon} className="filter-orange2 opacity-80 hover:opacity-100" alt={`${title} link`} width="30" height="30"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className='ml-4 mt-4 mb-4'>
                <input 
                    type="checkbox" 
                    className=""
                    name="dark-mode-toggle-switch"
                    id="dark-mode-toggle-switch"
                    onClick={toggleDark} 
                    defaultChecked={true}
                />
                <label className="ml-2" htmlFor="dark-mode-toggle-switch">
                    Toggle Dark Mode
                </label>
            </div>
        </header>
    )
}
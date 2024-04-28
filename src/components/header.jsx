import gitHub from '../assets/github.svg'
import linkedIn from '../assets/linkedin.svg'
import envelope from '../assets/envelope.svg'
import instagram from '../assets/instagram.svg'
import tumblr from '../assets/square-tumblr.svg'
import { DarkContext } from '../context/dark'
import { useContext } from 'react'


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
        <header className="flex flex-col md:w-1/2 text-left">
            <h1 className="text-3xl pl-4 pt-4 pb-1 font-bold ">Gregory Munden</h1>
            <div className=" pl-4 pb-4">
                <h2 className="text-xl font-semibold">Junior Software Developer</h2>
                <p>Slowly getting there...</p>
            </div>
            <ul className='flex justify-around md:justify-start mt-0 mb-4 md:ml-2 '>
                {linkOptions.map(([title, icon, url]) => {
                    
                    return (
                        <li key={title} className='ml-2 mr-2 h-8'>
                            <a href={url} target="_blank" rel="noreferrer noopener" className='md:mr-10'>
                            <img src={icon} className="filter-orange2" alt={`${title} link`} width="30" height="30"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <div className='ml-4 mt-8'>
                <input 
                    type="checkbox" 
                    className=""
                    name="dark-mode-toggle-switch"
                    onClick={toggleDark} 
                />
                <label className="ml-2" htmlFor="dark-mode-toggle-switch">
                    Toggle Dark Mode
                </label>
            </div>
        </header>
    )
}
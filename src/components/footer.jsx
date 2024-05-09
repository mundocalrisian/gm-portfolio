import LightSwitch from './light-switch'
import { DarkContext } from '../context/dark'
import { useContext } from 'react'

export default function Footer () {

    const {dark, setDark} = useContext(DarkContext)
    
    const toggleDark = () => {
        setDark((currDark) => {
                return currDark === 'false' ? 'true' : 'false'
            })
        document.documentElement.classList.toggle("dark");
    }

    return (
        <>
            <div className="mb-4 flex items-center justify-center md:hidden">
                <LightSwitch />
                <p onClick={toggleDark} className="ml-4 text-sm hover:cursor-pointer">Click  {dark === "true" ? "to see the light" : "for some darkness"}</p>
            </div>
        
        <div className="flex flex-col text-center min-w-[375px] md:text-left mb-8">
            <p className="text-sm md:ml-4">
                Built using <a className="font-medium text-zinc-700  dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://react.dev/" target="_blank" rel="noreferrer noopener">React</a>, <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://nodejs.org/en" target="_blank" rel="noreferrer noopener">Node.js</a> and <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>. 
            </p>
            <p  className="text-sm pl-4 pr-4">
                Coded using <a className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener">Visual Studio Code</a> and <br/>deployed with <a  className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://vercel.com/" target="_blank" rel="noreferrer noopener">Vercel</a>.
            </p>
            <p className="text-xs mt-2 md:ml-4">© 2024 Greg Munden. All rights reserved</p>
        </div>
        </>
    )
}
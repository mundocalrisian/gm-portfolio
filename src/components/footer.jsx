import bulb from "../assets/lightbulb.svg"
import { DarkContext } from '../context/dark'
import { useContext } from 'react'
import LightSwitch from "./light-switch"

export default function Footer () {

    const {dark, setDark} = useContext(DarkContext)
    
    const toggleDark = () => {
        setDark((currDark) => {
                return currDark === 'false' ? 'true' : 'false'
            })
        document.documentElement.classList.toggle("dark");
        // console.log(dark, "--dark? in footer");
    }

    return (
        <div className="flex flex-col text-center min-w-[375px] md:text-left mb-8">
            <div className="ml-4 mb-4 w-5/6 hidden md:flex md:flex-col md:justify-start md:items-between">
                <LightSwitch />
            </div>
            <p onClick={toggleDark} className="ml-4 hidden md:block mb-4 text-sm hover:cursor-pointer">Click  {dark === "true" ? "to see the light" : "for some darkness"}</p>
            <p className="text-sm md:ml-4">
                Built using <a className="font-medium text-zinc-700  dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://react.dev/" target="_blank" rel="noreferrer noopener">React</a>, <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://nodejs.org/en" target="_blank" rel="noreferrer noopener">Node.js</a> and <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>. 
            </p>
            <p  className="text-sm pl-4 pr-4">
                Coded using <a className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener">Visual Studio Code</a> <br/>and deployed with <a  className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="" target="_blank" rel="noreferrer noopener">TBC</a>.
            </p>
        </div>
    )
}
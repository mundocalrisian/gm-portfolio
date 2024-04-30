import bulb from "../assets/lightbulb.svg"
import { DarkContext } from '../context/dark'
import { useContext } from 'react'

export default function Footer () {

    const {dark, setDark} = useContext(DarkContext)
    
    const toggleDark = () => {
        setDark((currDark) => {
                return currDark === 'false' ? 'true' : 'false'
            })
        document.documentElement.classList.toggle("dark");
        console.log(dark, "--dark? in footer");
    }

    return (
        <footer className="flex flex-col text-center min-w-[375px] md:text-left md:fixed md:left-0 md:bottom-0 mb-8">
            <div className="ml-8 mb-2 w-5/6 flex flex-end items-center">
                <input 
                    type="checkbox" 
                    className=""
                    name="dark-mode-toggle-switch"
                    id="dark-mode-toggle-switch-footer"
                    onClick={toggleDark} 
                    defaultChecked={true}
                    hidden
                />
                <label className="border-2 rounded-lg border-zinc-800/20 dark:border-orange-50/50 p-2 hover:cursor-pointer hidden md:block" htmlFor="dark-mode-toggle-switch-footer">
                    <img src={bulb} width="30" className={dark !=="true" ? 'filter-zinc': 'filter-orange-50'}/>
                </label>
                
            </div>
            <p onClick={toggleDark} className="ml-0 hidden md:block md:ml-8 mb-4 text-sm hover:cursor-pointer">Click  {dark === "true" ? "to see the light" : "for some darkness"}</p>
            <p className="text-sm md:pl-8">
                Built using <a className="font-medium text-zinc-700  dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://react.dev/" target="_blank" rel="noreferrer noopener">React</a>, <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://nodejs.org/en" target="_blank" rel="noreferrer noopener">Node.js</a> and <a className="font-medium text-zinc-700 hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind CSS</a>. 
            </p>
            <p  className="text-sm pl-8 pr-8">
                Coded using <a className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener">Visual Studio Code</a> <br/>and deployed with <a  className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500" href="" target="_blank" rel="noreferrer noopener">TBC</a>.
            </p>
            <></>
        </footer>
    )
}
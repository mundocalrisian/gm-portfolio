import bulb from "../assets/lightbulb.svg"
import { DarkContext } from '../context/dark'
import { useContext, useId } from 'react'

export default function LightSwitch () {

    const formID = useId()
    const {dark, setDark} = useContext(DarkContext)
    
    const toggleDark = () => {
        setDark((currDark) => {
                return currDark === 'false' ? 'true' : 'false'
            })
        document.documentElement.classList.toggle("dark");
        console.log(dark, "--dark? in footer");
    }

    return (
        <>
            <label className="border-2 rounded-lg border-zinc-800/20 dark:border-orange-50/50 p-2 hover:cursor-pointer w-[35px] md:w-[50px]" htmlFor={formID}>
                    <img src={bulb} alt="bulb icon toggle" className={dark !=="true" ? 'filter-zinc': 'filter-orange-50'}/>
            </label>
            <input 
                type="checkbox" 
                className=""
                name={formID}
                id={formID}
                onClick={toggleDark} 
                defaultChecked={true}
                hidden
            />
            {/* <p onClick={toggleDark} className="ml-4 hidden md:block mb-4 text-sm hover:cursor-pointer">Click  {dark === "true" ? "to see the light" : "for some darkness"}</p> */}
        </>
    )

}
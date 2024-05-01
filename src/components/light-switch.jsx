import bulb from "../assets/lightbulb.svg"
import { DarkContext } from '../context/dark'
import { useContext, useId } from 'react'

export default function LightSwitch () {

    const switchID = useId()
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
            <label className="border-2 rounded-lg border-zinc-800/20 dark:border-orange-50/50 p-2 hover:cursor-pointer w-[35px] md:w-[50px]" htmlFor={switchID}>
                    <img src={bulb} alt="bulb icon toggle" className={dark !=="true" ? 'filter-zinc': 'filter-orange-50'}/>
            </label>
            <input 
                type="checkbox" 
                className=""
                name={switchID}
                id={switchID}
                onClick={toggleDark} 
                defaultChecked={true}
                hidden
            />
        </>
    )
}
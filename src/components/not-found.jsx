import { NavLink } from "react-router-dom";
import whatIsHapenning from "../assets/what-is-happening.gif"

export default function NotFound () {
    return (
        <section className="md:w-3/5 lg:w-2/3  xl:w-[900px] pl-4  lg:pl-0 md:mt-4 border border-slate-400/30 bg-sky-200/10 dark:bg-zinc-900/20 dark:border-zinc-800  rounded-3xl p-2 mb-4">
            <div className="flex flex-col items-center">
                <div className="relative md:mt-16 w-3/4 hidden md:block">
                    <img src={whatIsHapenning} alt="a GIF from the film Everything Everywhere All At Once" className="rounded-lg border border-zinc-200 dark:border-0 w-full"/>
                    <a href="https://tenor.com/en-GB/official/lionsgate" target="_blank" rel="noreferrer noopener" className="text-[6px] text-white absolute bottom-1 right-2" >
                        © Lionsgate
                    </a>
                </div>
                <h2 className="text-xl md:m-8 md:text-3xl">Uh-oh</h2>
                <p className="text-sm md:text-base">It appears you've jumped off the map. <br/>Let's get you back to the correct universe.</p>
                <NavLink to="/">
                    <h2 className="mt-4 mb-6 md:m-8 p-2 border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white w-32">Go home</h2>
                </NavLink>
                <img src={whatIsHapenning} alt="a GIF from the film Everything Everywhere All At Once" className="rounded-lg w-2/3 border border-zinc-200 dark:border-0 inline md:hidden"/>
                <a href="https://tenor.com/en-GB/official/lionsgate" target="_blank" rel="noreferrer noopener" className="text-[8px] inline md:hidden" >
                    © Lionsgate
                </a>
            </div>
        </section>
    )
}

import { NavLink } from "react-router-dom";

export default function Navbar () {

    const navOptions = [
        ["/", "About Me"], 
        ["/projects", "Projects"], 
        ["/gallery", "Gallery"]
    ]

return (
    <ul className="flex items-end bg-zinc-50 dark:bg-zinc-800 min-h-16 min-w-[350px]">
        {navOptions.map(([url, title]) => {
            return (
                <li key={title} className="-mb-px mr-4">
                    <NavLink to={url} className={({ isActive}) =>
                        [ isActive ? 
                            "inline-block border-x border-t bg-zinc-50 dark:bg-zinc-800 border-orange-500 rounded-t-lg py-3 px-4 text-black dark:text-orange-50 font-medium" : 
                            "inline-block py-3 px-4 hover:text-orange-500 text-black dark:text-orange-50 dark:hover:text-orange-500 font-medium",
                        ]
                        } >{title}
                    </NavLink>
                </li>
            )
        })}
    </ul>
)

}
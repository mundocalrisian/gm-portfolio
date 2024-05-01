import { NavLink } from "react-router-dom";

export default function Navbar () {

    const navOptions = [
        ["/", "About Me"], 
        ["/projects", "Projects"], 
        ["/gallery", "Gallery"]
    ]

return (
<nav>
    <ul className="flex justify-end">
        {navOptions.map(([url, title]) => {
            return (
                <li key={title} className="-mb-px mr-1">
            <NavLink to={url} className={({ isActive}) =>
            [
                isActive ? 
                "inline-block border-2 border-orange-500 rounded-md py-2 px-4 text-black dark:text-orange-50 font-medium" : 
                "inline-block py-3 px-4 hover:text-orange-500 text-black dark:text-orange-50 dark:hover:text-orange-500 font-medium",
            ]
        } >{title}</NavLink>
        </li>
            )
        })}
    </ul>
</nav>
)

}
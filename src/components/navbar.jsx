import { NavLink } from "react-router-dom";

export default function Navbar () {

    const navOptions = [
        ["/", "About Me"], 
        ["/projects", "Projects"], 
        ["/contact", "Contact"]
    ]

return (

    <ul className="flex justify-end border-b m-">
        {navOptions.map(([url, title]) => {
            return (
                <li key={title} className="-mb-px mr-1">
            <NavLink to={url} className={({ isActive}) =>
            [
                isActive ? 
                "inline-block border-l border-t border-r border-black rounded-t py-2 px-4 text-orange-600 font-medium" : 
                "inline-block py-2 px-4 text-black hover:text-orange-600 font-medium",
            ]
        } >{title}</NavLink>
        </li>
            )
        })}
    </ul>
)

}
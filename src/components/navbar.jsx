import { Link } from "react-router-dom";

export default function Navbar () {

    const navOptions = [
        ["/", "About Me"], 
        ["/projects", "Projects"], 
        ["/contact", "Contact"]
    ]

return (
    <nav className="flex flex-row justify-end border border-black">
        {
            navOptions.map(([url, title]) => {
                return (
                    <div className="ml-4 p-4 border border-black">
                        <Link to ={url} className="border-0 hover:text-orange-600 font-medium">{title}</Link>
                    </div>
                )
            })
        }
    </nav>
)

}
import mundoNewsFeScreen1 from "../../assets/project-screenshots/MundoNewsFE-1.png"
import mundoNewsFeScreen2 from "../../assets/project-screenshots/MundoNewsFE-2.png"
import reactLogo from "../../assets/tech-stack-logos/react.svg"
import htmlLogo from "../../assets/tech-stack-logos/html-5.svg"
import cssLogo from "../../assets/tech-stack-logos/css-3.svg"
import javascriptLogo from "../../assets/tech-stack-logos/javascript.svg"
import axiosIcon from "../../assets/tech-stack-logos/axios-icon.png"
import netlifyLogo from "../../assets/tech-stack-logos/netlify.svg"

export default function MundoNewsFe () {

    const techStack = [
        ["React ", reactLogo], 
        ["HTML", htmlLogo], 
        ["CSS", cssLogo], 
        ["JavaScript", javascriptLogo], 
        ["Axios", axiosIcon], 
        [ "Netlify", netlifyLogo]
    ]

    return (
        <section className="bg-zinc-200/30 border border-orange-50 hover:border-slate-400 hover:bg-sky-200/10 dark:bg-zinc-900/20 dark:border-zinc-800 dark:hover:border dark:hover:border-gray-700 dark:hover:bg-transparent dark:hover:bg-linear-to-b from-slate-800/50 to-gray-700/30 rounded-3xl mb-6 p-6">
            <h2 className="text-xl font-medium pb-4 dark:text-white">Mundo News - Frontend</h2>
            <p>A CRUD (create, read, update, delete) web application built using React.js. The project was planned and completed within 5 days as part of the frontend review during my Northcoders Bootcamp.
            </p>
            <div className="flex justify-center">
                <a href="https://mundo-news.netlify.app/" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 mr-2 p-2 border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 w-2/5 md:w-1/3 lg:w-1/4">View Site</a>
                <a href="https://github.com/mundocalrisian/fe-mundo-news" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 ml-2 p-2 border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 s:w-2/5 md:w-1/3 lg:w-1/4">View Source </a>
            </div>
            <ul className="flex flex-wrap justify-around mt-4">
                {
                    techStack.map(([tech, url]) => {
                        return (
                        <li key= {tech} className="mt-2 mb-4 mx-1 flex flex-col items-center text-center border rounded-xl border-sky-400/40 bg-sky-300/10 dark:border-sky-900 dark:bg-sky-950">
                            <img src={url} alt={`${tech} logo`}className="h-10 w-10 mt-4"/>
                            <p className="mt-2 mb-2 w-24 text-xs text-center">{tech}</p>
                        </li>
                    )
                    })
                }
            </ul>
            <div className="flex flex-col lg:flex-row lg:justify-around mt-4">
                <img src={mundoNewsFeScreen1}  alt="a screenshot of the articles view"className="p-2 mb-4 border border-zinc-300 bg-white drop-shadow-md md:w-auto lg:w-5/12 lg:mb-0"/>
                <img src={mundoNewsFeScreen2} alt="an individual article with comments" className="p-2 border border-zinc-300 bg-white drop-shadow-md md:w-auto lg:w-5/12 lg:mb-0"/>
            </div>
        </section>

    )
}
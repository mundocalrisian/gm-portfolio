import mundoNewsBeScreen1 from "../../assets/project-screenshots/MundoNewsBE-1.png"
import javascriptLogo from "../../assets/tech-stack-logos/javascript.svg"
import nodeLogo from "../../assets/tech-stack-logos/nodejs-3.svg"
import expressLogo from "../../assets/tech-stack-logos/expressjs-icon.svg"
import postgreSqlLogo from "../../assets/tech-stack-logos/postgresql.svg"
import jestLogo from "../../assets/tech-stack-logos/jest.svg"
import renderLogo from "../../assets/tech-stack-logos/render-b.png"

export default function MundoNewsBe () {

    const techStackOld = ["JavaScript", "Node.js", "Express.js", "PostgreSQL", "Jest", "TDD", "Render"]

    const techStack = [
        ["JavaScript", javascriptLogo], 
        ["Node.js", nodeLogo], 
        ["Express", expressLogo], 
        ["PostgreSQL", postgreSqlLogo], 
        ["Jest", jestLogo], 
        ["Render", renderLogo]
    ]

    return (
        <section className="bg-zinc-200/30 border border-orange-50 hover:border-slate-400 hover:bg-sky-200/10 dark:bg-zinc-900/20 dark:border-zinc-800 dark:hover:border dark:hover:border-gray-700 dark:hover:bg-transparent dark:hover:bg-gradient-to-b from-slate-800/50 to-gray-700/30 rounded-3xl mb-6 p-6">
            <h2 className="text-xl font-medium pb-4 dark:text-white">Mundo News - Backend</h2>
            <p>A RESTful API backend project built using JavaScript and Express.js to interact with a PostgreSQL database. THis project was constructed and tested within 5 days as part of the backend phase of my Northcoders Software Development Bootcamp.
            </p>
            <div className="flex justify-center">
                <a href="https://nc-news-b3bj.onrender.com/api" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 mr-2 p-2 border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 w-2/5 md:w-1/3 lg:w-1/4">View API</a>
                <a href="https://github.com/mundocalrisian/be-nc-news" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 ml-2 p-2 border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 s:w-2/5 md:w-1/3 lg:w-1/4">View Source </a>
            </div>
            <ul className="flex flex-wrap justify-around mt-4">
                {
                    techStack.map(([tech, url]) => {
                        return (
                        <li key= {tech} className="mt-2 mb-4 ml-1 mr-1 flex flex-col items-center text-center border rounded-xl border-sky-400/40 bg-sky-300/10 dark:border-sky-900 dark:bg-sky-950">
                            <img src={url} alt={`${tech} logo`}className="h-10 w-10 mt-4"/>
                            <p className="mt-2 mb-2 w-24 text-xs text-center">{tech}</p>
                        </li>
                    )
                    })
                }
            </ul>
            <div className="flex flex-col lg:flex-row lg:justify-around mt-4">
                <img src={mundoNewsBeScreen1} alt="some available endpoints" className="p-2 mb-4 border border-zinc-300 bg-white drop-shadow-md md:w-auto lg:w-5/12 lg:mb-0"/>
            </div>
        </section>
    )
}
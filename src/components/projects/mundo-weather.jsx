import mundoWeatherScreen1 from "../../assets/project-screenshots/MundoWeather-1.png"
import mundoWeatherScreen2 from "../../assets/project-screenshots/MundoWeather-2.png"
import reactLogo from "../../assets/tech-stack-logos/react.svg"
import htmlLogo from "../../assets/tech-stack-logos/html-5.svg"
import cssLogo from "../../assets/tech-stack-logos/css-3.svg"
import javascriptLogo from "../../assets/tech-stack-logos/javascript.svg"
import axiosIcon from "../../assets/tech-stack-logos/axios-icon.png"
import netlifyLogo from "../../assets/tech-stack-logos/netlify.svg"

export default function MundoWeather () {

    const techStack = [
        ["React ", reactLogo], 
        ["HTML", htmlLogo], 
        ["CSS", cssLogo], 
        ["JavaScript", javascriptLogo], 
        ["Axios", axiosIcon], 
        [ "Netlify", netlifyLogo]
    ]

    return (
        <section className="bg-zinc-200/30 border border-orange-50 hover:border-slate-400 hover:bg-sky-200/10 dark:bg-zinc-900/20 dark:border-zinc-800 dark:hover:border dark:hover:border-gray-700 dark:hover:bg-transparent dark:hover:bg-gradient-to-b from-slate-800/50 to-gray-700/30 rounded-3xl mb-6 p-6">
            <h2 className="text-xl font-medium pb-4 dark:text-white">Mundo Weather</h2>
            <p>My first React web apploication, exploring data visualisation from open-source APIs to show the weather forecast for a chosen location.
            </p>
            <div className="flex justify-center">
                <a href="https://mundo-weather.netlify.app/" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 mr-2 p-2 border-2 rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white w-2/5 md:w-1/3 lg:w-1/4">View Site</a>
                <a href="https://github.com/mundocalrisian/fe-react-data-visualisation" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 ml-2 p-2 border-2 rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 s:w-2/5 md:w-1/3 lg:w-1/4">View Source </a>
            </div>
            <ul className="flex flex-wrap justify-around mt-4">
            {
                    techStack.map(([tech, url]) => {
                        return (
                        <li key= {tech} className="mt-2 mb-4 ml-1 mr-1 flex flex-col items-center text-center border-2 rounded-xl border-sky-400/40 bg-sky-300/10 dark:border-sky-900 dark:bg-sky-950">
                            <img src={url} className="h-10 w-10 mt-4"/>
                            <p className="mt-2 mb-2 w-24 text-xs text-center">{tech}</p>
                        </li>
                    )
                    })
                }
            </ul>
            <div className="flex flex-col lg:flex-row lg:justify-around mt-4">
                <img src={mundoWeatherScreen1} className="p-2 mb-4 border border-zinc-300 bg-white drop-shadow-md md:w-auto lg:w-5/12 lg:mb-0"/>
                <img src={mundoWeatherScreen2} className="p-2 border border-zinc-300 bg-white drop-shadow-md md:w-auto lg:w-5/12 lg:mb-0"/>
            </div>
        </section>

    )
}
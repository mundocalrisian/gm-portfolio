import javascriptLogo from "../assets/tech-stack-logos/javascript.svg"
import htmlLogo from "../assets/tech-stack-logos/html-5.svg"
import cssLogo from "../assets/tech-stack-logos/css-3.svg"
import nodeLogo from "../assets/tech-stack-logos/nodejs-3.svg"
import jestLogo from "../assets/tech-stack-logos/jest.svg"
import npmLogo from "../assets/tech-stack-logos/npm.svg"
import reactLogo from "../assets/tech-stack-logos/react.svg"
import postgreSqlLogo from "../assets/tech-stack-logos/postgresql.svg"
import vsCodeLogo from "../assets/tech-stack-logos/vs-code.svg"
import tailwindLogo from "../assets/tech-stack-logos/tailwindcss.svg"
import gitLogo from "../assets/tech-stack-logos/git.svg"
import salesforceLogo from '../assets/tech-stack-logos/salesforce.svg'
import lwcLogo from '../assets/tech-stack-logos/lwc.svg'

export default function About () {

    const techStack = [
        salesforceLogo,
        javascriptLogo, 
        reactLogo, 
        htmlLogo, 
        cssLogo
    ]
    const techStack2 = [
        gitLogo,
        vsCodeLogo,
        nodeLogo,
        postgreSqlLogo, 
        jestLogo,
    ]

    const techStack3 = [
        npmLogo, 
        tailwindLogo,
        lwcLogo
    ]
    
    return (
        <section className="md:w-3/5 lg:w-2/3  xl:w-[900px] pl-4  lg:pl-0 mt-2 md:mt-4">
            <article className="text-left">
                <h3 className="text-xl font-medium mb-4">Hello there, I'm Greg</h3>
                <p> In April 2024, I graduated from a 3-month bootcamp with <a href="https://northcoders.com/"  target="_blank" rel="noreferrer noopener" className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500">Northcoders</a>, 
                    marking the beginning of a journey to realise a long-term dream of mine to become a Software Developer. 
                    Later that year, it became a reality when I started working for <a href="https://certinia.com/"  target="_blank" rel="noreferrer noopener" className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500">Certinia</a> as an Associate Software Engineer.</p><br/>
                <p>Before this, I had a successful career in retail management, helping customers whilst having the pleasure of working with some of my biggest passions, including music, Apple computers and mountain bikes. It was there that I learnt the problem solving and communication skills that helped me get a footing in the technology industry.</p><br/>
                <p>When not sitting in front of a computer, I'm happiest outdoors, surrounded by epic scenery. I love hiking and mountain biking, and through these activities, I've been lucky to explore some amazing landscapes in countries such as Iceland, Chile and Greenland. 
                    Photography has always fascinated me, and you can see some of my work on this site, as well as the <a href="https://www.tumblr.com/landoficeandrock" target="_blank" rel="noreferrer noopener" >Tumblr blog</a> I wrote whilst living in Iceland.</p><br/>
                <p>If you'd like to know more, please feel free to reach out and contact me.</p>
            </article>
            <div className="flex flex-col lg:mt-8 lg:flex-row ">
                <ul className="mt-8 lg:mb-3 flex justify-around flex-wrap items-center lg:grow">
                    {techStack.map((tech) => {
                        return (
                            <li key={tech} className="relative top-0 hover:-top-2 duration-200 ease-in-out">
                                <img src={tech} alt={`${tech} logo`} width="48" className="mx-1 mt-2 lg:mt-0"/>
                            </li>
                        )
                    })}
                </ul>
                <ul className="mt-4 mb-8 lg:mb-0 flex justify-around flex-wrap items-center lg:grow">
                    {techStack2.map((tech) => {
                        return (
                            <li key={tech} className="relative top-0 hover:-top-2 duration-200 ease-in-out">
                                <img src={tech} alt={`${tech} logo`} width="48" className="mx-1 mt-2 lg:mt-0"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
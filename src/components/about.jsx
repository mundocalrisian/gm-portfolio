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
import expressLogo from "../assets/tech-stack-logos/expressjs-icon.svg"


export default function About () {

    const techStack = [
        javascriptLogo, 
        reactLogo, 
        htmlLogo, 
        cssLogo, 
        nodeLogo, 
        npmLogo, 
        vsCodeLogo,
        jestLogo,
        postgreSqlLogo, 
        tailwindLogo, 
    ]
    
    return (
        <section className="md:w-3/5 lg:w-4/5  xl:w-[900px] sm:mt-0 md:mt-4">
            {/* <h2 className="font-medium mb-4 sm:block md:hidden"> About me</h2> */}
            <h3 className="text-xl font-medium mb-4">Hello there, I'm Greg</h3>
            <p> Recently, I've graduated from a 3 month Bootcamp with <a href="https://northcoders.com/"  target="_blank" rel="noreferrer noopener" className="font-medium text-zinc-700 dark:text-orange-200 hover:text-orange-500 dark:hover:text-orange-500">Northcoders</a>, marking the beginning of a journey to realise a long term dream of mine to become a <span className="font-medium text-zinc-700 dark:text-sky-200">Software Developer</span>.</p><br/>
            <p>I have transitioned from a successful career in retail, helping customers and working with some of my biggest passions, including music, Apple computers and mountain bikes. And so, it is with these communication skills that I'm excited to start a new journey into the technology industry.</p><br/>
            <p>When not sitting in front of a computer, I'm happiest outdoors, surrounded by epic scenery. I love hiking and mountain biking, and through these, I've been lucky to explore some amazing landscapes in countries such as Iceland, Chile and Greenland. Photography has always fascinated me, and you can see some of mine here on this site, as well as the Tumblr blog I wrote whilst living in Iceland.</p><br/>
            <p>If you'd like to know more, please feel free to reach out and contact me.</p>
            <ul className="mt-24 flex justify-around flex-wrap items-center">
                {techStack.map((tech) => {
                    return (
                        <li key={tech} className="relative top-0 hover:-top-2 duration-200 ease-in-out">
                            <img src={tech} width="50" className="ml-1 mr-1 mt-2 lg:mt-0"/>
                        </li>

                    )
                })}
                {/* <li>
                    <img src={expressLogo} className="dark:filter-white"/>
                </li> */}
            </ul>
        </section>
    )
}
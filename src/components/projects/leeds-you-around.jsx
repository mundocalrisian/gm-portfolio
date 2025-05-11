import lyaScreen1 from "../../assets/project-screenshots/LYA-Screen-1.png"
import lyaScreen2 from "../../assets/project-screenshots/LYA-Screen-2.png"
import lyaScreen3 from "../../assets/project-screenshots/LYA-Screen-3.png"
import lyaScreen4 from "../../assets/project-screenshots/LYA-Screen-4.png"
import reactNativeLogo from "../../assets/tech-stack-logos/react-native.svg"
import expoLogo from "../../assets/tech-stack-logos/expo.svg"
import firebaseLogo from "../../assets/tech-stack-logos/firebase.svg"
import javascriptLogo from "../../assets/tech-stack-logos/javascript.svg"
import jiraLogo from "../../assets/tech-stack-logos/jira.svg"
import visionLogo from "../../assets/tech-stack-logos/google-vision-api.svg"

export default function LeedsYouAround () {

    const techStack = [
        ["React Native", reactNativeLogo], 
        ["Expo", expoLogo], 
        ["Firebase", firebaseLogo], 
        ["GoogleVision", visionLogo], 
        ["JavaScript", javascriptLogo], 
        [ "Jira", jiraLogo]
    ]

    return (
        <section className="bg-zinc-200/30 border border-orange-50 hover:border-slate-400 hover:bg-sky-200/10 dark:bg-zinc-900/20 dark:border-zinc-800 dark:hover:border dark:hover:border-gray-700 dark:hover:bg-transparent dark:hover:bg-linear-to-b from-slate-800/50 to-gray-700/30 rounded-3xl mb-6 p-6">
            <h2 className=" lg:sticky top:24 z-20 text-xl font-medium pb-4 dark:text-white">LeedsYouAround</h2>
            <p>My time at Northcoders culminated with this team project which spanned just over 2 weeks. LeedsYouAround is a mobile landmark based scavenger hunt app set in the Leeds area. It requires the player to reach the sights using the integrated map and snap a picture which will validate and tick them off. It was developed using React Native and Expo along with Firebase and GoogleVision. Project management was handled using Jira, which our team name was derived from.
            </p>
            <div className="flex justify-center ">
                <a href="https://northcoders.com/project-phase/leedsyouaround" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 mr-2 p-2  border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 w-2/5 md:w-1/3 lg:w-1/4">Project Page</a>
                <a href="https://github.com/EpicIssues/Leeds-You-Around" target="_blank" rel="noreferrer noopener" className="mt-4 mb-2 ml-2 p-2 content-center border  rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white xs:w-1/2 s:w-2/5 md:w-1/3 lg:w-1/4">View Source </a>
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
            <div className="flex flex-row flex-wrap justify-around mt-4">
                <img src={lyaScreen1} alt="the map view in the app" className="p-2 mb-2 border rounded-xl border-zinc-300 bg-white drop-shadow-md w-2/5 lg:w-1/5 lg:mb-0"/>
                <img src={lyaScreen2} alt="the app camera in action" className="p-2 mb-2 border rounded-xl border-zinc-300 bg-white drop-shadow-md w-2/5 lg:w-1/5 lg:mb-0"/>
                <img src={lyaScreen3} alt="the camera view in the app" className="p-2 mb-2 border rounded-xl border-zinc-300 bg-white drop-shadow-md w-2/5 lg:w-1/5 lg:mb-0"/>
                <img src={lyaScreen4}  alt="the completion screen" className="p-2 mb-2 border rounded-xl border-zinc-300 bg-white drop-shadow-md w-2/5 lg:w-1/5 lg:mb-0"/>
            </div>
            {/* <div className="flex justify-center mt-8">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6Lrk8orXr8o?si=Km6ZEXw69BzwQ5Ho" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
        </section>

    )
}
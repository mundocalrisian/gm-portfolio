import { NavLink } from "react-router-dom";
import whatIsHapenning from "../assets/what-is-happening.gif"

export default function NotFound () {
    return (
        <section className="md:w-3/5 lg:w-2/3  xl:w-[900px] pl-4  lg:pl-0 md:mt-4">
            <div className="flex flex-col items-center">
                <img src={whatIsHapenning} alt="a GIF from the film Everything Everywhere All At Once" className="md:mt-16 rounded-lg w-2/3 border border-zinc-200 dark:border-0 hidden md:inline"/>
                <a href="https://tenor.com/en-GB/official/lionsgate" target="_blank" rel="noreferrer noopener" className="text-[0.5rem] hidden md:inline" >
                    © Lionsgate
                </a>
                <h2 className="text-xl md:m-8 md:text-3xl">Uh-oh.</h2>
                <p className="text-sm">It appears you've jumped off the map. <br/>Let's get you back to the correct universe.</p>
                <NavLink to="/">
                    <h2 className="mt-4 mb-8 md:m-8 p-2 border rounded-lg bg-orange-200/50 dark:bg-transparent border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white w-32">Go home</h2>
                </NavLink>
                <img src={whatIsHapenning} alt="a GIF from the film Everything Everywhere All At Once" className="rounded-lg w-2/3 border border-zinc-800 inline md:hidden"/>
                <a href="https://tenor.com/en-GB/official/lionsgate" target="_blank" rel="noreferrer noopener" className="text-[0.5rem] inline md:hidden mb-4 " >
                    © Lionsgate
                </a>
            </div>
            {/* <div class="tenor-gif-embed" data-postid="25791504" data-share-method="host" data-aspect-ratio="1.78771" data-width="100%"><a href="https://tenor.com/view/what-is-happening-evelyn-wang-michelle-yeoh-everything-everywhere-all-at-once-confused-gif-25791504">What Is Happening Evelyn Wang GIF</a>from <a href="https://tenor.com/search/what+is+happening-gifs">What Is Happening GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
        </section>
    )
}

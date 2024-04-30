import LeedsYouAround from "./projects/leeds-you-around";
import MundoNewsBe from "./projects/mundo-news-be";
import MundoNewsFe from "./projects/mundo-news-fe";
import MundoWeather from "./projects/mundo-weather";

export default function Projects () {

    return (
        <section className="md:w-3/5 lg:w-2/3  xl:w-[900px] sm:mt-0 md:mt-4">
            <div className="md:mt-4 md:w-400 ">
                <LeedsYouAround />
                <MundoNewsFe />
                <MundoNewsBe />
                <MundoWeather />
            </div>
        </section>
    )

}
import LeedsYouAround from "./projects/leeds-you-around";
import MundoNewsBe from "./projects/mundo-news-be";
import MundoNewsFe from "./projects/mundo-news-fe";
import MundoWeather from "./projects/mundo-weather";

export default function Projects () {

    return (
        <section className="md:w-[350px] lg:w-[600px]  xl:w-[900px] sm:mt-0 md:mt-4">
            <div className="md:mt-4 md:w-400">
            <h2 className="font-medium mb-4 sm:block md:hidden">My projects</h2>
            <LeedsYouAround />
            <MundoNewsFe />
            <MundoNewsBe />
            <MundoWeather />
            </div>
        </section>
    )

}
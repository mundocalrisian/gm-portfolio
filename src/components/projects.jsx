import LeedsYouAround from "./projects/leeds-you-around";
import MundoNewsBe from "./projects/mundo-news-be";
import MundoNewsFe from "./projects/mundo-news-fe";
import MundoWeather from "./projects/mundo-weather";
import PokemonBattler from "./projects/pokemon-battler";
import Portfolio from "./projects/portfolio";


export default function Projects () {

    return (
        <section className="md:w-3/5 lg:w-2/3  xl:w-[900px] sm:mt-0 md:mt-4 md:pl-4 lg:pl-0">
            <div>
                <Portfolio />
                <LeedsYouAround />
                <MundoNewsFe />
                <MundoNewsBe />
                <MundoWeather />
                <PokemonBattler />
            </div>
        </section>
    )

}
import image1 from "../assets/gallery/IMG_0269.jpg"
import image2 from "../assets/gallery/IMG_3451.jpg"

export default function Gallery () {

    return (
        <section className="mb-8 md:w-3/5 lg:w-2/3  xl:w-[900px] pl-4  lg:pl-0 sm:mt-0 md:mt-4">
            {/* <p className="text-center" >Here are a few of my favourite images that I've taken on my adventures</p> */}
            <div className="flex xl:flex-row flex-wrap justify-around md:mt-4">
                <img src={image1} alt="a frosty still day besides a lake" className="xl:max-w-96 p-3 border bg-zinc-50 shadow-lg mt-2"/>
                <img src={image2} alt="a sunset looking down a valley" className="xl:max-w-96 p-3 border bg-zinc-50 shadow-lg mt-4"/>
                
            </div>
        </section>
    )

}
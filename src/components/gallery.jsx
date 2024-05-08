import { useEffect, useState } from "react"
import { getAllImages } from "../utils/api"
import imageData from "../assets/images.json"
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";


export default function Gallery () {
    const [imageList, setImageList] = useState(imageData.resources)
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        // const fetchImages = async () => {
        //     const allImages = await getAllImages()
        //     setImageList(allImages.resources)
        //     // console.log(allImages, "-----allImages in useEffect");
        // }
        // fetchImages()
    }, [])

    const slides = imageData.resources.map((image) => {
        return (
            {src: image.url, width: image.width, height: image.height}
        )
    })

    return (
        <section className="mb-8 md:w-3/5 lg:w-2/3  xl:w-[900px] pl-4  lg:pl-0 sm:mt-0 md:mt-4">
            {/* <p className="text-center" >Here are a few of my favourite images that I've taken on my adventures</p> */}
            {/* <div className="flex xl:flex-row flex-wrap justify-around md:mt-4">
                <img src={image1} alt="a frosty still day besides a lake" className="xl:max-w-96 p-3 border bg-zinc-50 shadow-lg mt-2"/>
                <img src={image2} alt="a sunset looking down a valley" className="xl:max-w-96 p-3 border bg-zinc-50 shadow-lg mt-4"/>
                
            </div> */}
            <div>
                <PhotoAlbum 
                    layout="rows" 
                    photos={slides}
                    targetRowHeight={200}
                    onClick={({index: current}) => setIndex(current)}
                />
            </div>

            <Lightbox 
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </section>
    )

}
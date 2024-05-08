import { useEffect, useState } from "react"
// import { getAllImages } from "../utils/api"
import imageData from "../assets/images.json"
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";
import CloudImage from "../utils/api";
import { shuffle } from "../utils/utils";


export default function Gallery () {
    const [imageList, setImageList] = useState(imageData.resources)
    const [index, setIndex] = useState(-1)
    const [slides, setSlides] = useState([])

    useEffect(() => {
        const portfolioImages = imageData.resources.reduce((images, image) => {
            if (image.folder.includes('portfolio')) {
                images.push(image)
            }
            return images
        }, [])
        // console.log(portfolioImages, "-----portfolioImages");
        shuffle(portfolioImages)
        
        const slidesToSet = portfolioImages.map((image) => {
                return (
                    {src: image.url, width: image.width, height: image.height}
                )
        })
        setSlides(slidesToSet)
    }, [])

    return (
        <section className="mb-8 md:w-3/5 lg:w-2/3  xl:w-[900px] pl-4  lg:pl-0 sm:mt-0 md:mt-4">
            <div className="p-4">
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
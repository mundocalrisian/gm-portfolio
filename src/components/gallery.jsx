import { useEffect, useState } from "react"
// import { getAllImages } from "../utils/api"
import imageData from "../assets/image-data.json"
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

        setImageList(portfolioImages)
        shuffle(portfolioImages)
        
        const slidesToSet = portfolioImages.map((image) => {
            return (
                {src: image.url, width: image.width, height: image.height}
            )
        })
        setSlides(slidesToSet)
    }, [])

    return (
        <section className="mb-8 md:w-3/5 lg:w-2/3  xl:w-[900px] 2xl:w-[1150px] pl-4  lg:pl-0 sm:mt-0 md:mt-4">
            <div className="flex flex-col md:flex-row justify-center mb-4 md:mb-0">
                <p className="text-xs">&nbsp;Images copyright © 2008-2024 Greg Munden.&nbsp;</p>
                <p className="text-xs "> All rights reserved</p>
            </div>
            <div className="md:p-4">
                <PhotoAlbum 
                    layout="rows" 
                    photos={slides}
                    // targetRowHeight={200}
                    targetRowHeight={(containerWidth) => {
                        if (containerWidth < 380) return 100
                        if (containerWidth < 600) return 150
                        if (containerWidth < 920) return 225
                        return 275
                    }}
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
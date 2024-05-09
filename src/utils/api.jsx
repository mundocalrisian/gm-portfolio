import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUD_NAME
    }
})

export default function CloudImage () {

    return (
        <>
            <AdvancedImage cldImg={cld.image("portfolio/vk4jpexo1z0i0knrmuvh")} />
        </>
    )

}


// const BASE_URL = import.meta.env.VITE_BASE_URL
// const maxImages = 100

// const auth = {
//     username: import.meta.env.VITE_API_KEY,
//     password: import.meta.env.VITE_API_SECRET,
// }

// const instance = axios.create()

// const data = new FormData()
// data.append


// export function getAllImages() {

//     return axios.get(`${BASE_URL}?max_results=${maxImages}`, auth)
//     .then((results) => {
//         console.log(results.data, "-----axios results");
//         return results.data
//     })
//     .catch((err) => {
//         console.log("API error getting images:", err);
//     })
// }
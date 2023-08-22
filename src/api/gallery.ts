import { GalleryImage } from "../types";
import axios from "axios"

const UNSPLASH_API_KEY = "mapcvKFzXNAkv5qOqBrCuAxiiAH8eIUpLfk-upqBIaQ"
const BASE_URL = `https://api.unsplash.com/photos?client_id=${UNSPLASH_API_KEY}`

export const fetchGalleryImages = () => axios.get<GalleryImage[]>(BASE_URL).then(r => r.data)

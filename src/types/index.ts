export interface GalleryImage {
    id: string
    urls: {
        small: string
        regular: string
    }
    user: {
        name: string
        total_photos: number,
    }
    description: string
    likes: number
}

import { FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_ERROR, FETCH_PHOTOS_SUCCESS } from './constants';
import { GalleryImage } from "../../types";

export const fetchPhotosRequest = () => ({
    type: FETCH_PHOTOS_REQUEST,
});

export const fetchPhotosSuccess = (photos: GalleryImage[]) => ({
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos,
});

export const fetchPhotosError = (errorMsg: string) => ({
    type: FETCH_PHOTOS_ERROR,
    payload: errorMsg,
});

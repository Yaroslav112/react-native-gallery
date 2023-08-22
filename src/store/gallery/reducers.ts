import { FETCH_PHOTOS_ERROR, FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS} from './constants';
import { GalleryImage } from "../../types";

export interface State {
    photos: GalleryImage[]
    isLoading: Boolean
    errorMessage: null | string
}

const initialState: State = {
    photos: [],
    isLoading: false,
    errorMessage: null
};

const rootReducer = (state: State = initialState, action: any): State => {
    switch (action.type) {
        case FETCH_PHOTOS_REQUEST:
            return { ...state, isLoading: true }
        case FETCH_PHOTOS_SUCCESS:
            return { ...state, isLoading: false, photos: action.payload };
        case FETCH_PHOTOS_ERROR:
            return { ...state, isLoading: false, errorMessage: action.payload };
        default:
            return state;
    }
};

export default rootReducer;

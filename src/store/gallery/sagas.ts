import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_PHOTOS_REQUEST } from './constants';
import { fetchPhotosError, fetchPhotosSuccess } from './actions';
import { GalleryImage } from "../../types"
import { fetchGalleryImages } from "../../api/gallery";

function* fetchPhotos() {
    try {
        const data: GalleryImage[] = yield call(fetchGalleryImages);
        yield put(fetchPhotosSuccess(data));
    } catch (error) {
        yield put(fetchPhotosError(`Something went wrong`));
    }
}

export function* watchFetchPhotos() {
    yield takeLatest(FETCH_PHOTOS_REQUEST, fetchPhotos);
}

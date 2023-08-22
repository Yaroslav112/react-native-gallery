import { all } from "redux-saga/effects";
import { watchFetchPhotos } from "./gallery/sagas";

export default function* rootSaga() {
    yield all([watchFetchPhotos()]);
}

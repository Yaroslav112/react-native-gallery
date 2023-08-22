import { State } from "./reducers";

export const selectPhotos = (state: State) => state.photos;
export const selectIsLoading = (state: State) => state.isLoading;
export const selectErrorMessage = (state: State) => state.errorMessage;

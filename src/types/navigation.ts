import { GalleryImage } from "./index";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Photo: {
        photo: GalleryImage
    }
    PhotoList: undefined
};

export type ScreenProps<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, RouteName>


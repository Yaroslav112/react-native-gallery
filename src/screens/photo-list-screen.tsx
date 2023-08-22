import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotosRequest } from '../store/gallery/actions';
import { selectErrorMessage, selectIsLoading, selectPhotos } from '../store/gallery/selectors';
import { colors } from "../constants/ui";
import { GalleryImage } from "../types";
import { ScreenProps} from "../types/navigation";

interface RenderItemProps {
    item: GalleryImage
}

const keyExtractor = (item: GalleryImage) => item.id;

const PhotoListScreen: React.FC<ScreenProps<'PhotoList'>> = ({ navigation }) => {
    const dispatch = useDispatch();
    const photos = useSelector(selectPhotos);
    const isLoading = useSelector(selectIsLoading);
    const errorMessage = useSelector(selectErrorMessage);

    useEffect(() => {
        dispatch(fetchPhotosRequest());
    }, []);

    const renderItem = ({ item }: RenderItemProps) => (
        <TouchableOpacity onPress={() => navigation.navigate('Photo', { photo: item })}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.urls.small }} style={styles.imagePreview} />
                <View style={styles.textContainer}>
                    {/* added additional information about likes and number of photos */}
                    <Text style={styles.userName}>User name: {item?.user?.name}</Text>
                    <Text>Total photos amount: {item?.user.total_photos}</Text>
                    <Text>Likes: {item?.likes}</Text>
                    <Text style={styles.text}>{item?.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    if(errorMessage) {
        return (
            <View style={styles.errorMsgContainer}>
                <Text style={styles.errorMsgText}>{errorMessage}</Text>
            </View>
        )
    }

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator style={styles.loadingIndicator} size="large" color={colors.black} />
            ) : (
                <FlatList
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.black
    },
    imagePreview: {
        width: 150,
        height: 150
    },
    textContainer: {
        display: "flex",
        flexDirection: "column",
        paddingLeft: 10,
    },
    text: {
        maxWidth: '80%',
        paddingRight: 15,
    },
    errorMsgContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    errorMsgText: {
        color: colors.red,
    },
    userName: {
        maxWidth: '95%',
    },
    loadingIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
});

export default PhotoListScreen;

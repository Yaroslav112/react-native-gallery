import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ScreenProps } from "../types/navigation";

const PhotoScreen: React.FC<ScreenProps<'Photo'>> = ({ route }) => {
    const { photo } = route.params;

    return (
        <View style={styles.imageContainer}>
            <Image source={{ uri: photo.urls.regular }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default PhotoScreen;

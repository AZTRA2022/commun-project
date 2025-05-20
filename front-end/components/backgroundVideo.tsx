import React from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

export const VideoBackground = ({ source }: { source: any }) => {
    return (
        <Video
            resizeMode="cover"
            muted={true}
            repeat
            source={source}
            style={styles.backgroundVideo}
        />
    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
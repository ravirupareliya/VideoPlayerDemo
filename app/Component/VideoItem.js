

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CachedImage } from 'react-native-cached-image'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from 'react-native-video'

import styles from './Styles/VideoItemStyles'
import { Colors } from '../Themes';

export default class VideoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, onPress } = this.props
        return (
            <TouchableOpacity style={styles.listItem} onPress={onPress}>
                <View style={styles.listItemInnerView}>

                    <Text numberOfLines={1} style={styles.listText}>{data.title}</Text>
                    <View style={styles.listImageView}>
                        <CachedImage style={styles.listImage} source={{ uri: data.thumbnail_url }} />
                        <View style={styles.playIcon}>
                            <Icon name="play-circle" size={50} color={Colors.red} style={styles.playIconButton} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
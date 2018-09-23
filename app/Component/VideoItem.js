import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { CachedImage } from 'react-native-cached-image'
import Icon from 'react-native-vector-icons/FontAwesome'
import Video from 'react-native-video'

import styles from './Styles/VideoItemStyles'
import { Colors, Metrics } from '../Themes';

export default class VideoItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, onPress,onShare } = this.props
        return (
            <View style={styles.listItem} >
                <View style={styles.listItemInnerView}>
                    <Text numberOfLines={1} style={styles.listText}>{data.title}</Text>
                    <TouchableOpacity style={styles.listImageView} onPress={onPress}>
                        <CachedImage style={styles.listImage} source={{ uri: data.thumbnail_url }} />
                        <View style={styles.playIcon}>
                            <Icon name="play-circle" size={50} color={Colors.red} style={styles.playIconButton} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
                        <Icon name={'whatsapp'} size={35} style={styles.shareIcon} onPress={onShare} />
                        <Icon name={'heart'} size={35} style={styles.likeIcon} />
                    </View>
                </View>
            </View>
        );
    }
}
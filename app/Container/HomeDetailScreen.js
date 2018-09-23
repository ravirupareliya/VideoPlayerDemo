
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, BackHandler } from 'react-native';
import VideoPlayer from 'react-native-video-controls'
import Orientation from 'react-native-orientation';

import styles from './Styles/HomeScreenStyles'

class HomeDetailScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.goBack()
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
        Orientation.lockToPortrait()
    }

    render() {

        const { data } = this.props
        return (
            <View style={styles.mainContainer}>
                <VideoPlayer source={{ uri: data[this.props.navigation.state.params.index].video_url }}   // Can be a URL or a local file.
                    navigator={this.props.navigation}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    onLoadStart={() => {
                        Orientation.lockToLandscape();
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.homeReducer.isLoading,
    error: state.homeReducer.error,
    data: state.homeReducer.data
});

const mapDispatchToProps = (dispatch) => ({
    //fetchVideos: () => dispatch(fetchVideos())
})
export default HomeDetailScreen = connect(mapStateToProps, mapDispatchToProps)(HomeDetailScreen);
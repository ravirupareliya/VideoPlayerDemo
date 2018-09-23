
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, ActivityIndicator, FlatList,Linking } from 'react-native';
import { fetchVideos } from '../Redux/HomeDataRedux'
import VideoItem from '../Component/VideoItem'

import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state={
            videoList:[]
        }
    }
    componentDidMount() {
        this.props.fetchVideos()
    }

    componentWillReceiveProps(props){
        if(!props.isLoading && !props.error)
        {
            this.setState({videoList:props.data})
        }
    }

    handleLoadMore=()=>{
        this.setState({
            videoList:[...this.state.videoList,...this.props.data]
        })
    }

    shareItem(item){
        var text= "Checkout this video " + item.video_url
        Linking.openURL(`whatsapp://send?text=${text}`);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.props.isLoading ? <View style={styles.loaderView}><ActivityIndicator /></View> :
                    <View>
                        <FlatList data={this.state.videoList}
                            extraData={this.state}
                            renderItem={({ item, index }) =>
                                <VideoItem data={item}
                                    onPress={() => this.props.navigation.navigate('HomeDetailScreen',{index:index})}
                                    onShare={()=>this.shareItem(item)}
                                />
                            }
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={3}
                        />
                    </View>
                }
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
    fetchVideos: () => dispatch(fetchVideos())
})
export default HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
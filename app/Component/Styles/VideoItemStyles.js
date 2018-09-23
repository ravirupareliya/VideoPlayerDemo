import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
    ...ApplicationStyles.screen,

    listItem: {
        height: Metrics.screenHeight / 3,
        margin: Metrics.baseMargin,
    },
    listText: {
        color: Colors.black,
        fontSize: 20,
        padding: Metrics.baseMargin / 2,
    },
    listItemInnerView: {
        width: '100%',
        height: '100%'
    },
    listImageView: {
        flex: 1,
    },
    listImage: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: Colors.lightGrey
    },
    playIcon: {
        position: 'absolute',
        alignSelf: 'center',
        top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    playIconButton: {
        opacity: 0.5
    }
})
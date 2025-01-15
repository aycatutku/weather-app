import {StyleSheet} from "react-native";
import {moderateVerticalScale} from "./scaling";

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexCol: {
        flexDirection: 'column'
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifySpaceBet: {
        justifyContent: 'space-between',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifySpaceAround: {
        justifyContent: 'space-around',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    alignSelfEnd: {
        alignSelf: 'flex-end'
    },
    alignSelfStart: {
        alignSelf: 'flex-start',
    },
    alignItemsStart: {
        alignItems: 'flex-start'
    },
    mv10: {
        marginVertical: 10,
    },
    mv20: {
        marginVertical: 20,
    },
    mh5: {
        marginHorizontal: 5,
    },
    mh10: {
        marginHorizontal: 10,
    },
    mh20: {
        marginHorizontal: 20
    },
    m20: {
        margin: 20
    },
    m24: {
        margin: 24,
    },
    p24: {
        padding: 24
    },
    radius10: {
        borderRadius: 10,
    },
    radius16: {
        borderRadius: 16,
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    padding16: {
        padding: 16
    },
    padding12: {
        padding: 12
    },
    padding8: {
        padding: 8
    },
    padding6: {
        padding: 6
    },
    ph10: {
        paddingHorizontal: 10
    },
    ph12: {
        paddingHorizontal: 12
    },
    ph15: {
        paddingHorizontal: 15
    },
    ph16: {
        paddingHorizontal: 16
    },
    ph20: {
        paddingHorizontal: 20
    },
    ph24: {
        paddingHorizontal: 24,
    },
    ph36: {
        paddingHorizontal: 36,
    },
    paddingBottom80: {
        paddingBottom: '80%'
    },
    paddingBottom50: {
        paddingBottom: '50%'
    },
    paddingBottom20: {
        paddingBottom: '20%'
    },
    marginRightAuto: {
        marginRight: 'auto'
    },
    marginLeftAuto: {
        marginLeft: 'auto'
    },
    marginTopAuto: {
        marginTop: 'auto'
    },
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalTextViewStyle: {
        alignSelf: 'center',
        marginVertical: moderateVerticalScale(24, 0.2)
    },
    modalMessageStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        paddingHorizontal: 24,
        maxHeight: '100%'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "contain",
    },
    overlay: {
        width: 84,
        height: 3,
        borderRadius: 10,
        alignSelf: "center",
        top: 16,
    },
});

export const {
    flex1,
    flexRow,
    flexCol,
    justifyCenter,
    justifySpaceBet,
    justifyStart,
    justifySpaceAround,
    alignCenter,
    alignItemsStart,
    alignSelfCenter,
    alignSelfEnd,
    alignSelfStart,
    mv10,
    mv20,
    mh5,
    mh10,
    mh20,
    m20,
    textAlignCenter,
    textAlignLeft,
    textAlignRight,
    padding16,
    padding12,
    padding8,
    padding6,
    ph10,
    ph12,
    ph16,
    ph15,
    ph20,
    ph24,
    ph36,
    backgroundColorWhite,
    paddingBottom80,
    paddingBottom50,
    paddingBottom20,
    m24,
    p24,
    modalTextViewStyle,
    modalMessageStyle,
    imageStyle,
    modalStyle,
    marginRightAuto,
    marginLeftAuto,
    marginTopAuto,
    overlay
} = styles;

import React, {useContext} from "react";
import {View, StyleSheet, Platform} from "react-native";
import {DeviceWidth} from "../constants/device";
import {alignSelfCenter, justifyCenter} from "../constants/globalStyles";
import {ThemeContext} from "../context/ThemeContext";

function CustomTabBarContent({navigation,state}){

    const { theme } = useContext(ThemeContext);

    return(
        <View style={[justifyCenter,alignSelfCenter,{backgroundColor:theme.backgroundColor}]}>
            <View style={[styles.tabBarOuterView, {backgroundColor:theme.primaryColor}]}>
                <View style={styles.tabBarInnerView}>
                    <View style={styles.screenIconsView}>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CustomTabBarContent;

const styles = StyleSheet.create({
    tabBarOuterView:{
        height:70,
        width:DeviceWidth,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        shadowColor:'#000',
        elevation:4,
        shadowRadius:30,
        shadowOpacity:0.1,
    },
    tabBarInnerView:{
        height:70,
        width:DeviceWidth*.99,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        top:4,
    },
    screenIconsView:{
        flexDirection:'row',
        marginHorizontal:20,
        justifyContent:'space-between',
        padding:15,
        bottom:Platform.OS==='android'?0:7,
    }
})

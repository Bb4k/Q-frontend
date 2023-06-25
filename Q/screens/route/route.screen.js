import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from "react-native";
import { AppContext } from "../../context/app.context";
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Route({ navigation }) {
    const { primaryColor, secondaryColor, thirdColor, deviceH, deviceW } = useContext(AppContext);
    const [visibleModal, setVisibleModal] = useState(true)
    const styles = StyleSheet.create({
        canvas: {
            flex: 1,
            backgroundColor: primaryColor,
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
    });

    const images = [{
        // url: 'https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73',
        props: {
            // height: 1000,
            // width: '1000',
            source: require('../../assets/harta.jpeg')
        }
    }];

    //    var base64Icon = 'data:image/png;base64,' + imgTest

    return (
        <View style={styles.canvas}>
            <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={() => {
                    setVisibleModal(!visibleModal);
                }}>

                <ImageViewer imageUrls={images} renderIndicator={() => { }} />
                <TouchableOpacity
                    style={[styles.button, styles.buttonClose, { borderRadius: 50, position: 'absolute', top: deviceW * 0.05, left: deviceW * 0.05, backgroundColor: thirdColor }]}
                    onPress={() => { setVisibleModal(!visibleModal), navigation.navigate('Cart') }}
                >
                    <Image source={require('../../assets/back-button.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </Modal>
        </View>
    );
}
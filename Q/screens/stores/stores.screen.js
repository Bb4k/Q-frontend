import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Linking, FlatList, TouchableOpacity } from "react-native";
import { AppContext } from "../../context/app.context";
import { createOpenLink } from 'react-native-open-maps';

export default function Stores({ navigation }) {
    const { primaryColor, secondaryColor, thirdColor, deviceW, setSelectedMarket } = useContext(AppContext);

    const product1 = {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png",
        total: 524.12,
        busy: [2, 20, 25],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product2 = {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png",
        total: 324.12,
        busy: [1, 30, 35],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product3 = {
        id: 3,
        image: "https://ami.cname.ro/300_/patron-member/mediaPool/usAIuWo.jpg",
        total: 524.12,
        busy: [0, 30, 35],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product4 = {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png",
        name: "Lapte Olympus",
        total: 524.12,
        busy: [1, 30, 35],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product5 = {
        id: 5,
        image: "https://ami.cname.ro/300_/patron-member/mediaPool/usAIuWo.jpg",
        name: "Lapte Olympus",
        total: 524.12,
        busy: [1, 10, 15],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product6 = {
        id: 6,
        image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
        name: "Lapte Olympus",
        total: 524.12,
        busy: [0, 10, 15],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product7 = {
        id: 7,
        image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
        name: "Lapte Olympus",
        total: 524.12,
        busy: [0, 30, 35],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti"
    }
    const product8 = {
        id: 8,
        image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
        name: "Lapte Olympus",
        total: 524.12,
        busy: [2, 30, 35],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti",
    }
    const product9 = {
        id: 9,
        image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
        name: "Lapte Olympus",
        total: 524.12,
        busy: [2, 30, 35],
        lat: 44.444576,
        lon: 26.063038,
        address: "Str. Splaiul Independentei 313A, Bucuresti",
    }

    const busyness = ['https://i.ibb.co/RD0hD2W/liber.png', 'https://i.ibb.co/ck80yHt/mediu.png', 'https://i.ibb.co/zHV9Kqx/full.png']
    const [stores, setStores] = useState([product1, product2, product3, product4, product5, product6, product7, product8, product9]);

    const styles = StyleSheet.create({
        canvas: {
            backgroundColor: primaryColor,
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        headerContainer: {
            // marginHorizontall: deviceW * 0.05,
            width: '100%',
            height: 65,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        marketLogo: {
            width: 130,
            height: 50,
        },
        storesListContainer: {
            paddingHorizontal: deviceW * 0.05,
            width: '100%',
            flex: 1,
            alignItems: 'center',
            marginTop: deviceW * 0.05,
        },
        storeContainerStyle: {
            width: '100%',
            flex: 0,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            marginBottom: 7,
            padding: 13,
            alignItems: "center",
            justifyContent: 'space-between'
        },
        pinContainer: {
            flexDirection: 'column',
            maxHeight: 90,
            flex: 0,
            justifyContent: 'space-between',
        },
        pinStyle: {
            width: 27,
            height: 27
        },
        pinButton: {
            padding: 10,
            backgroundColor: secondaryColor,
            borderRadius: 10
        }
    });

    const renderStore = (store, index) => (
        <TouchableOpacity
            key={store.id}
            activeOpacity={0.9}
            onPress={() => {
                setSelectedMarket(store)
                navigation.navigate('Cart')
            }}
            style={styles.storeContainerStyle}>
            <View style={{ flexDirection: 'column' }}>
                <Image source={{ uri: store.image }} style={styles.marketLogo} resizeMode='contain' />
                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 13, }}>Total: {store.total}lei</Text>
            </View>
            <View style={styles.pinContainer}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: thirdColor, width: 130 }} numberOfLines={2} ellipsizeMode='tail'>{store.address}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Image source={{ uri: busyness[store.busy[0]] }} style={{ width: 40, height: 40 }} />
                        <Text style={{ fontSize: 10, lineHeight: 10, fontWeight: 'bold' }}>{store.busy[1]}-{store.busy[2]}min.</Text>
                    </View>
                    <TouchableOpacity
                        key={store.id + 1000}
                        activeOpacity={0.9}
                        onPress={() => {
                            Linking.openURL('google.navigation:q=' + store.lat + '+' + store.lon)
                        }
                        }
                        style={styles.pinButton}>
                        <Image source={require('../../assets/pin.png')} style={styles.pinStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.canvas}>
            <View style={styles.headerContainer}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Magazine disponibile</Text>
            </View>

            <View style={styles.storesListContainer}>
                <View style={{ width: '100%' }}>
                    <FlatList
                        data={stores}
                        keyExtractor={(item, index) => index}
                        renderItem={({ index, item }) => (
                            renderStore(item, index)
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}

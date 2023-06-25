import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, FlatList, TouchableOpacity } from "react-native";
import { AppContext } from "../../context/app.context";

export default function CartScreen({ navigation }) {
  const { primaryColor, secondaryColor, thirdColor, deviceW, deviceH, inactiveColor, selectedMarket, cart, setCart } = useContext(AppContext);
  const deleteButton = 'https://i.ibb.co/VHyvq8N/delete.png';
  const swapButton = 'https://i.ibb.co/dcyHVW4/swap.png';

  const product1 = {
    id: 1,
    name: "Lapte Olympus",
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    range: [9.75, 12.49]
  }
  const product2 = {
    id: 2,
    name: "Lapte Olympus",
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    range: [9.75, 12.49]
  }
  const product3 = {
    id: 3,
    name: "Lapte Olympus",
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    range: [9.75, 12.49]
  }
  const product4 = {
    id: 4,
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    name: "Lapte Olympus",
    range: [9.75, 12.49]
  }
  const product5 = {
    id: 5,
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    name: "Lapte Olympus",
    range: [9.75, 12.49]
  }
  const product6 = {
    id: 6,
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    name: "Lapte Olympus",
    range: [9.75, 12.49]
  }
  const product7 = {
    id: 7,
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    name: "Lapte Olympus",
    range: [9.75, 12.49]
  }
  const product8 = {
    id: 8,
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    name: "Lapte Olympus",
    range: [9.75, 12.49]
  }
  const product9 = {
    id: 9,
    image: "https://d1lqpgkqcok0l.cloudfront.net/medias/sys_master/hf0/h54/9058657239070.jpg?buildNumber=bdaaffa3e5c39b3dcb677db8d5f728cf1b32b791239ea193e3a23d4e394dfa73",
    name: "Lapte Olympus",
    range: [9.75, 12.49]
  }

  // const [cart, setCart] = useState([product1, product1, product1, product2, product3, product4, product5, product6, product7, product8, product9]);
  // const [uniqueCart, setUniqueCart] = useState(cart.filter((value, index, self) => self.indexOf(value) === index))

  const styles = StyleSheet.create({
    canvas: {
      backgroundColor: primaryColor,
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    headerContainer: {
      width: '100%',
      height: 65,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    swapButton: {
      width: 30,
      height: 30,
    },
    marketLogo: {
      width: 150,
      height: 50,
    },
    productListContainer: {
      paddingHorizontal: deviceW * 0.05,
      width: '100%',
      flex: 1,
      alignItems: 'center',
      marginTop: deviceW * 0.05,
    },
    editQuantityFont: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    deleteImageStyle: {
      width: deviceW * 0.04,
      height: deviceW * 0.04,
    },
    productContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 7,
      padding: 10,
      alignItems: "center",
    },
    productNameContainer: {
      flexDirection: 'row',
      alignItems: "center",
    },
    productQuantityContainer: {
      alignItems: 'center'
    },
    productImageStyle: {
      width: deviceW * 0.17,
      height: deviceW * 0.17,
      borderRadius: 50,
    },
    productNameStyle: {
      fontSize: 17,
      fontWeight: 'bold',
    },
    productRangeStyle: {
      fontSize: 15,
      fontWeight: 'bold',
      color: inactiveColor
    }
  });

  const editQuantity = (item, i) => {
    var array = [...cart];
    if (i !== 'delete') {
      setCart(array.map(obj => {
        if (obj.id === item.id)
          obj.quantity += i
        return obj;
      }).filter(obj => obj.quantity !== 0))
    } else {
      setCart(array.filter(obj => obj.id !== item.id));
    }
  }

  const renderProduct = (product, index) => (
    <View style={styles.productContainerStyle}>

      <View style={styles.productNameContainer}>
        <Image source={{ uri: product.image }} style={styles.productImageStyle} />

        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={styles.productNameStyle} numberOfLines={1} ellipsizeMode='tail'>
            {product.name}
          </Text>
          <Text style={styles.productRangeStyle}>
            {product.range[0]}-{product.range[1]}lei
          </Text>
        </View>
      </View>

      <View style={styles.productQuantityContainer}>

        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 3 }}>
          <TouchableOpacity
            key={product.id}
            activeOpacity={0.9}
            onPress={() => { editQuantity(product, -1) }}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.editQuantityFont}>
              -
            </Text>
          </TouchableOpacity>

          <Text style={[styles.editQuantityFont, { paddingHorizontal: 5 }]}>
            {product.quantity}
          </Text>

          <TouchableOpacity
            key={product.id + 20}
            activeOpacity={0.9}
            onPress={() => { editQuantity(product, 1) }}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.editQuantityFont}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          key={index + 30}
          activeOpacity={0.3}
          onPress={() => { editQuantity(product, 'delete') }}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Image source={{ uri: deleteButton }} style={styles.deleteImageStyle} />
          <Text style={{ color: secondaryColor, fontSize: 13, fontWeight: 'bold', paddingLeft: 4 }}>Sterge</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

  return (
    <View style={styles.canvas}>
      <View style={styles.headerContainer}>
        {selectedMarket &&
          <Image source={{ uri: selectedMarket.image }} style={styles.marketLogo} resizeMode='contain' />}
        {selectedMarket == null &&
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Alege magazin</Text>}

        <TouchableOpacity
          key={101}
          activeOpacity={0.9}
          onPress={() => { navigation.navigate('Stores') }}
          style={{ position: 'absolute', right: deviceW * 0.1, flexDirection: 'row', alignItems: 'center', padding: 5, backgroundColor: secondaryColor, borderRadius: 50 }}>
          <Image source={{ uri: swapButton }} style={styles.swapButton} />
        </TouchableOpacity>

      </View>

      <View style={styles.productListContainer}>
        <View style={{ width: '100%' }}>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index}
            renderItem={({ index, item }) => (
              renderProduct(item, index)
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>);
}

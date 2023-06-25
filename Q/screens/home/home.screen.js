import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { AppContext } from "../../context/app.context";
import { SearchBar } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {

  const { primaryColor, secondaryColor, thirdColor, deviceH, deviceW, cart, setCart } = useContext(AppContext);
  const [searched, setSearched] = useState(false);
  const [search, setSearch] = useState('')

  const promoImage = 'https://i.ibb.co/MGmk5Yz/promo.jpg';

  const styles = StyleSheet.create({
    canvas: {
      backgroundColor: primaryColor,
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
    container: {
      width: '100%',
    },
    promoStyle: {
      height: 180,
      width: deviceW
    },
    productImage: {
      borderRadius: 10,
      height: deviceW * 0.9 * 0.3,
      width: deviceW * 0.9 * 0.3,
    },
    storeImage: {
      height: deviceW * 0.9 * 0.12,
      width: deviceW * 0.9 * 0.19,
    },
    addImage: {
      height: deviceW * 0.9 * 0.1,
      width: deviceW * 0.9 * 0.1,
    },
    itemStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      width: deviceW * 0.4,
      padding: 5,
      borderRadius: 10,
      marginBottom: deviceW * 0.05,
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    }

  })

  var products = [];
  const productSample = {
    name: "Lapte degresat",
    image: "https://i.ibb.co/HYnP6Kb/nft1.png",
    id: 1,
    price: 24.99,
    discount: 10,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png',
    range: [9.75, 12.49]
  }
  const productSample2 = {
    name: "Lapte degresat",
    image: "https://i.ibb.co/HYnP6Kb/nft1.png",
    id: 2,
    price: 24.99,
    discount: 10,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Lidl_logo.png',
    range: [9.75, 12.49]
  }
  products.push(productSample);
  products.push(productSample2);
  products.push(productSample2);

  products.push(productSample);
  products.push(productSample);
  products.push(productSample);

  products.push(productSample);
  products.push(productSample);
  products.push(productSample);

  products.push(productSample);
  products.push(productSample);
  products.push(productSample);

  products.push(productSample);
  products.push(productSample);
  products.push(productSample);

  const renderProductOffer = (product, index) => (
    <View style={styles.itemStyle}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 15, textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: thirdColor }}>{product.price}lei</Text>
        <Text style={{ fontSize: 15, color: secondaryColor, fontWeight: 'bold' }}>-{product.discount}%</Text>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{(product.price * (1 - product.discount / 100)).toFixed(2)}lei</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <Image source={{ uri: product.logo }} style={styles.storeImage} resizeMode='contain' />
        <TouchableOpacity
          key={product.id + 3000}
          activeOpacity={0.4}
          onPress={() => {
            let temp = product

            let index = cart.filter(obj => obj.id == product.id)

            if (index[0] == undefined) {
              temp.quantity = 1
              setCart(cart => [...cart, temp])
            } else {
              const newState = cart.map(obj => {
                if (obj.id === product.id) {
                  obj.quantity += 1
                  return obj;
                }
                return obj;
              });

              setCart(newState);
            }
          }}
          style={{ backgroundColor: secondaryColor, padding: 5, borderRadius: 10 }}>
          <Image source={require('../../assets/add.png')} style={styles.addImage} />
        </TouchableOpacity>
      </View>
    </View >
  );

  const renderProduct = (product, index) => (
    <View>

    </View>
  );

  return (
    <View style={styles.canvas}>
      {!searched &&
        <View style={{ flex: 0, flexDirection: 'column' }}>
          <Image source={{ uri: promoImage }} style={styles.promoStyle} resizeMode='cover' />
          <View style={{ position: 'absolute', top: deviceH * 0.01, width: '100%', }}>
            <SearchBar
              placeholder="Cauta"
              onChangeText={(e) => { setSearch(e); }}
              value={search}
              round={true}
              containerStyle={{ backgroundColor: 'rgba(52, 52, 52, 0)', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
              inputContainerStyle={{ backgroundColor: secondaryColor }}
              inputStyle={{ color: primaryColor, fontWeight: 'bold' }}
              searchIcon={
                <TouchableOpacity
                  key={9999}
                  activeOpacity={0.9}
                  onPress={() => { setSearched(true) }}>
                  <Image source={require('../../assets/search-3.png')} styles={{ height: 10, height: 10 }} />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={{ paddingHorizontal: deviceW * 0.05, marginTop: deviceW * 0.05 }}>
            <FlatList
              data={products}
              numColumns={2}
              columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
              keyExtractor={(item, index) => index}
              renderItem={({ index, item }) => (
                renderProductOffer(item, index)
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>}
      {searched &&
        <FlatList
          data={products}
          keyExtractor={(item, index) => index}
          renderItem={({ index, item }) => (
            renderProduct(item, index)
          )}
          showsVerticalScrollIndicator={false}
        />
      }
    </View>
  );
}

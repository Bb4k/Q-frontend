import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { AppContext } from "../../context/app.context";

export default function Footer({ navigate }) {
  const localRoutes = ["Home", "Cart", "Profile"];
  const { primaryColor, secondaryColor, thirdColor, inactiveColor, selectedMarket, deviceW } = useContext(AppContext);
  const [focused, setFocused] = useState('Home');

  const FooterButton = ({ isFocused, image }) => {
    return (
      <View style={{
        borderRadius: 100,
        backgroundColor: isFocused && 'rgba(252, 245, 246, 0.5)',
        padding: 7,
      }}>
        {image && <Image source={image} style={{ width: 40, height: 40 }} />}
      </View>);
  };

  const renderIcon = ({ routeName, isFocused }) => {
    if (routeName == 'Home') {
      return <FooterButton image={require('../../assets/home.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Cart') {
      return <FooterButton image={require('../../assets/cart.png')} isFocused={isFocused} />;
    }

    if (routeName == 'Profile') {
      return <FooterButton image={require('../../assets/user.png')} isFocused={isFocused} />;
    }
  }

  const renderBar = () => {
    return (
      <View style={{
        position: 'absolute',
        width: '100%',
        paddingHorizontal: deviceW * 0.05,
        backgroundColor: thirdColor,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        bottom: 0,
        left: 0,
        height: 145,
        alignItems: 'flex-start',
        zIndex: 1,
      }}>
        <View style={{
          width: '100%',
          paddingVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total: {selectedMarket.total}lei</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              key={202}
              activeOpacity={0.9}
              onPress={() => {
                Linking.openURL('google.navigation:q=' + selectedMarket.lat + '+' + selectedMarket.lon)
              }}
              style={{
                padding: 10,
                backgroundColor: secondaryColor,
                borderRadius: 10,
                marginRight: 10,
              }}>
              <Image source={require('../../assets/pin.png')} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>
            <TouchableOpacity
              key={201}
              activeOpacity={0.9}
              onPress={() => { navigate('Route') }} // change page
              style={{ backgroundColor: secondaryColor, padding: 10, borderRadius: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: primaryColor }}>RUTA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>)
  }

  return (
    <>
      <View
        style={{
          height: 80,
          // width: '100%',
          flexDirection: 'row',
          // alignContent: 'space-around',
          alignContent: 'center',
          justifyContent: 'space-around',
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          bottom: 0,
          backgroundColor: secondaryColor,
          zIndex: 2,
        }}>
        {localRoutes.map((route, index) => {
          const isFocused = route === focused;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              onPress={() => {
                setFocused(route);
                navigate(route);
              }}
              style={{
                zIndex: 2,
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              {renderIcon({ routeName: route, isFocused })}
            </TouchableOpacity>
          )
        })}
      </View>

      {(selectedMarket && (focused == 'Cart')) && renderBar()}
    </>
  );
}

// import toate paginile existente
import React, { memo } from "react";
import { CardStyleInterpolators, createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import {
    HomeScreen,
    CartScreen,
    ProfileScreen,
    RoleSelectScreen,
    LoginScreen,
    SignupUser,
    SignupService,
    NFTCollectionScreen,
    NFTScreen,
    Stores,
    Route,
} from "../screens";

function HomeStackScreenSimple({ navigation }) {
    const HomeStack = createStackNavigator();
    const animConfig = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 50,
            mass: 3,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };

    return (
        <HomeStack.Navigator
            screenOptions={{
                animation: 'fade',
                cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            }}>
            <HomeStack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <HomeStack.Screen options={{ headerShown: false }} name="Cart" component={CartScreen} />
            <HomeStack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />

            <HomeStack.Screen options={{ headerShown: false }} name="NftCollection" component={NFTCollectionScreen} />
            <HomeStack.Screen options={{ headerShown: false }} name="NFT" component={NFTScreen} />
            <HomeStack.Screen options={{ headerShown: false }} name="Stores" component={Stores} />
            <HomeStack.Screen options={{ headerShown: false }} name="Route" component={Route} />

            <HomeStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <HomeStack.Screen options={{ headerShown: false }} name="SignupUser" component={SignupUser} />
            <HomeStack.Screen options={{ headerShown: false }} name="SignupService" component={SignupService} />
        </HomeStack.Navigator>
    );
}

const HomeStackScreen = memo(HomeStackScreenSimple);
export default HomeStackScreen;
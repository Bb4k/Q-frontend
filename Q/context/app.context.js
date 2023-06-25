import { createContext, useState, useMemo } from "react";
import { Dimensions } from 'react-native';
import axios from "axios";
import { navigate } from "../navigation/root.navigation";

const AppContext = createContext();

function AppProvider(props) {
  const [enableKeyboard, setEnableKeyboard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const [orientation, setOrientation] = useState(null);

  const [primaryColor, setPrimaryColor] = useState("#f0f0f0"); // #000023 
  const [secondaryColor, setSecondaryColor] = useState("#c90429"); // #03C9C3
  const [thirdColor, setThirdColor] = useState("#F79191"); // #F3F3F3
  const [inactiveColor, setInactiveColor] = useState("#b38484"); // #707070

  const [user, setUser] = useState(null);
  const [nft2Store, setNft2Store] = useState(null);
  const [connectedCart, setConnectedCart] = useState(null);
  
  const [c] = useState(null);

  const [cooldownNfts, setCooldownNfts] = useState(null);

  const [API_URL, SET_API_URL] = useState("link//");

  const [deviceW, setDeviceW] = useState(Dimensions.get('window').width);
  const [deviceH, setDeviceH] = useState(Dimensions.get('window').height);

  const [selectedMarket, setSelectedMarket] = useState(null);
  const [cart, setCart] = useState([]);

  const checkpermissionCamera = async () => {
    const { status } = await Camera.getPermissionAsync();
    if (status === "granted") {
      // setPermissionCamera(true);
    } else {
      // setPermissionCamera(false);
    }
  };

  const handleLogin = (formData) => {
    setIsLoading(true);

    const bodyFormData = new FormData();
    bodyFormData.append("username", formData.username);
    bodyFormData.append("password", formData.password);
    bodyFormData.append("role", formData.role);

    axios({
      method: "post",
      url: `${API_URL}/auth-login`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setIsLoading(false);

        /*
            response:
            {
                username: "",
                userId: "",
                role: "",
                wallets: [
                    {
                        type: "elrond",
                        logo: "",
                        ... [to-do]
                    },
                    ... pt fiecare portofel cu care s-a conectat vreodata
                ],
                NFTs: [
                    {
                        collectionTicker: "",
                        associateStoreId: ""
                    },
                    ... pt fiecare colectie de NFT-uri
                ],
                cooldownedNFTs: [
                    {
                        NFTicker: "",
                        usedDate: "",
                        cooldown: ""
                    },
                    ... pt fiecare NFT
                ]
            }
            */

        setUser(response.data);
        setNft2Store(response.data.NFTs);
        setConnectedCart(response.data.wallets);
        setCooldownNfts(response.data.cooldownedNFTs);

        navigate("Home");
      })
      .catch((response) => {
        setIsLoading(false);
        try {
          show({ message: response.response.data.message, type: "error" });
        } catch (e) {
          console.log("Response h3e4a: ", response);
        }
      });
  };

  const handleSignup = async (formData) => {
    setIsLoading(true);

    // TODO: accept termenii si conditiile

    const bodyFormData = new FormData();
    bodyFormData.append("username", formData.username);
    bodyFormData.append("password", formData.password);
    bodyFormData.append("password", formData.phoneNumber);
    bodyFormData.append("role", formData.role);

    axios({
      method: "post",
      url: `${API_URL}/auth-signup`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setIsLoading(false);

        /*
            response:
            {
                username: "",
                userId: "",
                role: "",
                wallets: [],
                NFTs: [],
                cooldownedNFTs: []
            }
            */

        setUser(response.data);

        navigate("Home");
      })
      .catch((response) => {
        setIsLoading(false);
        try {
          show({ message: response.response.data.message, type: "error" });
        } catch (e) {
          console.log("Response rgvv: ", response);
        }
      });
  };

  const handleSignout = async () => {
    setUser(null);
    setNft2Store(null);
    setConnectedCart(null);
    setCooldownNfts(null);
  };

  const store = {
    // General app
    enableKeyboard,
    setEnableKeyboard,
    isLoading,
    setIsLoading,
    orientation,
    setOrientation,

    // File upload
    fileUploading,
    setFileUploading,

    cart, 
    setCart,
    selectedMarket, 
    setSelectedMarket,
    
    // User data
    user,
    setUser,
    nft2Store,
    setNft2Store,
    connectedCart,
    setConnectedCart,
    cooldownNfts,
    setCooldownNfts,

    // API
    API_URL,

    // Auth
    handleLogin,
    handleSignup,
    handleSignout,

    // Color Pallete
    primaryColor,
    secondaryColor,
    thirdColor,
    inactiveColor,

    // Device
    deviceW,
    deviceH,
  };

  const storeForProvider = useMemo(() => store, [store]);
  return <AppContext.Provider value={storeForProvider}>{props.children}</AppContext.Provider>;
}

export { AppContext };
export default AppProvider;

import { View,Text, Button, Image } from "react-native";
import {isSignedIn, signIn,signOut} from "../App";
import { useEffect, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
export default function App() {
  const [userScope,setUserScope] = useState<any>(null);
  useEffect(() => {
    const checkLogin = async () => {
      
      if (await isSignedIn()) {
        const user =  GoogleSignin.getCurrentUser();
        setUserScope(user);
      }
    };
    console.log(userScope.user.id,userScope.user.name,userScope.user.email,userScope.user.photo)
  
    checkLogin();
  }, []);
  
  return (
    <View>
      <Text>Hello World</Text>
      <Text>{userScope.user.id}</Text>
      <Text>{userScope.user.name}</Text>
      <Text>{userScope.user.email}</Text>
      <Image source={{ uri: userScope.user.photo }} style={{ width: 100, height: 100 }} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check if Signed In" onPress={isSignedIn} />
    </View>
  )
}
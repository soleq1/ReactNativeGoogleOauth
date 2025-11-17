
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


// export default function App() {
    // Configure Google Sign-In

    GoogleSignin.configure({
        
      webClientId: 'google-oauth-webclientID', // from Google Developer Console
      offlineAccess: true, // if you need to request offline access
    });
    
    export const isSignedIn = async () => {
        return await GoogleSignin.getTokens();
    }

    // Sign-in function
    export const signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        // const userInfo = await GoogleSignin.signIn();
        // console.log('User Info:', userInfo);
        // You can now use userInfo.idToken or userInfo.serverAuthCode for backend authentication
      } catch (error:any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          console.log('User cancelled the login flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          console.log('Operation (e.g. sign in) is in progress already');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          console.log('Play services not available or outdated');
        } else {
          console.error('Other error:', error);
        }
      }
    };
    
    // Sign-out function
    export const signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        console.log('User signed out');
      } catch (error) {
        console.error('Sign out error:', error);
      }
    };
    // return (
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text>Hello World</Text>
    //         <Button title="Sign In" onPress={signIn} />
    //         <Button title="Sign Out" onPress={signOut} />
    //     </View>
    // )
// }   
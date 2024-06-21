// import 'react-native-gesture-handler';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import CustomDrawerContent from './components/CustomDrawerContent';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUpScreen" component={SignUp} />
    <Stack.Screen name="LoginScreen" component={Login} />
  </Stack.Navigator>
);



export default function App() {

  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="SignUp"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
          <Drawer.Screen name="Signup Page" component={StackNavigator} options={{ headerShown: false }} />
          <Drawer.Screen name="Login Page" component={Login} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}


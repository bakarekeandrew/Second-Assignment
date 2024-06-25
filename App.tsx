import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import CustomDrawerContent from './components/CustomDrawerContent';
import Calculator from './screens/Calculator';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUpScreenStack" component={SignUp} />
    <Stack.Screen name="LoginScreenStack" component={Login} />
    <Stack.Screen name="CalcScreenStack" component={Calculator} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="SignUpScreen"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ route }) => ({
          drawerIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'SignUpScreen') {
              iconName = 'person-add';
            } else if (route.name === 'LoginScreen') {
              iconName = 'log-in';
            } else if (route.name === 'CalcScreen') {
              iconName = 'calculator';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Drawer.Screen
          name="SignUpScreen"
          component={StackNavigator}
          options={{ headerShown: false, drawerLabel: 'Signup Page' }}
        />
        <Drawer.Screen
          name="LoginScreen"
          component={Login}
          options={{ drawerLabel: 'Login Page' }}
        />
        <Drawer.Screen
          name="CalcScreen"
          component={Calculator}
          options={{ drawerLabel: 'Calculator' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

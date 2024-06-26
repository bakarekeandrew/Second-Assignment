import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import CustomDrawerContent from './components/CustomDrawerContent';
import Calculator from './screens/Calculator';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const SignUpScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const LoginScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const CalculatorScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Calculator" component={Calculator} />
  </Stack.Navigator>
);

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'SignUp') {
          iconName = 'person-add';
        } else if (route.name === 'Login') {
          iconName = 'log-in';
        } else if (route.name === 'Calculator') {
          iconName = 'calculator';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown: false, // Hide header for all screens in bottom tabs
    })}
  >
    <Tab.Screen name="SignUp" component={SignUpScreen} options={{ tabBarLabel: 'Signup' }} />
    <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarLabel: 'Login' }} />
    <Tab.Screen name="Calculator" component={CalculatorScreen} options={{ tabBarLabel: 'Calculator' }} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="BottomTabs"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{ headerShown: false }}
  >
    <Drawer.Screen name="BottomTabs" component={BottomTabs} options={{ drawerLabel: 'Tabs' }} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

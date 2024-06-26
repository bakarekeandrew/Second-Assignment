import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';


const SignUp = () => {

const navigation = useNavigation();

useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
});
}, []);

  return (
    <SafeAreaView className="flex-1 px-3">
        
          <View className="flex-row">
            <TouchableOpacity className="p-3" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
            <View className="items-center justify-center pl-[20px] pt-10 ">
              <Image
                 source={require('../assets/try2.jpg')}
                 className="w-60 h-52 rounded-sm"
              />
            </View>
          </View>
      
          <View className="items-center justify-center pt-3 ">
            <Text className="font-semibold text-[30px] text-[#00008B]">Signup Form</Text>
          </View>
          <View className="items-center justify-center pt-7">
            <TextInput
              placeholder="Names..."
              className="w-80 h-12 border rounded-full p-3 mb-3"
            />
            <TextInput
              placeholder="Department..."
              className="w-80 h-12 border rounded-full p-3 mb-3"
            />
        
            <TextInput
              placeholder="Email..."
              className="w-80 h-12 border rounded-full p-3 mb-3"
            />
            <TextInput
              placeholder="Password..."
              className="w-80 h-12 border rounded-full p-3 mb-1"
            />
          </View>
          <View className="flex-row px-[100px] mb-10">
            <Text>You already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreenStack')}>
              <Text className="text-[#00008B] font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center justify-center">
            <TouchableOpacity className="items-center justify-center w-80 h-12 bg-[#00008B] border rounded-full ">
              <Text className="text-white text-[20px] font-semibold">Signup</Text>
            </TouchableOpacity>
          
          </View>
          

          
    </SafeAreaView >
  )
}

export default SignUp

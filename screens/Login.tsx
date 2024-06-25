import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions} from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';




const Login = () => {


    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
    });
    }, []);


    return (
        <SafeAreaView className="flex-1 px-3">
        <TouchableOpacity className="p-3" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Entypo name="menu" size={24} color="black" />
            <View>

            </View>
        </TouchableOpacity>

        <View className="items-center justify-center pt-32 ">
        <Text className="font-semibold text-[30px] text-[#00008B]">Login Form</Text>
        </View>
        <View className="items-center justify-center pt-20">
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
        <Text>You Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreenStack')}>
            <Text className="text-[#00008B] font-semibold">Signup</Text>
        </TouchableOpacity>
        </View>
        <View className="items-center justify-center">
        <TouchableOpacity className="items-center justify-center w-80 h-12 bg-[#00008B] border rounded-full ">
            <Text className="text-white text-[20px] font-semibold">Login</Text>
        </TouchableOpacity>
        </View>
        

        
    </SafeAreaView >
  )
}

export default Login


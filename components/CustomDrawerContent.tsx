import {Text, View, Image} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';



const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View className="p-3 pb-4">
          <View className="flex-row">
            <Image
              source= {require("../assets/andrew.jpg")}
              className="w-16 h-16 rounded-full "
            />
            <View className="p-1 pt-4">
              <Text className="flex-col font-medium">luckyandrew</Text>
              <Text className="font-medium">bakarekeandrew@gmail.com</Text>
            </View>
          </View>          
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  export default CustomDrawerContent;


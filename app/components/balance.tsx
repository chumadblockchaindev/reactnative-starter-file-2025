import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Balance = () => {
  const [showBalance, setShowBalance] = useState(false)
  const[balance, setBalance] = useState("🙈🙈🙈🙈🙈")
  return (
    <View className="px-6 py-12 rounded-2xl">
      <Text className="pl-6 font-medium text-gray-300">Available Balance</Text>
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-2xl text-white font-bold">
          <Text className="text-green-400 font-bold">₦</Text> {showBalance ? balance : "12.00"}
        </Text>
        <View className="flex-row gap-3 items-center bg-[#2a2a2a] p-2 rounded-full">
          <TouchableOpacity>
            {
              showBalance ? (<Ionicons name="eye-off-outline" size={24} color="#ffffff" onPress={() => setShowBalance(!showBalance) }/>) :
              (<Ionicons name="eye-outline" size={24} color="#ffffff" onPress={() => setShowBalance(!showBalance) }/>)
            }
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/flag.png")}
            className="w-8 h-8 rounded-full"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({});

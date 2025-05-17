import { router } from 'expo-router';
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';

export default function WelcomeScreen() {
  
  return (
    <View className="flex-1 bg-[#7462FF] justify-end relative">
      <StatusBar barStyle="light-content" />

      {/* Background Graphic (placeholder)
      <Image
        source={require('@/assets/images/bg-image.jpg')} // Add your graphic here
        className="absolute top-0 left-0 right-0 w-full h-1/2"
        resizeMode="contain"
      /> */}

      {/* Icon (placeholder) */}
      <View className="absolute top-[15%] self-center">
        <Image
          source={require('@/assets/images/logo.png')} // Replace with your icon
          className="w-60 h-60"
        />
      </View>

      {/* Text */}
      <Text className="text-white text-center text-3xl font-bold mb-10 px-4">
        All you need is a{'\n'}click away...
      </Text>

      {/* Buttons */}
      <View className="px-6 gap-4 mb-8">
        <TouchableOpacity className="bg-white rounded-full py-5">
          <Text className="text-center text-base font-semibold text-[#0B1E2D]">
            Create an account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#0B1E2D] rounded-full py-5" onPress={() => router.replace('/(new)/login')}>
          <Text className="text-center text-base font-semibold text-white">
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer Disclaimer */}
      <Text className="text-base text-gray-300 font-medium text-center mb-6 px-8">
        By clicking the “Create an account”, you agree to all our{' '}
        <Text className="font-bold underline text-white">Terms</Text> and{' '}
        <Text className="font-bold underline text-white">Privacy Policy</Text>.
      </Text>
    </View>
  );
}

import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Add Firebase/auth logic later
    console.log('Logging in with:', email, password);
    router.replace('/(app)/home'); // Redirect after login
  };

  return (
    <SafeAreaView className="flex-1 bg-stone-950 justify-between ps-4 pe-4">
      <View>
          {/* Header */}
          <View className="items-start gap-2 mb-8 w-72">
            <Text className="text-2xl font-bold mt-4 text-white">Login With Email</Text>
            <Text className="text-gray-500 text-lg">Please enter email and password to login account</Text>
          </View>

          {/* Email Input */}
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-stone-900 p-6 mb-4"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="bg-stone-900 p-6 mb-4"
          />
          {/* Forgot Password */}
          <TouchableOpacity>
            <Text className="text-blue-500 text-left">Forgot Password?</Text>
          </TouchableOpacity>
      </View>
      

      <View className='p-10 gap-4'>
          {/* Sign Up Link */}
          <View className="flex-row justify-center mt-8">
            <Text className="text-gray-500">Not yet a user? </Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-bold">Create Account</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-700 rounded-full p-6 items-center"
          >
            <Text className="text-white font-bold">Sign In</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


// _layout.tsx
import { useNavigation } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#0c0a09', // Your primary color from LoginScreen's bg-primary
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    borderBottomWidth: 0, // Remove bottom border
  },
  headerTitleStyle: {
    display: 'none', // To remove the header title
  },
  headerLeftContainerStyle: {
    marginLeft: 15,
  },
});

const RootLayout = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <Tabs>
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarStyle: { display: 'none' },
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.headerLeftContainerStyle}
              onPress={() => navigation.goBack()}
            >
              <View className='flex-row items-center gap-3'>
                <Icon
                name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                size={24}
                color="white" // Adjust color as needed
              />
              <Text className='text-white font-bold'>Back</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'index',
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
};

export default RootLayout;
import { Ionicons } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({title} : {title: string}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[{  backgroundColor: '#0e0e0e'}, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <View className='flex-row justify-between items-center p-3 rounded-full bg-[#1a1a1a] gap-3'>
          <TouchableOpacity>
            <Ionicons name="menu" size={22} color="#00C1D1" />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TouchableOpacity style={styles.mailButton}>
          <Ionicons name="mail" size={20} color="darkblue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const _layout = () => {
  return (
    <>
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0e0e0e"
        translucent={false}
      />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1B1B1B',
            borderTopColor: '#1B1B1B',
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          headerShown: true, // Show the header, and then use custom header
          // header: () => <Header title='' />, // Use the custom header for all tabs
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={styles.tabItem} onPress={() => router.replace('/(app)/home')}>
                <Ionicons name="home-outline" size={size} color={color} />
              </TouchableOpacity>
            ),
            header: () => <Header title='Welcome, blaqjersey' />
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: 'Wallet',
            tabBarLabel: 'Wallet',
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={styles.tabItem} onPress={() => router.replace('/(app)/wallet')}>
                <Ionicons name="wallet-outline" size={size} color={color} />
              </TouchableOpacity>
            ),
            header: () => <Header title='Wallet' />
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            title: 'Transactions',
            tabBarLabel: 'Transactions',
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={styles.tabItem} onPress={() => router.replace('/(app)/transactions')}>
                <Ionicons name="document-text-outline" size={size} color={color} />
              </TouchableOpacity>
            ),
            header: () => <Header title='Transactions' />
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity style={styles.tabItem} onPress={() => router.replace('/(app)/settings')}>
                <Ionicons name="person-outline" size={size} color={color} />
              </TouchableOpacity>
            ),
            header: () => <Header title='Settings' />
          }}
        />
      </Tabs>
    </SafeAreaProvider>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    // marginTop:  Platform.OS === 'ios' ? 40 : 0, // adjust for status bar height.
    backgroundColor: '#0e0e0e',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  mailButton: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#1a1a1a',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e0e0e', // Added a background color for the screens
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});

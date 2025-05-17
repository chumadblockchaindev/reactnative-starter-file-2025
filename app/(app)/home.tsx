import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Balance from '../components/balance';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#0e0e0e]">
        {/* Balance */}
        <Balance />

      <ScrollView>
        {/* Gift Card Cards */}
        <View className="flex-row justify-between p-3 gap-3">
          <View className="bg-[#1f2c2d] flex-1 rounded-2xl px-4 py-12">
            <Feather name="shopping-bag" size={28} color="#22d3ee" />
            <Text className="mt-2 font-bold text-white">Buy Gift Card</Text>
          </View>
          <View className="bg-[#1e293b] flex-1 rounded-2xl px-4 py-12">
            <Feather name="shopping-bag" size={28} color="#60a5fa" />
            <Text className="mt-2 font-bold text-white">Sell Gift Card</Text>
          </View>
        </View>

        {/* Promo */}
        <View className="pl-3 pr-3">
          <View className="bg-[#1a1a1a] px-4 py-10 rounded-2xl flex-row justify-between items-center">
            <View>
              <Text className="font-bold text-base text-white">Just Gadgets</Text>
              <Text className="text-sm text-gray-400">Authentic + Affordable</Text>
            </View>
            <Image
              source={require("@/assets/images/headset.png")}
              className="w-28 h-28"
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Action Cards */}
        <View className="flex-row justify-between p-3">
          <View className="bg-[#3f1d1e] flex-1 mr-1 rounded-2xl px-4 py-12">
            <MaterialIcons name="credit-card" size={28} color="#f87171" />
            <Text className="mt-2 font-bold text-white">Virtual Dollar Card</Text>
          </View>
          <View className="bg-[#312e81] flex-1 ml-2 rounded-2xl px-4 py-12">
            <Feather name="file-text" size={28} color="#a5b4fc" />
            <Text className="mt-2 font-bold text-white">Bill Payment</Text>
          </View>
        </View>

        {/* Referral Banner */}
        <View className="px-3">
          <View className="bg-[#0e0e40] px-5 py-24 rounded-2xl mb-4">
            <Text className="text-white text-3xl font-semibold">Refer & Earn {""} Money</Text>
            <Text className="text-yellow-400 font-bold text-lg mt-1">Forever</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

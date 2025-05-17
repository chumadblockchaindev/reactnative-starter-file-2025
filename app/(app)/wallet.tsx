import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import Balance from "../components/balance";
import { Transaction } from "../components/transactiondetails";
import { transactions } from "../utilities/transactions";

export default function WalletScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const handlePress = (item: Transaction) => {
    setSelectedTransaction(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <TouchableOpacity
      className="bg-[#1a1a1a] rounded-2xl p-4 mb-3 flex-row items-center"
      onPress={() => handlePress(item)}
    >
      <View className="w-10 h-10 bg-black rounded-full items-center justify-center mr-3">
        <Ionicons
          name={item.icon === "gift" ? "gift-outline" : "business-outline"}
          size={20}
          color="white"
        />
      </View>
      <View className="flex-1">
        <Text className="text-white font-semibold">{item.type}</Text>
        <Text className="text-gray-400 text-xs">{item.date}</Text>
      </View>
      <View className="items-end">
        <Text
          className={`text-base font-bold ${
            item.amount.includes("+") ? "text-green-400" : "text-white"
          }`}
        >
          {item.amount}
        </Text>
        <Text className="text-green-400 text-xs">{item.status}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#0e0e0e]">
            <View className="bg-[#1a1a1a]">
              <Balance />
              <View className="flex-row justify-between mb-4 gap-3 px-4">
              <TouchableOpacity className="bg-[#1e3a8a] px-6 py-4 flex-1 rounded-full">
                <Text className="text-white text-lg font-bold">Top up 💰</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-green-700 px-6 py-4 flex-1 rounded-full">
                <Text className="text-white text-lg font-bold">
                  Withdraw 💸
                </Text>
              </TouchableOpacity>
            </View>
            </View>
      <FlatList
        data={transactions.slice(0, 5)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            <View className="mt-4">
              <View className="bg-[#1a1a1a] p-5 rounded-lg flex-row justify-between items-center">
                <Image
                  source={require("@/assets/images/zenith.png")}
                  style={{ width: 40, height: 40 }}
                />
                <View className="flex-col items-end ml-4">
                  <Text className="text-white text-lg font-bold">
                    2405174988
                  </Text>
                  <Text className="text-gray-400">Zenith Bank</Text>
                  <Text className="text-white font-bold">
                    Wisdom Ogbonnaya Silas
                  </Text>
                </View>
              </View>

              <TouchableOpacity className="mt-4">
                <Text className="text-green-400 underline text-center font-semibold">
                  Manage Bank Accounts
                </Text>
              </TouchableOpacity>

              <Text className="text-lg mt-8 font-semibold text-gray-400">
                Recent Wallet Activities
              </Text>
            </View>
          </>
        }
        ListFooterComponent={
          <TouchableOpacity className="mt-4 mb-10">
            <Text
              className="text-green-400 underline text-center font-semibold"
              onPress={() => router.replace("/(app)/transactions")}
            >
              View Full History
            </Text>
          </TouchableOpacity>
        }
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
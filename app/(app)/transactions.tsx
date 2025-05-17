import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TransactionDetailsModal, { Transaction } from '../components/transactiondetails';
import { transactions } from '../utilities/transactions';

export default function TransactionsScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

    const handlePress = (item: Transaction) => {
        setSelectedTransaction(item);
        setModalVisible(true);
    };
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} className="bg-[#0e0e0e]">
                <View className="flex-row items-center justify-between p-4">
                <TouchableOpacity className="py-6 px-2 bg-[#1a1a1a] rounded-2xl ">
                        <Feather name="chevron-left" size={24} color="white" />
                </TouchableOpacity>

                    <View className="bg-[#1a1a1a] rounded-2xl px-4 py-6 ml-4 flex-1">
                        <View className='flex-row items-center justify-between'>
                        <Text className="text-2xl text-white font-bold">₦ 12.00</Text>
                        <Text className="text-gray-400 text-sm">Available balance</Text>
                        </View>
                    </View>
                </View>

                {/* Filter By */}
                <View className="flex-row items-center px-4 mb-4">
                    <Text className="text-white mr-2">Filter by:</Text>
                    <TouchableOpacity className="bg-[#2c2c2c] px-4 py-2 rounded-full flex-row items-center">
                        <Text className="text-white text-sm mr-1">All Transactions</Text>
                        <Feather name="chevron-down" size={16} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Transaction List */}
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    className="px-4"
                    renderItem={({ item }) => (
                        <TouchableOpacity className="bg-[#1a1a1a] rounded-2xl p-4 mb-3 flex-row items-center" onPress={() => handlePress(item)}>
                            <View className="w-10 h-10 bg-black rounded-full items-center justify-center mr-3">
                                <Ionicons
                                    name={item.icon === 'gift' ? 'gift-outline' : 'business-outline'}
                                    size={20}
                                    color="white"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="text-white font-semibold">{item.type}</Text>
                                <Text className="text-gray-400 text-xs">{item.date}</Text>
                            </View>
                            <View className="items-end">
                                <Text className={`text-base font-bold ${item.amount.includes('+') ? 'text-green-400' : 'text-white'}`}>
                                    {item.amount}
                                </Text>
                                <Text className="text-green-400 text-xs">{item.status}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

                <TransactionDetailsModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    transaction={selectedTransaction}
                />
            </SafeAreaView>
        </View>
    );
}


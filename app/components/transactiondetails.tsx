// TransactionDetailsModal.tsx
import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  transaction: Transaction | null;
}

// TransactionTypes.ts
export interface Transaction {
  id: string;
  type: string;
  date: string;
  time: string;
  status: string;
  icon: string;
  amount: string;
  reference: string;
  narration: string;
}

export default function TransactionDetailsModal({ visible, onClose, transaction }: Props) {
  if (!transaction) return null;

  const handleCopy = () => {
    Alert.alert('Copied', 'Reference copied to clipboard');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 justify-end bg-black/70">
        <View className="bg-[#1B1B1B] rounded-t-3xl p-4">
          <View className='gap-0'>
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-white text-md font-semibold text-center flex-1">
                Transaction Details
              </Text>
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close-circle" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>

          <Text className="text-gray-400 text-sm mb-8 text-center">
            Here is a better view of this transaction 📄
          </Text>

          <View className="bg-[#222222] rounded-2xl p-4 mb-4">
            <View className="flex-row items-center mb-3">
              <View className="bg-black w-10 h-10 rounded-full items-center justify-center mr-3">
                <Ionicons name="business-outline" size={20} color="white" />
              </View>
              <Text className="text-white text-lg font-semibold">{transaction.type}</Text>
            </View>

            <View className="gap-3">
              <TextRow label="Date" value={transaction.date} />
              <TextRow label="Time" value={transaction.time} />
              <TextRow label="Transaction type" value={transaction.type} />
              <TextRow label="Status" value={transaction.status} color="text-green-500" />
              <TextRow label="Amount" value={transaction.amount} />
              <View className="flex-row justify-between items-center">
                <Text className="text-white text-sm">Reference</Text>
                <View className="flex-row items-center space-x-1">
                  <Text className="text-white text-sm">{transaction.reference}</Text>
                  <TouchableOpacity onPress={handleCopy}>
                    <Feather name="copy" size={16} color="#999" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-white font-semibold mb-1">Narration</Text>
          <Text className="text-gray-300 mb-2">{transaction.narration}</Text>

          <TouchableOpacity className="bg-[#002446] py-3 rounded-full mb-3 items-center">
            <Text className="text-white font-semibold">
              🧾 Rate this transaction
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-between">
            <TouchableOpacity>
              <Text className="text-green-500 font-medium">Report an issue</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-green-500 font-medium">Download Receipt</Text>
            </TouchableOpacity>
          </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function TextRow({ label, value, color = 'text-white' }: { label: string; value: string; color?: string }) {
  return (
    <View className="flex-row justify-between">
      <Text className="text-white text-sm">{label}</Text>
      <Text className={`text-sm ${color}`}>{value}</Text>
    </View>
  );
}
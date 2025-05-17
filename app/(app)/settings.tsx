import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, Switch, Text, View } from "react-native";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View className="flex-1 bg-[#0e0e0e]">
      <ScrollView className="px-4 py-4">
        {/* User Profile Card */}
        <View className="bg-[#1a1a1a] rounded-2xl shadow p-4 mb-4 flex-row items-center">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
            }}
            className="w-14 h-14 rounded-full"
          />
          <View className="ml-4 flex-1">
            <Text className="text-lg font-semibold text-white">blaqjersey</Text>
            <View className="mt-1">
              <Text className="text-sm text-gray-400">
                User level: <Text className="text-green-400">2</Text>
              </Text>
              <View className="h-1 bg-gray-700 w-full rounded-full mt-1">
                <View className="h-1 w-[30%] bg-green-500 rounded-full" />
              </View>
            </View>
          </View>
        </View>

        {/* List Items */}
        <SettingItem icon="user" label="Profile" />
        <SettingItem
          icon="bullhorn"
          label="Notifications"
          hasSwitch
          switchValue={notificationsEnabled}
          onSwitchToggle={() => setNotificationsEnabled((prev) => !prev)}
          showInfo
        />
        <SettingItem icon="lock" label="Security" />
        <SettingItem icon="id-badge" label="Identity Verification" showInfo />
        <SettingItem icon="comment-dots" label="Chat with us" />
        <SettingItem icon="trash-alt" label="Delete Account" />
        <View className="h-20" />
      </ScrollView>
    </View>
  );
};

const SettingItem = ({
  icon,
  label,
  hasSwitch = false,
  switchValue,
  onSwitchToggle,
  showInfo = false,
}: {
  icon: string;
  label: string;
  hasSwitch?: boolean;
  switchValue?: boolean;
  onSwitchToggle?: () => void;
  showInfo?: boolean;
}) => {
  return (
    <View className="flex-row items-center justify-between bg-[#1e1e1e] rounded-xl p-4 mb-3">
      <View className="flex-row items-center">
        <View className="bg-[#2c2c2c] rounded-full p-2 mr-4">
          <FontAwesome5 name={icon as any} size={18} color="#fff" />
        </View>
        <Text className="text-base text-white font-medium">{label}</Text>
        {showInfo && <Feather name="info" size={16} color="gray" className="ml-1" />}
      </View>
      {hasSwitch && (
        <Switch
          trackColor={{ false: "#444", true: "#4ade80" }}
          thumbColor="#fff"
          value={switchValue}
          onValueChange={onSwitchToggle}
        />
      )}
    </View>
  );
};

export default SettingsScreen;

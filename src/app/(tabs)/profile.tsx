import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <View className="flex-1 items-center justify-center">
        <Text>Profile</Text>
      </View>
    </>
  );
}

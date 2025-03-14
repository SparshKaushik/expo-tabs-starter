import Tabs from '@/components/ui/BottomTabs/BottomTabs';
import Icon from '@/components/ui/Icon.web';
import { Platform } from 'react-native';

const NativeIcons = {
  home: require('../../../assets/icons/house.svg'),
  profile: require('../../../assets/icons/circle-user-round.svg'),
};

const WebIcons = {
  home: <Icon icon={require('../../../assets/icons/house.svg')} />,
  profile: <Icon icon={require('../../../assets/icons/circle-user-round.svg')} />,
};

export default function TabLayout() {
  const Icon = Platform.OS === 'web' ? WebIcons : NativeIcons;

  return (
    <Tabs
      tabBarStyle={{
        backgroundColor: '#2E3C4B',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => Icon.home,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => Icon.profile,
        }}
      />
    </Tabs>
  );
}

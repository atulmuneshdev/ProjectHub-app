import { ScrollView } from "react-native";
import { useTabBarVisibility } from "./_layout"; // adjust path if needed

export default function HomeScreen() {
  const { hideTabBar, showTabBar } = useTabBarVisibility();

  return (
    <ScrollView
      onScrollBeginDrag={hideTabBar}
      onScrollEndDrag={showTabBar}
      onMomentumScrollEnd={showTabBar}
      scrollEventThrottle={16}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      {/* your content */}
    </ScrollView>
  );
}
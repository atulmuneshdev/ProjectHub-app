import React, { createContext, useContext, useMemo, useRef } from "react";
import { Tabs, usePathname, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Colors from "../../constants/Colors";

const TabBarContext = createContext({
  hideTabBar: () => {},
  showTabBar: () => {},
});

export const useTabBarVisibility = () => useContext(TabBarContext);

function CustomTabBar({ translateY }: { translateY: Animated.Value }) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { route: "/(app)/home", icon: "home", outline: "home-outline" },
    { route: "/(app)/projects", icon: "folder", outline: "folder-outline" },
    { route: "/(app)/upload", icon: "add-circle", outline: "add-circle-outline", center: true },
    { route: "/(app)/notifications", icon: "notifications", outline: "notifications-outline" },
    { route: "/(app)/profile", icon: "person", outline: "person-outline" },
  ];

  const isActive = (route: string) =>
    route === "/(app)/home" ? pathname === route : pathname.startsWith(route);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity: translateY.interpolate({
            inputRange: [0, 90],
            outputRange: [1, 0],
          }),
        },
      ]}
    >
      <View style={styles.tabBar}>
        {tabs.map((tab) => {
          const active = isActive(tab.route);

          return (
            <Pressable
              key={tab.route}
              onPress={() => router.push(tab.route as any)}
              style={({ pressed }) => [
                styles.tabButton,
                pressed && styles.pressed,
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  tab.center && styles.centerIcon,
                  active && styles.activeIconContainer,
                ]}
              >
                <Ionicons
                  name={(active ? tab.icon : tab.outline) as any}
                  size={tab.center ? 30 : 23}
                  color={active || tab.center ? "#fff" : Colors.textSecondary}
                />
              </View>

              {active && <View style={styles.activeDot} />}
            </Pressable>
          );
        })}
      </View>
    </Animated.View>
  );
}

export default function AppLayout() {
  const translateY = useRef(new Animated.Value(0)).current;

  const animateTab = (toValue: number) => {
    Animated.timing(translateY, {
      toValue,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  const value = useMemo(
    () => ({
      hideTabBar: () => animateTab(95),
      showTabBar: () => animateTab(0),
    }),
    []
  );

  return (
    <TabBarContext.Provider value={value}>
      <Tabs
        tabBar={() => <CustomTabBar translateY={translateY} />}
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="projects" />
        <Tabs.Screen name="upload" />
        <Tabs.Screen name="notifications" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </TabBarContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    alignItems: "center",
    paddingHorizontal: 18,
    paddingBottom: Platform.OS === "ios" ? 28 : 18,
  },
  tabBar: {
    width: "100%",
    maxWidth: 430,
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.surface,
    borderRadius: 28,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 18,
    elevation: 12,
  },
  tabButton: {
    flex: 1,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.72,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  activeIconContainer: {
    backgroundColor: Colors.primary,
  },
  centerIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginTop: -18,
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 8,
  },
  activeDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 3,
    backgroundColor: Colors.primary,
  },
});
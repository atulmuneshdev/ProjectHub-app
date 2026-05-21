import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const menuItems = [
  { icon: "person-outline", title: "Edit Profile", route: "/(app)/edit-profile" },
  { icon: "folder-outline", title: "My Projects", route: "/(app)/my-projects" },
  { icon: "briefcase-outline", title: "Assigned Projects", route: "/(app)/assigned-projects" },
  { icon: "chatbox-outline", title: "Messages", route: "/(app)/chat" },
  { icon: "card-outline", title: "Payments", route: "/(app)/payment" },
  { icon: "settings-outline", title: "Settings", route: "" },
  { icon: "log-out-outline", title: "Logout", route: "/login" },
];

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Smith</Text>
            <Text style={styles.role}>Student</Text>
            <Text style={styles.email}>john.smith@email.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Sold</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Bought</Text>
        </View>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => item.route && router.push(item.route)}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon as any} size={22} color={Colors.textSecondary} />
              <Text style={styles.menuTitle}>{item.title}</Text>
            </View>
            {item.title !== "Logout" && (
              <Ionicons name="chevron-forward" size={20} color={Colors.textSecondary} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  role: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "500",
    marginBottom: 2,
  },
  email: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  stats: {
    flexDirection: "row",
    backgroundColor: Colors.surface,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.border,
  },
  menu: {
    backgroundColor: Colors.surface,
    marginHorizontal: 24,
    borderRadius: 16,
    marginBottom: 100,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuTitle: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginLeft: 12,
  },
});

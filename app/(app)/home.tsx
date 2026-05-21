import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ProjectCard from "../../components/ProjectCard";
import Colors from "../../constants/Colors";

const dummyProjects = [
  {
    id: "1",
    title: "E-Commerce App with React Native",
    description: "Complete e-commerce mobile app with payment integration and admin panel.",
    category: "React Native Projects",
    price: 199,
    techStack: ["React Native", "Firebase", "Redux"],
  },
  {
    id: "2",
    title: "MERN Stack Social Media Platform",
    description: "Full-featured social media platform with real-time chat and posts.",
    category: "MERN Stack Projects",
    price: 299,
    techStack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: "3",
    title: "AI Chatbot for Customer Support",
    description: "Intelligent chatbot powered by machine learning for automated customer service.",
    category: "AI/ML Projects",
    price: 399,
    techStack: ["Python", "TensorFlow", "Flask"],
  },
];

const quickActions = [
  {
    icon: "cloud-upload-outline",
    label: "Upload",
    subtitle: "Sell project",
    route: "/(app)/upload",
  },
  {
    icon: "search-outline",
    label: "Browse",
    subtitle: "Find projects",
    route: "/(app)/projects",
  },
  {
    icon: "briefcase-outline",
    label: "Requirement",
    subtitle: "Post work",
    route: "/(app)/post-requirement",
  },
  {
    icon: "chatbox-outline",
    label: "Messages",
    subtitle: "Contact sellers",
    route: "/(app)/chat",
  },
];

const categories = ["React Native", "MERN Stack", "AI/ML", "Web Dev", "Final Year"];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hello, Student</Text>
          <Text style={styles.subtitle}>Find, buy, or upload project work</Text>
        </View>

        <TouchableOpacity
          style={styles.notificationButton}
          onPress={() => router.push("/(app)/notifications")}
          activeOpacity={0.8}
        >
          <Ionicons name="notifications-outline" size={23} color={Colors.textPrimary} />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => router.push("/(app)/projects")}
          activeOpacity={0.85}
        >
          <Ionicons name="search-outline" size={20} color={Colors.textSecondary} />
          <Text style={styles.searchText}>Search projects, tech stack, sellers</Text>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>

        <View style={styles.heroCard}>
          <View style={styles.heroContent}>
            <Text style={styles.heroLabel}>Project Marketplace</Text>
            <Text style={styles.heroTitle}>Build faster with ready-made projects</Text>
            <Text style={styles.heroSubtitle}>
              Explore app, web, AI and final-year projects from trusted sellers.
            </Text>

            <TouchableOpacity
              style={styles.heroButton}
              onPress={() => router.push("/(app)/projects")}
              activeOpacity={0.85}
            >
              <Text style={styles.heroButtonText}>Explore Now</Text>
              <Ionicons name="arrow-forward" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.heroIcon}>
            <Ionicons name="code-slash-outline" size={42} color="#fff" />
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>120+</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>35+</Text>
            <Text style={styles.statLabel}>Developers</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>18</Text>
            <Text style={styles.statLabel}>Industry Jobs</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <View style={styles.quickActions}>
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.label}
                style={styles.actionCard}
                onPress={() => router.push(action.route)}
                activeOpacity={0.85}
              >
                <View style={styles.actionIcon}>
                  <Ionicons name={action.icon as any} size={24} color={Colors.primary} />
                </View>

                <View style={styles.actionTextWrap}>
                  <Text style={styles.actionLabel}>{action.label}</Text>
                  <Text style={styles.actionSubtitle}>{action.subtitle}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Projects</Text>

            <TouchableOpacity
              onPress={() => router.push("/(app)/projects")}
              activeOpacity={0.75}
            >
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.projectsList}>
            {dummyProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onPress={() =>
                  router.push({
                    pathname: "/(app)/project-detail",
                    params: { id: project.id },
                  })
                }
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Categories</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
            contentContainerStyle={styles.categoriesContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={styles.categoryCard}
                onPress={() => router.push("/(app)/projects")}
                activeOpacity={0.85}
              >
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 18,
  },
  headerText: {
    flex: 1,
    paddingRight: 16,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.textPrimary,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 21,
  },
  notificationButton: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  notificationBadge: {
    position: "absolute",
    top: 11,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.error,
    borderWidth: 1,
    borderColor: Colors.surface,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 110,
  },
  searchBar: {
    height: 56,
    marginHorizontal: 24,
    marginBottom: 18,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  heroCard: {
    marginHorizontal: 24,
    marginBottom: 18,
    padding: 20,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    overflow: "hidden",
  },
  heroContent: {
    flex: 1,
    paddingRight: 12,
  },
  heroLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "rgba(255,255,255,0.78)",
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#fff",
    lineHeight: 28,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 13,
    color: "rgba(255,255,255,0.78)",
    lineHeight: 19,
    marginBottom: 16,
  },
  heroButton: {
    height: 42,
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    borderRadius: 13,
    backgroundColor: "rgba(255,255,255,0.18)",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  heroButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
  },
  heroIcon: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.16)",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.textPrimary,
    marginBottom: 3,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: Colors.textSecondary,
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 26,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "800",
  },
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 14,
  },
  actionCard: {
    width: "48%",
    minHeight: 92,
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: `${Colors.primary}14`,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  actionTextWrap: {
    gap: 3,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  actionSubtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.textSecondary,
  },
  projectsList: {
    gap: 14,
  },
  categories: {
    marginTop: 14,
  },
  categoriesContent: {
    paddingRight: 24,
  },
  categoryCard: {
    height: 42,
    backgroundColor: Colors.surface,
    borderRadius: 14,
    paddingHorizontal: 16,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
});

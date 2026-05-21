import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import ProjectCard from "../../components/ProjectCard";
import Colors from "../../constants/Colors";
import { categories } from "../../constants/Data";

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
  {
    id: "4",
    title: "College Management System",
    description: "Complete system for managing college operations and student records.",
    category: "College Final Year Projects",
    price: 149,
    techStack: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: "5",
    title: "Portfolio Website Template",
    description: "Modern and responsive portfolio website for developers and designers.",
    category: "Web Development",
    price: 49,
    techStack: ["React", "Tailwind CSS"],
  },
  {
    id: "6",
    title: "Task Management App",
    description: "Simple and elegant task management application with drag and drop.",
    category: "Mini Projects",
    price: 29,
    techStack: ["React Native", "AsyncStorage"],
  },
];

export default function ProjectsScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return dummyProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>Explore Marketplace</Text>
          <Text style={styles.title}>Find Projects</Text>
        </View>

        <TouchableOpacity style={styles.headerIconButton} activeOpacity={0.8}>
          <Ionicons name="options-outline" size={22} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <View>
          <Text style={styles.summaryLabel}>Available projects</Text>
          <Text style={styles.summaryValue}>{filteredProjects.length}</Text>
        </View>

        <View style={styles.summaryDivider} />

        <View style={styles.summaryRight}>
          <Text style={styles.summaryLabel}>Selected category</Text>
          <Text style={styles.summaryCategory} numberOfLines={1}>
            {selectedCategory}
          </Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={Colors.textSecondary} />

        <TextInput
          style={styles.searchInput}
          placeholder="Search title, tech stack, description"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor={Colors.textSecondary}
        />

        {searchQuery.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSearchQuery("")}
            activeOpacity={0.7}
          >
            <Ionicons name="close" size={18} color={Colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {["All", ...categories.slice(0, 10)].map((category) => {
          const isActive = selectedCategory === category;

          return (
            <TouchableOpacity
              key={category}
              style={[styles.filterChip, isActive && styles.activeFilterChip]}
              onPress={() => setSelectedCategory(category)}
              activeOpacity={0.85}
            >
              <Text
                style={[
                  styles.filterChipText,
                  isActive && styles.activeFilterChipText,
                ]}
                numberOfLines={1}
              >
                {category === "All" ? "All Projects" : category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <Text style={styles.sectionCount}>{filteredProjects.length} results</Text>
        </View>

        {filteredProjects.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyIconWrap}>
              <Ionicons name="search-outline" size={42} color={Colors.primary} />
            </View>

            <Text style={styles.emptyTitle}>No projects found</Text>
            <Text style={styles.emptySubtitle}>
              Try a different keyword or choose another category.
            </Text>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              activeOpacity={0.85}
            >
              <Text style={styles.resetButtonText}>Reset Filters</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.projectsList}>
            {filteredProjects.map((project) => (
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
        )}
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
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.primary,
    marginBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  headerIconButton: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  summaryCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 18,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "rgba(255,255,255,0.75)",
    marginBottom: 5,
  },
  summaryValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },
  summaryDivider: {
    width: 1,
    height: 42,
    backgroundColor: "rgba(255,255,255,0.25)",
    marginHorizontal: 18,
  },
  summaryRight: {
    flex: 1,
  },
  summaryCategory: {
    fontSize: 16,
    fontWeight: "800",
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: Colors.textPrimary,
  },
  clearButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.background,
  },
  filtersContainer: {
    maxHeight: 52,
    marginBottom: 8,
  },
  filtersContent: {
    paddingHorizontal: 24,
    paddingRight: 12,
  },
  filterChip: {
    height: 42,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.surface,
    borderRadius: 14,
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  activeFilterChip: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterChipText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "700",
  },
  activeFilterChipText: {
    color: "#fff",
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 110,
  },
  sectionHeader: {
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.textPrimary,
  },
  sectionCount: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.textSecondary,
  },
  projectsList: {
    gap: 14,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 70,
    paddingHorizontal: 24,
  },
  emptyIconWrap: {
    width: 86,
    height: 86,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: Colors.textPrimary,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 22,
  },
  resetButton: {
    paddingHorizontal: 22,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  resetButtonText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
  },
});
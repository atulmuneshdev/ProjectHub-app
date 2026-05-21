import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";

export default function ProjectDetailScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.projectHeader}>
          <Text style={styles.category}>React Native Projects</Text>
          <Text style={styles.price}>$199</Text>
        </View>

        <Text style={styles.title}>E-Commerce App with React Native</Text>

        <View style={styles.sellerInfo}>
          <View style={styles.sellerAvatar}>
            <Text style={styles.sellerAvatarText}>JD</Text>
          </View>
          <View style={styles.sellerDetails}>
            <Text style={styles.sellerName}>John Doe</Text>
            <Text style={styles.sellerRole}>Developer</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Complete e-commerce mobile application built with React Native. Features include:
          {"\n\n"}• User authentication and profiles
          {"\n"}• Product catalog with categories
          {"\n"}• Shopping cart and wishlist
          {"\n"}• Payment integration
          {"\n"}• Order tracking
          {"\n"}• Admin panel for managing products
        </Text>

        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <View style={styles.techStack}>
          {["React Native", "Firebase", "Redux", "Stripe"].map((tech, index) => (
            <View key={index} style={styles.techTag}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>

        <Button
          title="Buy Project - $199"
          onPress={() => router.push("/(app)/payment")}
          style={styles.buyButton}
        />
        <Button
          title="Contact Seller"
          variant="outline"
          onPress={() => router.push("/(app)/chat")}
          style={styles.contactButton}
        />
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
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  content: {
    padding: 24,
    paddingBottom: 100,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  category: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primary,
    backgroundColor: `${Colors.primary}15`,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.textPrimary,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textPrimary,
    marginBottom: 20,
    lineHeight: 32,
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: Colors.surface,
    borderRadius: 16,
  },
  sellerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  sellerAvatarText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  sellerDetails: {
    flex: 1,
  },
  sellerName: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 2,
  },
  sellerRole: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 12,
    marginTop: 24,
  },
  description: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  techStack: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  techTag: {
    backgroundColor: Colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  techText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  buyButton: {
    marginTop: 32,
  },
  contactButton: {
    marginTop: 12,
  },
});

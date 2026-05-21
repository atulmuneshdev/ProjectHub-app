import { ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

const assignedProjects = [
    {
        id: "1",
        title: "Company Website Redesign",
        company: "TechCorp Industries",
        status: "In Progress",
        deadline: "2026-06-15",
    },
    {
        id: "2",
        title: "Mobile App Development",
        company: "StartupX",
        status: "Pending",
        deadline: "2026-07-01",
    },
];

export default function AssignedProjectsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Assigned Projects</Text>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.projectsList}>
                    {assignedProjects.map((project) => (
                        <View key={project.id} style={styles.projectCard}>
                            <View style={styles.projectHeader}>
                                <Text style={styles.projectTitle}>{project.title}</Text>
                                <View
                                    style={[
                                        styles.statusBadge,
                                        project.status === "In Progress"
                                            ? styles.inProgressBadge
                                            : styles.pendingBadge,
                                    ]}
                                >
                                    <Text style={styles.statusText}>{project.status}</Text>
                                </View>
                            </View>
                            <Text style={styles.company}>{project.company}</Text>
                            <Text style={styles.deadline}>Deadline: {project.deadline}</Text>
                        </View>
                    ))}
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
        paddingTop: 60,
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: Colors.textPrimary,
    },
    content: {
        flex: 1,
    },
    projectsList: {
        paddingHorizontal: 24,
        paddingTop: 8,
        paddingBottom: 100,
    },
    projectCard: {
        backgroundColor: Colors.surface,
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
    },
    projectHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 8,
    },
    projectTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.textPrimary,
        flex: 1,
        marginRight: 12,
    },
    statusBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
    },
    inProgressBadge: {
        backgroundColor: `${Colors.primary}15`,
    },
    pendingBadge: {
        backgroundColor: `${Colors.warning}15`,
    },
    statusText: {
        fontSize: 12,
        fontWeight: "600",
        color: Colors.primary,
    },
    company: {
        fontSize: 14,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    deadline: {
        fontSize: 13,
        color: Colors.textSecondary,
    },
});

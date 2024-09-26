import React from 'react';
import { View, Text, FlatList, StyleSheet,image } from 'react-native';

// Course data
const SixMonthsScreen = [
    {
        id: '1',
        name: 'First Aid',
        fees: 'R1500',
        purpose: 'To provide first aid awareness and basic life support',
        content: [
            'Wounds and bleeding',
            'Burns and fractures',
            'Emergency scene management',
            'Cardio-Pulmonary Resuscitation (CPR)',
            'Respiratory distress e.g., Choking, blocked airway',
        ],
    },
    {
        id: '2',
        name: 'Sewing',
        fees: 'R1500',
        purpose: 'To provide alterations and new garment tailoring services',
        content: [
            'Types of stitches',
            'Threading a sewing machine',
            'Sewing buttons, zips, hems and seams',
            'Alterations',
            'Designing and sewing new garments',
        ],
    },
    {
        id: '3',
        name: 'Landscaping',
        fees: 'R1500',
        purpose: 'To provide landscaping services for new and established gardens',
        content: [
            'Indigenous and exotic plants and trees',
            'Fixed structures (fountains, statues, benches, tables, built-in braai)',
            'Balancing of plants and trees in a garden',
            'Aesthetics of plant shapes and colours',
            'Garden layout',
        ],
    },
    {
        id: '4',
        name: 'Life Skills',
        fees: 'R1500',
        purpose: 'To provide skills to navigate basic life necessities',
        content: [
            'Opening a bank account',
            'Basic labour law (know your rights)',
            'Basic reading and writing literacy',
            'Basic numeric literacy',
        ],
    },
];

// Course Item Component
const CourseItem = ({ course }) => {
    return (
        <View style={styles.courseItem}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text>Fees: {course.fees}</Text>
            <Text>Purpose: {course.purpose}</Text>
            <Text>Content:</Text>
            {course.content.map((item, index) => (
                <Text key={index} style={styles.contentItem}>
                    • {item}
                </Text>
            ))}
        </View>
    );
};

// Main App Component
const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Six-Months Courses</Text>
            <FlatList
                data={courses}
                renderItem={({ item }) => <CourseItem course={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E1FFE0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#000000',
    },
    courseItem: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
    },
    courseName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    contentItem: {
      color: '#000000',
        marginLeft: 10,
    },
});

export default SixMonthsScreen;
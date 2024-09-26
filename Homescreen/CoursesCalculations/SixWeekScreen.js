import React from 'react';
import { View, Text, FlatList, StyleSheet,image } from 'react-native';

// Course data
const SixWeeksScreen = [
    {
        id: '1',
        name: 'Child Minding',
        fees: 'R750',
        purpose: 'To provide basic child and baby care ',
        content: [
            'birth to six-month old baby needs',
            'seven-month to one year old needs',
            'Toddler needs',
            'Educational toys',
        ],
    },
    {
        id: '2',
        name: 'Cooking',
        fees: 'R750',
        purpose: ': To prepare and cook nutritious family meals',
        content: [
            'Nutritional requirements for a healthy body',
            'Types of protein, carbohydrates and vegetables',
            'Planning meals',
            'Preparation and cooking of meals',
        ],
    },
    {
        id: '3',
        name: 'Garden Maintenance',
        fees: 'R750',
        purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden',
        content: [
            'Water restrictions and the watering requirements of indigenous and exotic plants',
            'Pruning and propagation of plants',
            'Planting techniques for different plant types',

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

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Six-Weeks Courses</Text>
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

export default SixWeeksScreen;
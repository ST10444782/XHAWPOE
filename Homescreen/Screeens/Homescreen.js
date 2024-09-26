import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {  // Make sure to accept navigation as a prop
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Unlock your potential,</Text>
        <Text style={styles.headerSubtitle}>Elevate your career!</Text>
        {/* Placeholder for slide dots */}
        <View style={styles.dotsContainer}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>

      {/* What We Do Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What We Do:</Text>
        <Text style={styles.sectionSubtitle}>Why you need to join us</Text>

        {/* Cards */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Support Employers</Text>
            <Text style={styles.cardDescription}>
              We help employers upskill their staff, enabling them to deliver more skilled services ensuring a higher standard of care and professionalism.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Empower Educators</Text>
            <Text style={styles.cardDescription}>
              We offer specialized courses for domestic workers, equipping them with skills needed to enhance their earning potential.
            </Text>
          </View>
        </View>
      </View>

      {/* New "Learn More About Us" button */}
      <TouchableOpacity 
        style={styles.learnMoreButton}
        onPress={() => navigation.navigate('AboutUs')}  // Navigation to AboutUs screen
      >
        <Text style={styles.learnMoreText}>Learn More About Us</Text>
      </TouchableOpacity>

      {/* Explore Our Programs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore Our Programs</Text>
        <Text style={styles.sectionSubtitle}>Check our available courses</Text>

        {/* Program Cards */}
        <View style={styles.programCard}>
          <Text style={styles.programTitle}>6 Months Programs</Text>
          <Text style={styles.programList}>• First Aid</Text>
          <Text style={styles.programList}>• Life Skills</Text>
          <Text style={styles.programList}>• Sewing</Text>
          <Text style={styles.programList}>• Landscaping</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.programCard}>
          <Text style={styles.programTitle}>6 Week Programs</Text>
          <Text style={styles.programList}>• Child Minding</Text>
          <Text style={styles.programList}>• Cooking</Text>
          <Text style={styles.programList}>• Garden Maintenance</Text>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Newsletter Section */}
      <View style={styles.newsletter}>
        <Text style={styles.sectionTitle}>Join Our Newsletter</Text>
        <View style={styles.newsletterInputContainer}>
          <TextInput placeholder="Your email address" style={styles.emailInput} />
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.newsletterFooter}>* Will send you weekly updates for your better tool management.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E6FFE6',
    alignItems: 'center',
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6FFE6',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#32CD32',
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#32CD32',
    marginHorizontal: 5,
  },
  section: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    width: '45%',
    backgroundColor: '#CCFFCC',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  programCard: {
    backgroundColor: '#98FB98',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '90%',
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  programList: {
    fontSize: 14,
    color: '#333',
  },
  learnMoreButton: {
    marginTop: 10,
    backgroundColor: '#32CD32',
    paddingVertical: 8,
    borderRadius: 5,
  },
  learnMoreText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  newsletter: {
    backgroundColor: '#333',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  newsletterInputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  emailInput: {
    flex: 3,
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  subscribeButton: {
    flex: 1,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  subscribeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newsletterFooter: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;

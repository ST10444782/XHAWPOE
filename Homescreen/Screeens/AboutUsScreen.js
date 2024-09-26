import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation for navigation

const AboutUsScreen = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (
    <ScrollView style={styles.container}>
      {/* Learn More Section */}
      <View style={styles.learnMoreSection}>
        <Text style={styles.learnMoreHeader}>Learn more</Text>
        <Text style={styles.learnMoreSubHeader}>about us!</Text>
        <Text style={styles.learnMoreText}>
          Founded with a commitment to uplift the community, EMP was inspired by the experiences of those who never had the chance to pursue formal education.
        </Text>
      </View>

      {/* History Section */}
      <View style={styles.section}>
        <Text style={styles.mainHeader}>Our History</Text>
        <Text style={styles.paragraph}>
          Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training Programmes to empower themselves and provide more marketable skills.
        </Text>
        <Image
          source={{ uri: 'https://example.com/history_image.png' }} // Replace with your image URI
          style={styles.image}
        />
      </View>

      {/* Mission Section */}
      <View style={[styles.section, styles.missionSection]}>
        <Text style={styles.mainHeader}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission at Empowering the Nation is to uplift and transform the lives of domestic workers and gardeners by providing them with high-quality, accessible skills training.
        </Text>
        <Image
          source={{ uri: 'https://example.com/mission_image.png' }} // Replace with your image URI
          style={styles.image}
        />
      </View>

      {/* Vision Section */}
      <View style={styles.section}>
        <Text style={styles.mainHeader}>Our Vision</Text>
        <Text style={styles.paragraph}>
          Our vision at Empowering the Nation is to become the leading provider of skills training for domestic workers and gardeners in South Africa. We aim to empower individuals to achieve economic independence, elevate their standards of living, and inspire a new generation of skilled professionals who contribute positively to society.
        </Text>
        <Image
          source={{ uri: 'https://example.com/vision_image.png' }} // Replace with your image URI
          style={styles.image}
        />
      </View>

      {/* Values Section */}
      <View style={styles.section}>
        <Text style={styles.mainHeader}>Our Values</Text>
        <View style={styles.valueBox}>
          <Image
            source={{ uri: 'https://example.com/excellence_image.png' }} // Replace with your image URI
            style={styles.valueImage}
          />
          <Text style={styles.valueText}>Excellence</Text>
        </View>
        <View style={styles.valueBox}>
          <Image
            source={{ uri: 'https://example.com/community_image.png' }} // Replace with your image URI
            style={styles.valueImage}
          />
          <Text style={styles.valueText}>Community</Text>
        </View>
        <View style={styles.valueBox}>
          <Image
            source={{ uri: 'https://example.com/integrity_image.png' }} // Replace with your image URI
            style={styles.valueImage}
          />
          <Text style={styles.valueText}>Integrity</Text>
        </View>
      </View>

      {/* TouchableOpacity to Navigate to Contact Details */}
      <TouchableOpacity 
        style={styles.learnMoreButton}
        onPress={() => navigation.navigate('ContactDetailsScreen')}  // Navigation to ContactDetails screen
      >
        <Text style={styles.learnMoreText}>Contact US</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7E8', // Soft green background
  },
  learnMoreSection: {
    backgroundColor: '#E0F7E8',
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: 'center',
  },
  learnMoreHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4F0D94', // Purple for the Learn More Header
  },
  learnMoreSubHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D9C41', // Dark green
    marginBottom: 10,
  },
  learnMoreText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#333',
    marginBottom: 20,
  },
  section: {
    padding: 20,
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1D9C41', // Darker green for section titles
  },
  paragraph: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  missionSection: {
    backgroundColor: '#D0EAE5', // Light gray for mission section
    borderRadius: 10,
  },
  valueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  valueImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1D9C41', // Dark green for value text
  },
  learnMoreButton: {
    marginTop: 20,
    backgroundColor: '#32CD32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  learnMoreText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default AboutUsScreen;


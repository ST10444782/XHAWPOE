import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('General Inquiry');

  // Function to handle form submission
  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !phoneNumber ) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    // Form data to be submitted
    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject: selectedSubject,
      message,
    };

    console.log('Form Submitted:', formData);
    Alert.alert('Success', 'Your message has been sent.');

    // Clear the form after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.header}>Contact Information</Text>
        <Text style={styles.subHeader}>Say something to start a live chat!</Text>
        <Text style={styles.phone}>+27 11 123 4567</Text>
        <Text style={styles.email}>info@empowerthenation.co.za</Text>
        <Text style={styles.address}>123 Mandela Avenue, Sandton, Johannesburg</Text>
        <View style={styles.socialIcons}>
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        {/* Subject selection */}
        <Text style={styles.radioHeader}>Select Subject:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedSubject('General Inquiry')}
          >
            <View
              style={selectedSubject === 'General Inquiry' ? styles.radioSelected : {}}
            />
          </TouchableOpacity>
          <Text style={styles.radioText}>General Inquiry</Text>
        </View>

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Write your message..."
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#22b14c', // Green background
    borderRadius: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
  },
  phone: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: '#fff',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: '#000',
    borderRadius: 20,
  },
  formContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  radioHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#22b14c',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#22b14c',
  },
  radioText: {
    fontSize: 14,
  },
  messageInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#22b14c',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactForm;

    
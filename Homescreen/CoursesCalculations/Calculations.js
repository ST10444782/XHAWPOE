
 

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const products = [
    { id: '1', name: 'First Aid', price: 1500 },
    { id: '2', name: 'Sewing', price: 1500 },
    { id: '3', name: 'Landscaping', price: 1500 },
    { id: '4', name: 'Life Skills', price: 1500 },
    { id: '5', name: 'Child Minding', price: 750 },
    { id: '6', name: 'Garden Maintenance', price: 750 },
    { id: '7', name: 'Cooking', price: 750 },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCart);
    setTotalPrice(totalPrice - product.price);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R{item.price}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartImage} />
      <Text style={styles.cartName}>{item.name}</Text>
      <Text style={styles.cartPrice}>R{item.price}</Text>
      <TouchableOpacity style={styles.cancelButton} onPress={() => removeFromCart(item)}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.header}>Available <Text style={styles.greenText}>Courses</Text></Text>

      {/* Products List */}
      <FlatList 
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productList}
      />

      {/* Shopping Cart */}
      <View style={styles.cartSection}>
        <Text style={styles.cartHeader}>Shopping Cart</Text>
        <FlatList 
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
        />
        <Text style={styles.totalPrice}>Total: R{totalPrice}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.buttonText}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F2F3F4',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  greenText: {
    color: 'green',
  },
  productList: {
    paddingBottom: 20,
  },
  productItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
 
  productName: {
    fontSize: 18,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
  addToCartButton: {
    backgroundColor: '#008CBA',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartSection: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  cartHeader: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartImage: {
    width: 50,
    height: 50,
  },
  cartName: {
    fontSize: 18,
  },
  cartPrice: {
    fontSize: 16,
    color: 'green',
  },
  cancelButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});


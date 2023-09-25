import React, { useState } from 'react';
import { StyleSheet, Text, } from "react-native";
import { View, TextInput, Button } from 'react-native';
import { getMilk, sellMilk } from '../actions/transactions';


// Import the functions you need from the SDKs you need


import { getFirestore, collection, addDoc } from "firebase/firestore";


  


var current_user='elivery';
console.log(current_user);

  const Home = ({ navigation }) => {
    const [addAmount, setAddAmount] = useState('');
    const [sellAmount, setSellAmount] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    
    const handleAddMilk = () => {
      const transaction = { shop: 'Milk Shop', amount: addAmount };
      const action = getMilk(transaction);
      console.log('Dispatching add action:', action);
      // Destructure the payload from the action
      const { id, shop, amount, time } = action.payload;

      const milkCollection = collection(db, "MilkInventory");

      addDoc(milkCollection, {
        Shop: shop,
        Amount: amount,
        Time: time,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      
    };
  
    const handleSellMilk = () => {
      const transaction = { shop: 'Milk Shop', amount: sellAmount };
      const action = sellMilk(transaction);
      console.log('Dispatching sell action:', action);
      // Perform any other logic or actions you need here
      const { id, shop, amount, price ,time } = action.payload;
      const Sales = collection(db, "Sales");

      addDoc(Sales, {
        Shop: shop,
        Amount: amount,
        Price:price,
        Time: time,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });


    };
  
    const handleDepositMilk = () => {
      const transaction = { shop: 'Milk Shop', amount: depositAmount };
      const action = deposit(transaction);
      console.log('Dispatching deposit action:', action);
      // Perform any other logic or actions you need here
    };
  
    if (current_user === 'delivery') {
      return (
        <View style={styles.container}>
        <Text>Milk Available</Text>
        <Text>Add</Text>
        <TextInput
          style={styles.input}
          placeholder="Litres"
          value={addAmount}
          onChangeText={(text) => setAddAmount(text)}
        />
        <Button title="Add" onPress={handleAddMilk} />
       
        <Text>Sell</Text>
        <TextInput
          style={styles.input}
          placeholder="Litres"
          value={sellAmount}
          onChangeText={(text) => setSellAmount(text)}
        />
        <Button title="Deposit" onPress={handleDepositMilk} />

        <Text>Deposit</Text>
        <TextInput
          style={styles.input}
          placeholder="Litres"
          value={depositAmount}
          onChangeText={(text) => setDepositAmount(text)}
        />
        <Button title="Deposit" onPress={handleDepositMilk} />
        {/* Rest of your UI */}
      </View>
      );
    } else {
      return (
        <View style={styles.container}>
        <Text>Milk Available</Text>
        <Text>Add</Text>
        <TextInput
          style={styles.input}
          placeholder="Litres"
          value={addAmount}
          onChangeText={(text) => setAddAmount(text)}
        />
        <Button title="Add" onPress={handleAddMilk} />
  
        <Text>Sell</Text>
        <TextInput
          style={styles.input}
          placeholder="Litres"
          value={sellAmount}
          onChangeText={(text) => setSellAmount(text)}
        />
        <Button title="Sell" onPress={handleDepositMilk} />
      
        
        {/* Rest of your UI */}
      </View>
      );
    }
  };
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Home;
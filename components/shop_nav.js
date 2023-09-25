import { View, TextInput, Button, StyleSheet } from 'react-native';



const shopScreen=({ navigation } )=> {

function ViewShop(shopName){
    navigation.navigate(shopName);
}


    return(
 <View style={styles.container}>
       <Button title="Shop1" onPress={ViewShop(shop1)} />
       <Button title="Shop2" onPress={ViewShop(shop2)} />
    </View>
    );

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
  
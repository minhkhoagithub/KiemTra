// import { Image } from 'expo-image';
// import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useState } from 'react';
export default function HomeScreen() {
  const [soMot, setSoMot] = useState(0);
  const [soHai, setSoHai] = useState(0);
  const [ketqua, setKetQua] = useState(0)
const khong = 0;
  const mot = 1;
  const hai = 1;
  const ba = 1;
  const bon = 1;
  const nam = 1;
  const sau = 1;
  const bay = 1;
  const tam = 1;
  const chin = 9
  // const bamso = ()=>{
  //   setSoMot()
  // }

  const Tong =()=>{
    const total = soMot + soHai;
    setKetQua(total)
  }
  const Hieu =()=>{
    const total = soMot - soHai;
    setKetQua(total)
  }
  const Nhan =()=>{
    const total = soMot * soHai;
    setKetQua(total)
  }
  const chia =()=>{
    const total = soMot / soHai;
    setKetQua(total)
  }


  return (

  <View style={styles.container}>
    
    <View >
      <View style={styles.tableNum}>
    <TouchableOpacity style={styles.number}>
      <Text>{khong}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{mot}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{hai}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{ba}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{bon}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.tableNum}>
    <TouchableOpacity style={styles.number}>
      <Text>{nam}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{sau}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{bay}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{tam}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>{chin}</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.tableNum}>
      <TouchableOpacity style={styles.number}>
      <Text>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>-</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>X</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>:</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.number}>
      <Text>delete</Text>
    </TouchableOpacity>
    </View>
    <Text style={{color: 'white'}}>Phep tinh</Text>
    <Text style={styles.price}>{ketqua}</Text>
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    backgroundColor: "gray",
  },
  tableNum: {
    flexDirection: 'row',
    width: 300, 
  },
  number: {
    height:50,
    width: 50,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  productBox: {
    flexDirection: "row",
    backgroundColor:'white',
    // marginBottom: 16,
    padding: 20,
  },
  productImage: {
    width: 90,
    height: 120,
    resizeMode: "contain",
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  seller: {
    color: "#666",
    marginVertical: 4,
  },
  price: {
    color: "#d0021b",
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 8,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  qtyText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  discountBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 40,
  },
  applyBtn: {
    backgroundColor: "#007aff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 8,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    backgroundColor: 'white',
    padding: 20,
  },
  subtotalLabel: {
    fontSize: 16,
  },
  subtotalPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#d0021b",
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "700",
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#d0021b",
  },
  orderBtn: {
    backgroundColor: "#d0021b",
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 20,
    alignItems: "center",
  },
  orderBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    backgroundColor: 'white',
     padding: 20,
     marginTop: 150

  },
  priceBefore: {
    textDecorationLine: "line-through",
    borderColor: 'red',
    borderStyle: 'solid',
     borderWidth: 2,
     width: 70
  }
});

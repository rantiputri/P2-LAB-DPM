import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DimensionExample = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Ranti Putri Nian</Text>

      {/* Dua kotak di sisi kiri dan kanan */}
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak teks dengan kotak
  },
  row: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Lebar area row agar jarak antar kotak terjaga
  },
  box1: {
    backgroundColor: '#1e90ff', // Warna biru terang
    width: 100,
    height: 100, // Ukuran kotak 100x100
    borderRadius: 10, // Sudut membulat
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  box2: {
    backgroundColor: '#ff4757', // Warna merah cerah
    width: 100,
    height: 100, // Ukuran kotak 100x100
    borderRadius: 10, // Sudut membulat
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default DimensionExample;

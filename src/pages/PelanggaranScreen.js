import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Title from '../components/Title';
import FilterPelanggaran from '../components/Pelanggaran/FilterPelanggaran'
import PelanggaranList from '../components/Pelanggaran/PelanggaranList'

const PelanggaranScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.pageArea}>
      <Header></Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Riwayat Pelanggaran" />
        <FilterPelanggaran />
        <PelanggaranList />
      </ScrollView>
      <Navbar></Navbar>
    </SafeAreaView>
  );
};

export default PelanggaranScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
    marginVertical: 50,
  },
  pageArea: {
    height: '100%',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    alignContent: 'center',
  },
});

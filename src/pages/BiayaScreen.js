import 'react-native-gesture-handler';
import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Title from '../components/Title';
import FilterBiaya from '../components/Biaya/FilterBiaya';
import BiayaList from '../components/Biaya/BiayaList';
import {useQuery, gql} from '@apollo/client';

const GET_ACTIVITIES = gql`
  query Get_Activities($id: ID!) {
    user(id: $id) {
      student {
        bills {
          id
          semester
          status
          keperluan
          tahun
          tanggal_pembayaran
          nominal
          nominal_dibayar
          sisa_pembayaran
          keterangan
        }
      }
    }
  }
`;

const BiayaScreen = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_ACTIVITIES, {
    variables: {id: '2'},
  });

  const [lunas, setLunas] = React.useState(true);
  const [belumLunas, setBelumLunas] = React.useState(true);

  if (loading) return <Text>Loading</Text>;
  if (error) {
    console.log(error);
    return <Text>Upsss maaf terjadi error</Text>;
  }

  return (
    <SafeAreaView style={styles.pageArea}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.bagianScroll}>
        <Title backRoute="Home" title="Biaya" />
        <FilterBiaya
          lunas={lunas}
          setLunas={setLunas}
          belumLunas={belumLunas}
          setBelumLunas={setBelumLunas}
        />
        <BiayaList
          data={data.user.student.bills.filter((item) => {
            if (
              (lunas && item.status === 'Lunas') ||
              (belumLunas && item.status === 'Belum Lunas')
            )
              return true;
          })}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BiayaScreen;

const styles = StyleSheet.create({
  bagianScroll: {
    backgroundColor: '#fff',
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

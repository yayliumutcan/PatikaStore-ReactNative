import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 3.9,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'contain',
  },
  innerContainer: {
    padding: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  price: {
    marginTop: 5,
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 17,
  },
  TrueColor: {
    fontSize: 17,
    fontWeight: '700',
    color: 'green',
    marginTop: 5,
  },
  FalseColor: {
    fontSize: 17,
    fontWeight: '700',
    color: 'red',
    marginTop: 5,
  },

});
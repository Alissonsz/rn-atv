import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#00AA00'
  },
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    width: '50%',
    padding: 16
  },
  buttonText: {
    color: 'black'
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  }
});

export default styles;

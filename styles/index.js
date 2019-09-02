import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFB6',
  },

  header: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  body: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});
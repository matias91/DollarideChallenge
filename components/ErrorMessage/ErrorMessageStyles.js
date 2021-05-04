// @Vendors
import { StyleSheet } from 'react-native';

// @Constants
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
    borderRadius: 5,
    bottom: 40,
    height: 25,
    justifyContent: 'center',
    position: 'absolute',
    width: '80%'
  },
  errorText: {
    color: Colors.white,
    fontWeight: 'bold'
  }
});

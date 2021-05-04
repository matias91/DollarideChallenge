// @Vendors
import { StyleSheet } from 'react-native';

// @Constants
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%'
  },
  input: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    borderRadius: 35,
    borderWidth: 1,
    fontSize: 16,
    height: 50,
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  predictionsTable: {
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    borderRadius: 5,
    borderWidth: 1
  },
  predictionsTextBorder: {
    borderColor: Colors.lightGray,
    borderTopWidth: 1
  },
  predictionsText: {
    color: Colors.gray,
    fontSize: 16,
    padding: 10
  },
});
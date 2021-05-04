// @Vendors
import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

// @Styles
import styles from './ErrorMessageStyles';

const ErrorMessage = ({ errorMessage }) => {
  return errorMessage ?
    (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>
    ) : null;
};

const mapStateToProps = ({ google }) => ({
  errorMessage: google.errorMessage
});

export default connect(
  mapStateToProps,
  null
)(ErrorMessage);

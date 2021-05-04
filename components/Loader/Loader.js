// @Vendors
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// @Constants
import Colors from '../../constants/Colors';

// @Styles
import styles from './LoaderStyles';

export default function Loader() {
  return (
    <>
      <View style={[styles.fullScreen, styles.background]} />
      <ActivityIndicator style={styles.fullScreen} size={'large'} color={Colors.primaryColor} />
    </>
  );
};

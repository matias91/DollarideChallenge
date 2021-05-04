// @Vendors
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';

// @Components
import CustomMap from '../../components/CustomMap/CustomMap';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import PlacesInput from '../../components/PlacesInput/PlacesInput';

// @Actions
import GoogleActions from '../../redux/GoogleRedux';

const MapScreen = ({ fetching, googleDirections, userLocation }) => {
  const origin = `${userLocation[1]},${userLocation[0]}`;

  const predictionAction = (placeId) => {
    googleDirections(origin, `place_id:${placeId}`);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ position: 'absolute', zIndex: 10, width: '100%' }}>
        <PlacesInput onSelectPrediction={predictionAction} userLocation={origin} />
      </View>
      <CustomMap />
      <ErrorMessage />

      {fetching && <Loader />}
    </SafeAreaView>
  );
};

const mapStateToProps = ({ google }) => ({
  fetching: google.fetching,
  userLocation: google.userLocation
});

const mapDispatchToProps = {
  googleDirections: GoogleActions.googleDirectionsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapScreen);

// @Vendors
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Icon from 'react-native-vector-icons/Ionicons';

// @Actions
import GoogleActions from '../../redux/GoogleRedux';

// @Constants
import Colors from '../../constants/Colors';

MapboxGL.setAccessToken("pk.eyJ1IjoibWF0aWFzOTEiLCJhIjoiY2tvN2d2aXQ4MDY3eDJwcGp5YnEzbjh2dCJ9.zqX5CBNxN6OksJP1_PCsSg");

CustomMap = ({ children, destinationCoords, googleDirections, predictionsLength, setUserLocation, resetPredictions, routes, userLocation }) => {

  const renderRoute = () => {
    const { steps } = routes[0].legs[0];

    return steps.map((step, index) => (
      <MapboxGL.ShapeSource
        key={`line-${index}`}
        id={`line-${index}`}
        shape={{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [step.start_location.lng, step.start_location.lat],
              [step.end_location.lng, step.end_location.lat],
            ],
          },
        }}
      >
        <MapboxGL.LineLayer
          id={`linelayer-${index}`}
          style={{
            lineColor: Colors.black,
            lineWidth: 10,
            lineCap: 'round',
          }}
        />
      </MapboxGL.ShapeSource>
    ));
  }

  return (
    <View style={{ flex: 1 }}>
      <MapboxGL.MapView style={{ flex: 1 }} onPress={() => !!predictionsLength && resetPredictions()}>
        <MapboxGL.UserLocation
          minDisplacement={10}
          onUpdate={location => {
            const currentCoords = [
              location.coords.longitude,
              location.coords.latitude,
            ];
            setUserLocation(currentCoords);

            if (destinationCoords) {
              const origin = `${currentCoords[1]},${currentCoords[0]}`;
              const destination = `${destinationCoords.lat},${destinationCoords.lng}`;
              googleDirections(origin, destination);
            }
          }}
          visible={false}
        />

        <MapboxGL.PointAnnotation
          selected={true}
          key="key1"
          id="id1"
          coordinate={userLocation}
        >
          <Icon name="location" size={35} color={Colors.primaryColor} />
        </MapboxGL.PointAnnotation>

        {
          destinationCoords &&
          <MapboxGL.PointAnnotation
            selected={true}
            key="key2"
            id="id2"
            coordinate={[destinationCoords.lng, destinationCoords.lat]}
          >
            <Icon name="location" size={35} color={Colors.secondaryColor} />
          </MapboxGL.PointAnnotation>
        }

        {routes && renderRoute()}

        <MapboxGL.Camera
          zoomLevel={14}
          centerCoordinate={userLocation}
        />

        {children}
      </MapboxGL.MapView>
    </View>
  );
};

const mapStateToProps = ({ google }) => ({
  destinationCoords: google.routes.length ? google.routes[0].legs[0].end_location : null,
  predictionsLength: google.predictions.length,
  routes: google.routes.length ? google.routes : null,
  userLocation: google.userLocation
});

const mapDispatchToProps = {
  googleDirections: GoogleActions.googleDirectionsRequest,
  resetPredictions: GoogleActions.resetPredictions,
  setUserLocation: GoogleActions.setUserLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomMap);


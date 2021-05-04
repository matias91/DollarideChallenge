// @Vendors
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

// @Actions
import GoogleActions from '../../redux/GoogleRedux';

// @Styles
import styles from './PlacesInputStyles';

function PlacesInput({
  googleAutocomplete,
  language = 'EN',
  onSelectPrediction,
  predictions = [],
  userLocation
}) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!predictions.length)
      setFocus(false)
  }, [predictions]);

  const changePredictions = (input) => {
    !!input && googleAutocomplete(input, language, userLocation)
  }

  const onChangeTextInput = value => {
    setFocus(!!value);
    setValue(value);
    changePredictions(value);
  }

  const onPressPrediction = prediction => {
    onSelectPrediction(prediction.place_id);
    setFocus(false);
    // changePredictions([]);
  }

  const predictionsTable = (
    <View style={styles.predictionsTable}>
      {predictions.map(prediction =>
        <View key={prediction.place_id}>
          <TouchableWithoutFeedback onPress={() => { onPressPrediction(prediction) }}>
            <Text style={styles.predictionsText}>{prediction.description}</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  )

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeTextInput}
        onBlur={() => setFocus(false)}
        style={styles.input}
        value={value}
      />
      {!!predictions.length && focus && predictionsTable}
    </View>
  );
}

const mapStateToProps = ({ google }) => ({
  predictions: google.predictions
});

const mapDispatchToProps = {
  googleAutocomplete: GoogleActions.googleAutocompleteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesInput);

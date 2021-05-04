// @Vendors
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';

// @Store
import store from './redux';

// @Screens
import MapScreen from './screens/MapScreen/MapScreen';

Icon.loadFont();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MapScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

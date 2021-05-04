module.exports = {
  preset: 'react-native',

  testPathIgnorePatterns: [
    '/node_modules/'
  ],

  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?@react-native|react-native|@react-native-mapbox-gl/maps|react-native-vector-icons))'
  ],

  automock: false,
  setupFilesAfterEnv: [
    '@react-native-mapbox-gl/maps/setup-jest'
  ]
};

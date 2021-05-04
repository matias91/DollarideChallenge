// @Config
import Environment from '../config/Environment';

const create = api => {
  const googleAutocomplete = ({ input, language, location }) =>
    api.get(`/place/autocomplete/json`, { input, key: Environment.GOOGLE_PLACES_API_KEY, language, location, radius: 500, types: 'address' });

  const googleDirections = ({ origin, destination }) =>
    api.get(`/directions/json`, { origin, key: Environment.GOOGLE_DIRECTIONS_API_KEY, destination });

  return {
    googleAutocomplete,
    googleDirections
  };

};

export default { create };

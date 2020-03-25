/* istanbul ignore file */
import axios from 'axios';
import {COLOURLOVERS_API} from 'react-native-dotenv';

export default axios.create({
  baseURL: COLOURLOVERS_API,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60 * 0.2 * 1000,
});

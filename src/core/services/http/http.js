import axios from 'axios';
import { setupInterceptors } from '../interceptor/interceptor';

export default setupInterceptors(axios.create({
  baseURL: 'http://localhost:4000/api/v1/parking/spaces',
  headers: {
    'Content-type': 'application/json'
  }
}));

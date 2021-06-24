import logo from './logo.svg';
import './App.css';
// import './core/services/interceptor/interceptor';
import ParkingLot from './components/parkinglot';

import axios from 'axios';

axios.interceptors.request.use(
  (req) => {
     // Add configurations here
     console.log(1);
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
    // modify response;
    console.log(2);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Parking Lot
        </p>
        <ParkingLot />
      </header>
    </div>
  );
}

export default App;

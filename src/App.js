import logo from './logo.svg';
import './App.css';
// import './core/services/interceptor/interceptor';
import ParkingLot from './components/parkinglot';

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

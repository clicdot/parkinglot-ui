import React, { useEffect, useState } from 'react';
import api from '../core/services/http/http.services';
import './parkinglot.css';

const ParkingLot = () => {
  const [spaces, setSpaces] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    api.getSpace(name, value)
    .then((res) => {
      setSpaces(res);
    })
    .catch(e => {
      console.error(e);
    });
  };

  useEffect(() => {
    retrieveSpaces();
    retrieveSpaces();
  }, []);

  const retrieveSpaces = () => {
    api.getAll()
    .then((res) => {
      setSpaces(res);
    })
    .catch(e => {
      console.error(e);
    });
  }

  return (
    <div>
      <div>
        <fieldset className="legend">
          <legend>Legend:</legend>
          <div style={{"float": "right", "fontSize": "10px", "width": "200px", "textAlign": "right"}}>
            Click on Building ['A1', 'A2', etc...] to get assigned parking spot.
          </div>
          <div style={{"textAlign": "left", "fontSize": "22px"}}>
            <div className="legend-lot-space--empty"></div> Empty
          </div>
          <div style={{"textAlign": "left", "fontSize": "21px"}}>
            <div className="legend-lot-space--occupied"></div> Occupied
          </div>
        </fieldset>
      </div>

      <table>
        <tbody>
        {spaces && spaces.map((space, index) => (
          <tr key={index}>
            <td><button title="Click Me" className={`building ${space.active ? '' : 'hidden'}`} name={space.building} value="1" onClick={handleInput}>{space.building}1</button></td>
            <td style={{"width": "500px"}}>
              {space && space.spaces.map((lot, idx) => {
                const key = Object.keys(lot);
                const lotspace = key[0];
                const occupied = lot[key];

                return (
                  <div key={idx}>
                    <div className={`lot-space ${occupied ? 'occupied' : 'empty'}`}>{lotspace}</div>
                  </div>
                );
              })}
            </td>
            <td><button title="Click Me" className={`building ${space.active ? '' : 'hidden'}`} name={space.building} value="2" onClick={handleInput}>{space.building}2</button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParkingLot;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage() {
  // const [continuous, setContinuous] = useState(false);

  const [data, setData] = useState([]);
  const [continuous, setContinuous] = useState(false);
  const [listInterval, setListInterval] = useState([]);

  

// useEffect(() => {
//   runRequest();

// }, [continuous])


const runRequest = () => {
if (!continuous) {
  setListInterval([]);
}

  while (continuous) {
    const interval = setInterval(() => {
      axios.get('http://3.239.71.115:8080/')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);
  setListInterval([...listInterval, interval]);
  }

}

const changeStatusContinuous = () => {
setContinuous(!continuous);
runRequest();
console.log('ejg')

}
  return (
    <div>
      <button onClick={changeStatusContinuous}>Start</button>
      <button onClick={changeStatusContinuous}>Stop</button>
    </div>
  );
}
export default MainPage;


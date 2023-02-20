import MainPage from './Component/Main';
import './App.css';

function App() {
//   const startTime = new Date().getTime();
// fetch('http://3.239.71.115:8080/')
//   .then(response => {
//     const endTime = new Date().getTime();
//     const responseTime = endTime - startTime;
//     console.log(`Response time: ${responseTime}ms`);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;

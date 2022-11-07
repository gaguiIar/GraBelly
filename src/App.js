
import './App.css';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with project config
const firebaseConfig = {
  apiKey: "AIzaSyCGQ0tYppWFJkuSxBhOpkH0xVDmX245Vdc",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "637908496727",
  appId: "2:637908496727:web:a4284b4c99e329d5",
  measurementId: "G-9VP01NDSXJ"
};

const app = initializeApp(firebaseConfig);
// Initialize Analytics
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">

        <img src="https://media2.giphy.com/media/0O5NwsKlbgN2EF3q6x/giphy.gif?cid=6c09b9529jjkoox2x0q3dkr3bryy0ka2ynew0r3gftrwlcex&rid=giphy.gif&ct=s" width= "500px" alt="spinning globe gif"></img>
        <h1>hello world</h1>
    </div>
  );
}

export default App;

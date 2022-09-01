import './App.css';
import Quiz from './component/Quiz';
import axios from 'axios';


export const api = axios.create({
  baseURL: `http://localhost:3000/Question`
})

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;

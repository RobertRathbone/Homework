import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Boxes from './components//Todo/Boxes';
import New from './components//Todo/New';

// redux

function App() {

  const [boxes, setBoxes] = useState([
    {task: "rake", status: false},
    {task: "cook", status: true},
    {task: "clean", status: false},
  ])

  const createBox = (box) => {
    setBoxes([...boxes, box])
  };

  const deleteBox = (deleteIndex) => {
    setBoxes(boxes.filter((box, i) => i !== deleteIndex ? true : false));
  }

  const updateBox = (idx) => {
    const copyBoxes = [...boxes];
    copyBoxes[idx].status = !copyBoxes[idx].status;
    setBoxes(copyBoxes);
  }

  return (
    <div className="App">
      <h1>task world!</h1>
      <New createBox={createBox}/>
      <Boxes boxes={boxes} deleteBox={deleteBox} updateBox={updateBox} />
    </div>
  );
}

export default App;


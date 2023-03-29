import logo from './logo.svg';
import './App.css';
import FlashCard from './FlashCard';

function App() {
  const QUESTIONS = [{front: "question1", back:"answer1"},
                    {front: "question2", back:"answer2"},
                    {front: "question3", back:"answer3"},]

  return (
    <div className="App">
      {QUESTIONS.map(ele => {
        return <FlashCard front={ele.front} back={ele.back}/>
      })}

    </div>
  );
}

export default App;

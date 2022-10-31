import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';

let name = "sambhav";

function App() {
  return (
    <>
      <Navbar title="textUtils"/>
      <TextForm />
    </>
  );
}

export default App;

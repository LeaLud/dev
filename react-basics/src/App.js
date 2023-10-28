import logo from './logo.svg';
import './App.css';
import Component from './newapp';

const Message = (props) => {
  console.log(props)
  return <div><img src={logo} className="App-logo" alt="logo" /></div>
}

function Description(props){
  console.log(props)
  return <h2 style={{ color: props.color}}>
    {props.msg}</h2>
}

function App() {
  return (
    <div className="App">
      <Message msg="clase react" color="blue" />
      <Description msg="con imagen" color="red" />
      <Message msg="segundo mensaje" />
      <Description msg="tercer mensaje" color="blueviolet" />
    </div>
  );
}

export default App;

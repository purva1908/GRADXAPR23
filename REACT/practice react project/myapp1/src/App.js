
import './App.css';
import   FirstComp from './firstComp';
import AppStyle from './appStyle';

function App(props) {
  return (
    <div className="App">
    
      <h1>Madhav</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
   <FirstComp/>

   <AppStyle/>
    </div>
  );
}

export default App;

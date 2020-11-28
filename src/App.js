
import './App.css';
import Food from "./food";
import Counter from "./counter";

function App() {
  return (
    
      <div>

        <h1>Happy Learning!! React</h1>
     
<br/>
<hr/>
      <div>
        <Food Dinner="Chicken Biryani" Sweet="Kheer"/>
        <Food Dinner="Nihari" Sweet="Jalebi"/>
        <Food Dinner="Chicken Qorma" Sweet="Dodh Dulari"/>
      </div>
      
      <br/>
      <hr/>
      <Counter />
      </div>
    
  );
}

export default App;

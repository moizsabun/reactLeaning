import React ,{useState}from "react";
import  Message from "./message";

function Counter()
{

    let [count, setCounter] = useState(1);

    return (<div>
      <Message Count= {count}> </Message>
        <button onClick= {()=> setCounter(++count) }> Update Counter</button>
        <button onClick= {()=> setCounter(0) }> Reset Counter</button>
            </div>);


}

export default Counter;
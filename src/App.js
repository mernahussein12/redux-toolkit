import { useSelector,useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
const globaleState = useSelector((state)=>state);
  const handelCounterValue = (value) => {
   if (value < 1){
    return 'no number';
   }
   return value;
  };

  

const CounterOperation = (type, payload) => {
  dispatch({type,payload})
};


const toggleCounter =() => {
  dispatch({type:'toggleCounter'});
}


  return (
    <div className="text-center">
      <h1 className=" ">Hello Redux Basic</h1>
      {globaleState.showCounter &&(
        <>
      <div className="counter m-2 ">Counter: {handelCounterValue(globaleState.value)}</div>
      <div className="p-2">
      <button className="btn bg-primary" onClick={()=>CounterOperation('increase', 5)}>increase +</button>
      <button className="btn bg-danger" onClick={()=>CounterOperation('decrease', 2)}>decrease -</button>
      </div>
      </>
  )}
      <div className="p-2" >
  <button className="btn bg-info" onClick={toggleCounter}>Hide/Show Counter Number</button>
</div>
    </div>
  )};
 

export default App;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./todoslice";
const App =()=>{
  const [data,setData]=useState("");
  const Data = useSelector((state)=>state.todo.task);
  console.log(Data);
  const dispatch=useDispatch();
  const txtDataAdd=()=>{
    dispatch(addData({id:Date.now(), work:data}));
  }
  let sno=0;
  const ans=Data.map((key)=>{
    sno++;
    return(
      <>
        <tr>
          <td>{sno}</td>
          <td>{key.work}</td>
        </tr>
      </>
    )
  })
  return(
    <>
    <h1>This is a ToDo list app</h1>
    Enter  task : <input type="text" value={data}
    onChange={(e)=>{setData(e.target.value)}} />
    <button onClick={txtDataAdd}>Add</button>
    <hr />
    <table>
      <tr>
        <td>Sno</td>
        <td>Your task</td>
      </tr>
      {ans}
    </table>

    </>
  )
}
export default App;
import React,{useState,useEffect} from 'react'
import database from "./firebase"
import firebase from 'firebase'
import './App.css';

function App() {
const [input,setinput]=useState("");
const [values,setValues]=useState([]);
useEffect(()=>{
    database.collection("messages").orderBy("timestamp","desc").onSnapshot(snapshop => setValues(snapshop.docs.map(doc=>
      ({
        id:doc.id,data:doc.data()
      }))))
},  [])

  function savetodatabase(value)
  {
    database.collection("messages").add({
      message:value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setinput("")
  }

function deletedata(value){
  database.collection("messages").doc(value).delete();
}

function Editdata(id,value){
  database.collection("messages").doc(id).set({
    message: value,
  },{merge:true})
}




  return (
    <div className="App">
      <header>
      <input type="text" placeholder="Data input...." value={input} onChange={()=>setinput(document.querySelector("input").value)} />
      <button disabled={!input} onClick={()=>savetodatabase(input)}> Save to database</button>
        
      </header>
      <div className="messages">
      {values.map(item =>  (<ul><li>{item.data.message} <div><button onClick={()=>deletedata(item.id)}> Delete </button><button onClick={()=>Editdata(item.id,"Test")}>Edit </button> </div> </li></ul>))}
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Urlap from './Urlap';
import Lista from './Lista';

export default function App() {
  const [list, setList] = useState([]);
  const [nextId, setNextId] = useState(1);

  function add(){
    let tipus = document.getElementById("tipus").value;
    let db = 0;
    if(document.getElementById("egy").checked) db = 1;
    if(document.getElementById("ketto").checked) db = 2;
    if(document.getElementById("harom").checked) db = 3;
    let mappa = document.getElementById("map").checked;
    let ujFajl = {id:nextId, tipus:tipus, db:db, mappa:mappa};
    setNextId(nextId+1);
    setList([...list, ujFajl]);
  }

  console.log(list);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  return (
    <div className='app'>  
      <Urlap add={add}/>
      <Lista list={list} />
    </div>
  )
}
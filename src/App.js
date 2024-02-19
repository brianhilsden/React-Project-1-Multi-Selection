import './App.css'
import Collapsed from './collapsed_main'
import data from './collapsed_data'
import { useState } from 'react'

function App(){


  const [myData,setMyData]=useState(data);
  const[multi,setMulti]=useState(false);

  function moreDetails(id){
    if (multi===true){
      setMyData(prevData=>prevData.map(ite=>(ite.id===id?{...ite,isCollapsed:!ite.isCollapsed}:ite)))
    }
    else{
      setMyData(prevData=>prevData.map(item=>(item.id===id?{...item,isCollapsed:!item.isCollapsed}:{...item,isCollapsed:false})))
    }
    
  }
  function multiSelection(id){
    setMulti(prev=>!prev)
    if (multi===true){
      setMyData(prevData=>prevData.map(ite=>({...ite,isCollapsed:false})))


    }
    
  }

  const mappedCollapsed=myData.map(item=>(
    <Collapsed key={item.id} id={item.id} item={item} moreDetails={moreDetails}    />
  ))

  return(
    <div className='App'>
      <h1 className='project1-title'>Project 1:   Multi Selection</h1>
      <h1 className='App--title'>Software Engineering</h1>
      <div className='App--button'>
        <button onClick={multiSelection}><h1>{multi?"Disable Multi Selection":"Enable Multi Selection"}</h1></button>
      </div>
      
      <div className='group_mapped'>
        {mappedCollapsed}
      </div>
    </div>

)
}

export default App;
import Header from './components/Header/index';
import History from './components/History/index';
import './App.css';
import { DATA_HISTORY } from './constants/data-history';
import {useState, useEffect} from 'react';
function App() {
  
  const [input, setInput] = useState('');
  const [dataList, setDataList] = useState(DATA_HISTORY);
  const removeItem = (id)=>{
    setDataList(prev=>prev.filter((item)=> item.id !== id));
  }

  useEffect(()=>{
    
    setDataList(DATA_HISTORY.filter(item => {
      
      const {displayName, url} = item;
      return displayName.toLowerCase().includes(input.toLowerCase()) || url.toLowerCase().includes(input.toLowerCase())
      
    }))
  },[input])
  
  return (
    <div className="App">
      <Header setInput={setInput} input={input} />
      <History input={input} dataList={dataList} removeItem={removeItem}/>
    </div>
  );
}

export default App;

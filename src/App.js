import { Input } from 'antd';
import './App.css'
import TextFlow from './TextFlow';
import { useEffect, useState } from 'react';
import axios from 'axios';
const { Search } = Input;



const onSearch = value => console.log(value);

function App() {
  const [data, setData] = useState('');

  const santinizeName = (text) => {
      return text.replace(/你/, "李科琪");
  }

  useEffect(() => {
      const fetchData = async()=>{
          const result1 = await axios.get(
          'api1/api.php',
        );
        const result2 = await axios.get(
          'api2/caihongpi',
        );
        const result3  = await axios.get(
          'api3/chp.php',
        )
       //   const res = result1.data.indexof('频繁') > 0? result2.data.comment : result1.data;
       const res1 = result1.data;
       const res2 = result2.data.comment;
       const res3 = result3.data;
       const resDefault = '';
        setData(santinizeName(res3));
      }
     fetchData();
  },[]); 

  return (
    <div className="App">
          {/* <TextFlow></TextFlow> */}
          <Search
            className="search"
            placeholder={data}
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          {/* <Battery></Battery> */}
    </div>
  );
}

export default App;

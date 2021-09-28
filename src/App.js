import { Input } from 'antd';
import {Quote} from './Quote'
import {SwiperQuote} from './SwiperQuote'
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
const { Search } = Input;



const onSearch = value => {
  window.location.assign('https://www.baidu.com/s?wd=' + value + '_blank');
}

function App() {
  const [data, setData] = useState([]);

  const santinizeName = (text) => {
      return text.replace(/你/, "李科淇");
  }

  useEffect(() => {
      const fetchData = async()=>{
          const result1 = await axios.get(
          'api1/api.php',
        );
        const res1 = result1.data;
        return santinizeName(res1);
      }
      let i = 15;
      while (i--){
        setData(...data,fetchData());
      }
  },[]); 

  return (
    <div className="App">
          {/* <TextFlow></TextFlow> */}
          {/* <SwiperQuote data={data}></SwiperQuote> */}
            <Search
              className="search"
              placeholder={data?.[0]||''}
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

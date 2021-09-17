import { Input } from 'antd';
import { Layout } from 'antd';
import './App.css'
const { Search } = Input;
const { Header, Footer, Content, Sider } = Layout;

const onSearch = value => console.log(value);

function App() {
  return (
    <div className="App">
      <Layout>
        <Header></Header>
        <Layout>
        <Sider></Sider>
        <Content>
          <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        </Content>
        <Sider></Sider>
        </Layout>
        <Footer></Footer>
      </Layout>

    </div>
  );
}

export default App;

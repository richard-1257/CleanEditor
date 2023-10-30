import './App.css';
import Layout from './layout/Layout';
import { Context } from './context';
import { IState } from './model';
import Header from './components/header';
import {
  cssDefaultTemplate2,
  htmlDefaultTemplate2,
  javascriptDefaultTemplate2,
} from './config';

const initialState: IState = {
  html: htmlDefaultTemplate2,
  css: cssDefaultTemplate2,
  javascript: javascriptDefaultTemplate2,
  theme: 'dark',
};

function App() {
  const [state, dispatch] = useLocalStorage('state', initialState);

  return (
    <div className="App">
      <Header />

      <main>
        <Context.Provider value={{ state, dispatch }}>
          <Layout />
        </Context.Provider>
      </main>
    </div>
  );
}

export default App;

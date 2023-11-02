import './App.css';
import Layout from './layout/Layout';
import { Header } from './components/header';
import { cssDefaultTemplate2, htmlDefaultTemplate2 } from './config';
import { context } from './context';
import { IState } from './model';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialState: IState = {
  html: htmlDefaultTemplate2,
  css: cssDefaultTemplate2,
  theme: 'dark',
  javascript: '',
};

function App() {
  const [state, dispatch] = useLocalStorage('state', initialState);

  return (
    <div className="App">
      <Header />

      <main>
        <context.Provider value={{ state, dispatch }}>
          <Layout />
        </context.Provider>
      </main>
    </div>
  );
}

export default App;

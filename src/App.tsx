
import Header from './components/Header/Header.tsx';
import './App.scss';
import useTheme from './customHooks/useTheme.ts';


const App = () => {
  const { theme } = useTheme();
  console.log('render');
  

  return (
    <div className={theme}>
      <Header />
    </div>
  );
};

export default App;

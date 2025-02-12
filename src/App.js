import './App.scss';
import Header from './component/Header/Header';
const App = () => {
  const changeTitle = () => {
    setTimeout(() => {
      document.title = "Home";

    }, 3000)
  };
  return (

    <div>
      <Header />
      Hello Alex Nguyen
      <button
        onClick={() => { changeTitle() }}
        className='btn btn-primary'>Click</button>

    </div>
  )
};



export default App;

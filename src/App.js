import './App.scss';
import Header from './component/Header/Header';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './component/User/User';
import Admin from './component/Admin/Admin';
const App = () => {

  return (

    <div className='app-container'>
      <Header />
      <div>

        test
        <div>
          <button className='btn'>
            <Link to='/users' >  Go to user</Link>

          </button>
          <button className='btn '>
            <Link to='/admins' >     Go to admin</Link>

          </button>
        </div>
      </div>

    </div>
  )
};



export default App;

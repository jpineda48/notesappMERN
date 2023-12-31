
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../Componants/NavBar/NavBar';






export default function App() {
  const[user, setUser] = useState(getUser())
  return (
    <main className="App">
    { user ?
    <>
      <NavBar user={user} setuser={setUser}/>
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>

  );
}



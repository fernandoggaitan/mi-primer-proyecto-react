import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Menú
import { Menu } from './components/Menu';

//Contextos
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './context/ProtectedRoute';

//Páginas
import { PostsList } from './components/PostsList'
import { Inicio } from './components/Inicio'
import { Info } from './components/Info'
import { PostShow } from './components/PostShow';
import { Error404 } from './components/Error404';
import { Login } from './components/Login';
import { Welcome } from './components/Welcome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <Router>
        <Menu />
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/info' element={<Info />} />
            <Route path='/posts' element={<PostsList />} />
            <Route path='/posts/:idPost' element={<PostShow />} />
            <Route path='/login' element={<Login />} />
            <Route path='/welcome' element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            } />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>

  </React.StrictMode>
)
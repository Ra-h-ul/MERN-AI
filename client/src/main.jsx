import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import HomePage from './routes/homepage/HomePage';
import DashboardPage from './routes/dashboardpage/DashboardPage';
import ChatPage from './routes/chatpage/ChatPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage/>
    ),
  },
  {
    path: "/dashboard",
    
    children: [
      { path:"/dashboard",element: <DashboardPage/>},
      { path:"/dashboard/chats/:id", element:<ChatPage/>}],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

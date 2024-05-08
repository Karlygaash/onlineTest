import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Login from './Pages/Admin/Login';
import Choose from './Pages/Choose';
import Authorization from './Pages/User/Authorization';
import LoginUser from './Pages/User/LoginUser';
import MainLayout from './layout/MainLayout';
import Test from './Pages/Admin/Test';
import Profile from './Pages/Admin/Profile';
import Students from './Pages/Admin/Students';
import EditProfile from './Pages/Admin/EditProfile';
import ChangePassword from './Pages/Admin/ChangePassword';
import TestById from './Pages/Admin/TestById';
import AddTest from './Pages/Admin/AddTest';

function App() {
  const router=createBrowserRouter([
    {
      path: "/admin/login",
		  element: <Login/>
    },
    {
      path: "/user/login",
		  element: <LoginUser/>
    },
    {
      path: "/",
		  element: <Choose/>
    },
    {
      path: "/admin/auth",
		  element: <Authorization/>
    },
    {
      path: "/user/auth",
		  element: <Authorization/>
    },
    {
      element: <MainLayout/>,
      children: [
        {
          path: "/admin/test",
          element: <Test/>
        },
        {
          path: "/admin/test/add",
          element: <AddTest/>
        },
        {
          path: "/admin/test/:testId",
          element: <TestById/>
        },
        {
          path: "/admin/profile",
          element: <Profile/>
        },
        {
          path: "/admin/profile/edit",
          element: <EditProfile/>
        },
        {
          path: "/admin/profile/password",
          element: <ChangePassword/>
        },
        {
          path: "/admin/students",
          element: <Students/>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer
				position="bottom-left"
				autoClose={3000}
				closeOnClick
				draggable
				hideProgressBar={true}
			/>
    </div>
  );
}

export default App;

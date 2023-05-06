import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss"
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import {
  News,
Media,
Main,
Contact,
Company,
Activities
}  from './pages/index'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/company',
    element: <Company />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/activities',
    element: <Activities />
  },
  {
    path: '/media',
    element: <Media />
  },
  {
    path: "/news",
    element: <News />
  }
])
function App() {
  return (
<>
<News />
<RouterProvider router={router} />
</>
  );
}

export default App;

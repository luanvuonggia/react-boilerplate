import { BaseLayout, Layout } from 'components/Layout';
import About from 'pages/About';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFoundPage from 'pages/NotFoundPage';
import Signup from 'pages/Signup';
//import DO NOT DELETE THIS LINE

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      //route DO NOT DELETE THIS LINE
    ],
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;

import React from 'react';
import { Provider } from 'react-redux'; // Correct import statement for Provider
import Body from './components/Body';
import './App.css';
import Head from './components/Head';
import store from "./utils/store"; // Assuming this is correctly configured
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children:[
      {
      path:'/',
      element:<MainContainer />
      },
      {
        path:'/watch',
        element:<WatchPage />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
       <RouterProvider router={appRouter} ></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;



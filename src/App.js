import React, { useState } from 'react';
import { Provider } from 'react-redux'; // Correct import statement for Provider
import Body from './components/Body';
import './App.css';
import Head from './components/Head';
import store from "./utils/store"; // Assuming this is correctly configured
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { SearchProvider } from './store/context';

function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (input) => {
    setSearch(input);
  }
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Body/>,
      children:[
        {
          path:'/',
          element:<MainContainer search={search} />
        },
        {
          path:'/watch',
          element:<WatchPage />
        }
      ]
    }
  ])
  console.log(search);
  return (
    <Provider store={store}>
    <SearchProvider>

      <div>
        <Head handleSearch = {handleSearch} />
       <RouterProvider router={appRouter} ></RouterProvider>
      </div>
    </SearchProvider>
    </Provider>
  );
}

export default App;



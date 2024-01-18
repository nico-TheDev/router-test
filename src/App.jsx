import { useState } from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { Home } from './pages/Home';
import { Play } from './pages/Play';
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/play",
        element:<Play/>
      },
    ]
  }
])



function App() {
  return <RouterProvider router={router}/>
}

export default App

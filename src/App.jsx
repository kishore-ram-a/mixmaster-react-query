import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  CockTail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from './pages'
import { loader as drinkLoader } from './pages/Landing'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: drinkLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'secret',
        element: <h1>secret page</h1>,
      },
      {
        path: 'cocktail/:id',
        element: <CockTail />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

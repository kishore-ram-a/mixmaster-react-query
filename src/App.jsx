import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  About,
  CockTail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
} from './pages'
import { loader as drinkLoader } from './pages/Landing'
import { loader as singlePageLoader } from './pages/CockTail'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
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
        loader: singlePageLoader,
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App

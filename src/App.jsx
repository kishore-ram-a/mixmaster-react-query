import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { About,CockTail, Error, HomeLayout, Landing, NewsLetter, } from "./pages";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />, // This stays as your wrapper layout with the navbar and <Outlet />
    children: [
      {
        index: true,
        element: <Landing />, //  FIX: Render your landing/home page content here instead of HomeLayout
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
        path: 'cocktail',
        element: <CockTail />,
      },
      {
        path: 'error',
        element: <Error />,
      },
      {
        path: 'landing', // You can keep or remove this since index: true covers the base path
        element: <Landing />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },
    ]
  },
])



const App = () => {
  return <RouterProvider router={router}/>;
};
export default App;

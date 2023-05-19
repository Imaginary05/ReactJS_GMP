import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './common/ErrorPage/ErrorPage'
import Dialog from './components/Dialog/Dialog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'movies/:movieId',
        // loader:  async ({ params }) => {
        //     return Fetch<Movie>(`movies/${params.movieId}`)
        //         .then(
        //             (movie: any) => new Movie(movie)
        //         );
        // },
        element: <Dialog></Dialog>
      },
      {
        path: 'new',
        element: <Dialog></Dialog>
      },
      {
        path: 'edit/:movieId',
        element: <Dialog></Dialog>
      },
      {
        path: 'delete/:movieId',
        element: <Dialog></Dialog>
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

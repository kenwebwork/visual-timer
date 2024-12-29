import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}
export default App

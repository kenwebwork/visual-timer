import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import ArticleLayout from './layout/ArticleLayout'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import SinglePage from './layout/SinglePage'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      
      <Route path='/' element={<ArticleLayout />}>
        <Route path='/about' element={<SinglePage id="about" title="About" />} />
        <Route path='/privacy-policy' element={<SinglePage id="policy" title="Privacy Policy" />} />
        <Route path='/contact' element={<ContactPage />} />
      </Route>
      
      <Route path='/*' element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}
export default App

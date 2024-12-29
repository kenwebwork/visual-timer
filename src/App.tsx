import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleLayout from './layout/ArticleLayout'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      
      <Route path='/' element={<ArticleLayout />}>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/privacy-policy' element={<PrivacyPage />} />
      </Route>
      
      <Route path='/*' element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}
export default App

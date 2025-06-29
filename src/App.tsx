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
import HowToUsePage from './pages/HowToUsePage'
import AboutPage from './pages/AboutPage'
import PolicyPage from './pages/PolicyPage'
import ArticlesPage from './pages/ArticlesPage'
import SinglePage from './layout/SinglePage'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      
      <Route path='/' element={<ArticleLayout />}>
        <Route path='/howtouse' element={<HowToUsePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/focus-tips' element={<ArticlesPage />} />
        <Route path='/focus-tips/:id' element={<SinglePage />} />
        <Route path='/privacy-policy' element={<PolicyPage />} />
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

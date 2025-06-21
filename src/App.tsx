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
import About from './pages/About'
import PolicyPage from './pages/PolicyPage'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      
      <Route path='/' element={<ArticleLayout />}>
        <Route path='/howtouse' element={<HowToUsePage />} />
        <Route path='/about' element={<About />} />
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

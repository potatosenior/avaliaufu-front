import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components'
import { AuthProvider } from './providers'
import { Router } from './router'
import { TeacherList } from './components/TeacherList'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Router />
        <TeacherList />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

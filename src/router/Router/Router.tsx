import { Routes, Route } from 'react-router-dom'
import { useRoutePaths } from '@/hooks'
import { Home, Login, Metrics, Register, Users } from '@/pages'
import { PrivateRoute } from '../PrivateRoute'
import { PublicRoute } from '../PublicRoute'
import { TeacherProfile } from '../../pages/TeacherProfile'

function Router() {
  const {
    LOGIN_PATH,
    METRICS_PATH,
    REGISTER_PATH,
    ROOT_PATH,
    USERS_PATH,
    USER_PATH,
    TEACHER_PATH
  } = useRoutePaths()

  return (
    <Routes>
      <Route path={ROOT_PATH} element={<Home />} />

      <Route
        path={LOGIN_PATH}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path={REGISTER_PATH}
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route path={TEACHER_PATH} element={<TeacherProfile />} />

      <Route
        path={METRICS_PATH}
        element={
          <PrivateRoute permissions={['metrics.list']} redirectTo={LOGIN_PATH}>
            <Metrics />
          </PrivateRoute>
        }
      />

      <Route
        path={USERS_PATH}
        element={
          <PrivateRoute permissions={['users.list', 'users.create']}>
            <Users />
          </PrivateRoute>
        }
      />

      <Route
        path={USER_PATH}
        element={
          <PrivateRoute permissions={['users.list', 'users.create']}>
            <Users />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default Router

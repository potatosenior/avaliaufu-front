import { useRoutePaths, useSession } from '@/hooks'
import { Link } from 'react-router-dom'

import './navBar.css'

function NavBar() {
  const { isAuthenticated, user, signOut } = useSession()
  const { LOGIN_PATH, REGISTER_PATH, ROOT_PATH } = useRoutePaths()

  return (
    <div className="navBarContainer">
      <h1>
        <Link to={ROOT_PATH}>FACOM DA DEPRESSÃO</Link>
      </h1>

      <ul>
        <li>
          {isAuthenticated && (
            <>
              Entrou como <span className="navBarUserEmail">{user?.email}</span>
            </>
          )}
        </li>
        <li>
          <Link to={ROOT_PATH}>Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <p>Login</p>
            </li>
            <li>
              <p>Register</p>
            </li>
          </>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={signOut}>Logout</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default NavBar

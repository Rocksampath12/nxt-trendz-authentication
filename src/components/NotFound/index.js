import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const NotFound = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
  )
}

export default NotFound

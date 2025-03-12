import './index.css'

import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  let {history} = props
  let goToProductRoute = () => {
    history.push('/products')
  }
  let goToCartRouter = () => {
    history.push('/cart')
  }
  let navigateToLoginRoute = () => {
    //delete jwt token in cookies
    console.log('Before removing:', Cookies.get('jwt_token'))
    Cookies.remove('jwt_token')
    console.log('After removing:', Cookies.get('jwt_token'))
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <li className="nav-menu-item">Home</li>

            <li className="nav-menu-item" onClick={goToProductRoute}>
              Products
            </li>

            <li className="nav-menu-item" onClick={goToCartRouter}>
              Cart
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={navigateToLoginRoute}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)

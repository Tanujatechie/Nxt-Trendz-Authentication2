// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

const Cart = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="cart-cotainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
        <h1 className="cart-heading">Cart</h1>
      </div>
    </>
  )
}

export default Cart

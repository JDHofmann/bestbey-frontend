import React from 'react'
import {Link} from 'react-router-dom'
import SlidePanel from './SlidePanel'
import Login from '../components/Login'
import Search from '../components/Search'

class NavBar extends React.Component {
  state={
    clickCart: false,
    clicking: "",
    popup: false
  }

  clickHandler= () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:"cart"})
    if(this.state.clickCart === true && this.state.clicking === "account"){
      this.setState({clickCart: true, clicking:"cart"})
    }else if(this.state.clickCart === true && this.state.clicking === "cart"){
      this.setState({clickCart: false, clicking:""})
    }
  }
  accountClickHandler= () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:"account"})
    if(this.state.clickCart === true && this.state.clicking === "cart"){
      console.log("1")
      this.setState({clickCart: true, clicking:"account"})
    } else if(this.state.clickCart === true && this.state.clicking === "account"){
      console.log('2')
      this.setState({clickCart: false, clicking:""})
    }
  }

  popupClickHandler = () =>{
    this.setState({popup: !this.state.popup})
  }

  logoutClickHandler = () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:""})
    this.props.logoutHandler()
  }

  checkoutClickHandler = () =>{
    this.setState({clickCart: !this.state.clickCart, clicking:""})
  }


    render(){
      return(
        <>
          <div id="navbar">
            <Link to="/"><h1>BESTBEY</h1></Link>
            {/* <div> */}
              <Search searchHandler={this.props.searchHandler} className="searchbar"/>
              {this.props.user.id === undefined?
                <button 
                  className="login-btn btn nav-item"
                  onClick={this.props.handleUserLogin}
                >Login</button>
                :
                <>
                  <button 
                    className="cart-btn btn nav-item"
                    onClick={this.clickHandler} 
                  >Cart</button>
                  <button 
                    className="account-btn btn nav-item"
                    onClick={this.accountClickHandler}
                  >Account</button>
                </>
              }
            </div>
          {/* </div> */}
          <SlidePanel
            cart={this.props.cart}
            removeFromCartHandler={this.props.removeFromCartHandler}
            products ={this.props.products}
            clickCart={this.state.clickCart}
            clicking={this.state.clicking}
            user={this.props.user}
            logoutClickHandler={this.logoutClickHandler}
            checkoutClickHandler={this.checkoutClickHandler}/>
          <Login
            popup={this.state.popup}
            popupClickHandler={this.popupClickHandler}
            handleUserLogin={this.props.handleUserLogin}
            user={this.props.user}
            />
        </>
      )
    }
}
export default NavBar

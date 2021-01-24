import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function Header(){

    const [{basket, user}, dispatch]= useStateValue();

    const handleAuthentication = ()=>{
        if (user){
            auth.signOut();  // 
        }
    }

    return (
        <div className='header'>
            <Link to ="/" >
                <img className= "header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            
            
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon" />
                {/*LOGO*/}
            </div>
            
            <div className="header_nav">
                <Link to ={!user &&'/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className='header_optionLineOne'>Hello {!user? 'Guest' : user?.email}</span>
                        <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span> 
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>&Orders</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>

                <Link to ="/Checkout">
                    <div className="header_optionBasket">
                        <AddShoppingCartIcon/>
                        <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>   
                    </div> 
                </Link> 
                
            </div>

        </div>
    )
}

export default Header

//optional handling if there is an error it will gracefully terminate basket?.length
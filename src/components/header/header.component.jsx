import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink 
} from './header.styles'

const Header = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isHidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    return (
        <HeaderContainer >
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer >
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? (
                    <OptionLink as='div' onClick={() => dispatch(signOutStart())}> 
                        SIGN OUT
                    </OptionLink>
                    ):(
                    <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
                    )
                }
                <CartIcon />            
            </OptionsContainer>
            {
                isHidden ? null :
                <CartDropdown />
            }
        </HeaderContainer>
    )
};

export default Header;
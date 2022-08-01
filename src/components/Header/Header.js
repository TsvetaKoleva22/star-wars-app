import Container from '../Container';
import Navigation from '../Navigation';

import logo from '../../assets/icons/logo.svg'

import './Header.scss';

const Header = () => (
    <div className="header" data-testid="Header">
        <Container className="header__container">
            <div className="header__logo-area">
                <img src={logo} alt="Logo" data-testid="Header__Logo"/>
            </div>

            <Navigation />
        </Container>
    </div>
);

export default Header;

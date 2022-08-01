import { NavLink } from "react-router-dom";

import './Navigation.scss';

const navItems = [
    {title: 'Home', path: '/'},
    {title: 'Characters', path: '/characters'},
    {title: 'Starships', path: '/starships'},
    {title: 'Vehicles', path: '/vehicles'},
]

const Navigation = () => (
    <nav className="navigation" data-testid="Navigation">
        {navItems.map(item => (
            <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                    isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
                }
                data-testid="Navigation__Navlink"
            >
                {item.title}
          </NavLink>
        ))}
    </nav>
);

export default Navigation;

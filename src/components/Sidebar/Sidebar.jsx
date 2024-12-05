import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { SidebarContainer, RouteWrap, SidebarHeader, RouteItem } from './SidebarStyles';
import { themes } from '../../styles/themes';


const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export const ThemeContext = React.createContext(null)


const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const [activeRoute, setActiveRoute] = useState('/');
    const theme = color === "dark" ? themes.dark : themes.light;

    const goToRoute = (path) => {
        setActiveRoute(path);
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <ThemeProvider theme={theme}>
            <SidebarContainer className={containerClassnames} isOpened={isOpened}>
                <SidebarHeader isOpened={isOpened}>
                    <img src={logo} alt="TensorFlow logo" />
                    <span>TensorFlow</span>
                    <div onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
                    </div>
                </SidebarHeader>
                <RouteWrap>
                    <div>
                        {
                            routes.map(route => (
                                <RouteItem
                                    key={route.title}
                                    onClick={() => {
                                        goToRoute(route.path);
                                    }}
                                    isOpened={isOpened}
                                    isActive={activeRoute === route.path}
                                >
                                    <FontAwesomeIcon icon={route.icon} />
                                    <span>{route.title}</span>
                                </RouteItem>
                            ))
                        }
                    </div>
                    <div>
                        {
                            bottomRoutes.map(route => (
                                <RouteItem
                                    key={route.title}
                                    onClick={() => {
                                        goToRoute(route.path);
                                    }}
                                    isOpened={isOpened}
                                >
                                    <FontAwesomeIcon icon={route.icon} />
                                    <span>{route.title}</span>
                                </RouteItem>
                            ))
                        }
                    </div>
                </RouteWrap>

            </SidebarContainer>
        </ThemeProvider>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;

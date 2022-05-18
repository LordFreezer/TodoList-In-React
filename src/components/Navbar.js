import React, { Component, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ClassContext } from '../contexts/ClassContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const { classes } = useContext(ClassContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    //   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;

    return (
        < nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Yet Another Todo List In React</h1>
            <p>I am currently taking {classes.length} classes</p>
            {/*<div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>*/}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
        </nav >
    );
}



/*class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        < nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Yet Another Todo List In React</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav >
                    )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>

        );
    }
}*/

export default Navbar;
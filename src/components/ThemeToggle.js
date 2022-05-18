import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (<button style={{ background: theme.ui }} onClick={toggleTheme}>Theme</button>);
}


/*class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context
        return (
            <button onClick={toggleTheme}>Theme</button>
        );
    }
}*/

export default ThemeToggle;
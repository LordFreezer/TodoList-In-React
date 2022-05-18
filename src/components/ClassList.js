import React, { Component, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { ClassContext } from '../contexts/ClassContext'
import ClassDetails from './ClassDetails';
const ClassList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { classes } = useContext(ClassContext);
    return classes.length ? (<div className='class-list' style={{ color: theme.syntax, background: theme.bg }}>
        <ul >
            {classes.map(course => {
                return (
                    <ClassDetails key={course.id} course={course} style={{ background: theme.ui }} />
                )
            }
            )}
        </ul>
    </div >
    ) : (
        <div className="empty">I'm not taking any classes right now!</div>
    );
}

/*class ClassList extends Component {
    static contextType = ThemeContext;

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className='class-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>Enterprise Programming</li>
                    <li style={{ background: theme.ui }}>Internet of Things</li>
                    <li style={{ background: theme.ui }}>Software Architecture and Design</li>
                </ul>
            </div >
        );
    }
}*/



export default ClassList;

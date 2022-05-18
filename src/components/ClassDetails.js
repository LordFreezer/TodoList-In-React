import React, { useContext } from 'react';
import { ClassContext } from '../contexts/ClassContext';
import { ThemeContext } from '../contexts/ThemeContext';
const ClassDetails = ({ course }) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { dispatch } = useContext(ClassContext)
    return (
        <li onClick={() => dispatch({ type: 'REMOVE_COURSE', id: course.id })} style={{ background: theme.syntax, color: theme.bg }}>
            <div className="title">{course.title}</div>
            <div className="item">{course.item}</div>
        </li>
    );
}

export default ClassDetails;
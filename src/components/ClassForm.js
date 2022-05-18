import React, { useContext, useState } from 'react';
import { ClassContext } from '../contexts/ClassContext';
import { ThemeContext } from '../contexts/ThemeContext';
const NewClassForm = () => {
    const { dispatch } = useContext(ClassContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [title, setTitle] = useState('');
    const [item, setItem] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_COURSE', course: {
                title, item
            }
        });
        setTitle('');
        setItem('');
    }
    return (
        <form style={{ background: theme.bg }} onSubmit={handleSubmit}>
            <input type="text" placeholder="Class Name" value={title}
                onChange={(e) => setTitle(e.target.value)} required
                style={{ background: theme.syntax, color: theme.bg }} />
            <input type="text" placeholder="Assignment" value={item}
                onChange={(e) => setItem(e.target.value)} required
                style={{ background: theme.syntax, color: theme.bg }} />
            <input type="submit" value="Add Assignment" />
        </form>
    );
}

export default NewClassForm;
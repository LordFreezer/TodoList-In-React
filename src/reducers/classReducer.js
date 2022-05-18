import { v4 as uuidv4 } from 'uuid'
export const classReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [...state, {
                title: action.course.title,
                item: action.course.item,
                id: uuidv4()
            }]
        case 'REMOVE_COURSE':
            return state.filter(course => course.id !== action.id)
        default:
            return state
    }
}
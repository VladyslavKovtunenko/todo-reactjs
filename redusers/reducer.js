export const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                title: action.title,
                priority: 'normal'
            }];
        default:
            return state;
    }
};
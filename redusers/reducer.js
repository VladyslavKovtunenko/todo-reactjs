export const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, {
                title: action.title
            }];
        case 'DELETE_TASK':
            return state.filter(
                (item)=> {
                    if (item.title !== action.title)
                        return item
                });
        default:
            return state;
    }
};
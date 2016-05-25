export function addTask(text) {
    return {
        type: 'ADD_TASK',
        title: text
    };
}

export function deleteTask(text) {
    return {
        type: 'DELETE_TASK',
        title: text
    }
}

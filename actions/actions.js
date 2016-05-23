export function addTask(text) {
    return {
        type: 'ADD_TASK',
        title: text
    };
}

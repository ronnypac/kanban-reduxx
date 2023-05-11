


const initialState = {
    tasks: [
        {name: 'task 1', id: 111, description: 'do kanban', status: 'todo', priority: 1},
        {name: 'task 2', id: 112, description: 'do list', status: 'progress', priority: 2},
        {name: 'task 3', id: 113, description: 'do homework', status: 'progress', priority: 3},
        {name: 'task 4', id: 114, description: 'do articles', status: 'review', priority: 1},
        {name: 'task 5', id: 115, description: 'do list of profitable goods', status: 'done', priority: 2},
    ],
    statuses: [
        'todo', 'progress', 'review', 'done',
    ],
    priorities: [1, 2, 3],
    appName: "Kanban Board",

    modalWindowData: {
        isOpen: false,
        mode: "",
        task: {},

    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_TASK":

                const deleteTask = state.tasks
                    .filter(elem => elem.id !== action.payload)
            return {...state, tasks: deleteTask}

        case "CHANGE_PRIORITY_UP":
            const newTasksUp = state.tasks
                .map((task) => task.id === action.payload ? {...task, priority: task.priority + 1} : task)
            return {...state, tasks: newTasksUp}

        case "CHANGE_PRIORITY_DOWN":
            const newTasksDown = state.tasks
                .map((task) => task.id === action.payload ? {...task, priority: task.priority - 1} : task)
            return {...state, tasks: newTasksDown}

        case "CHANGE_STATUS_NEXT":
            const oldIndexStatus = state.statuses.indexOf(action.payload.status)
            const newIndex = oldIndexStatus + 1;
            const nextStatus = state.statuses[newIndex]
            const nextTaskStatus =
                state.tasks.map(task =>
                    task.id === action.payload.id ? {...task, status: nextStatus} : task)
             return {...state, tasks: nextTaskStatus}

        case "CHANGE_STATUS_PREVIOUS":
            const previousTaskStatus = state.tasks.map(task =>
            task.id === action.payload.id ? {...task, status: state.statuses[state.statuses.indexOf(action.payload.status)-1]} : task)
            return {...state, tasks: previousTaskStatus}


        case "TOGGLE_MODAL":

            return {...state, modalWindowData: {...state.modalWindowData, isOpen: !state.modalWindowData.isOpen, task: action.payload.task, mode: action.payload.mode }}

        default:
            return state
    }
}
export default reducer;
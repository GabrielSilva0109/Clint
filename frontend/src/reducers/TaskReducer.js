const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_TASK':
            return {
                ...state,
                tasks: action.payload
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'UPDATE_TASK':
            const updateTask = state.tasks.map((task) =>
                task.id === action.payload.id ? action.payload : task
            )
            return {
                ...state,
                tasks: updateTask 
            }
        case 'REMOVE_TASK':
            const filteredTasks = state.tasks.filter((task) =>
                task.id !== action.payload
            )
        default:
            return state
    }
}


export default taskReducer

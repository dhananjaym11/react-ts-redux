const initialState: AppState = {
    todoData: [],
};

const reducer = (
    state: AppState = initialState,
    action: AppActions
): AppState => {
    switch (action.type) {
        case 'LOAD_DATA': {
            return { ...state, todoData: action.payload };
        }
        case 'DELETE_DATA': {
            const deletedTodoData = state.todoData.filter(
                (item) => !action.payload.includes(item.id)
            );
            return { ...state, todoData: deletedTodoData };
        }
        default:
            return state;
    }
};

export default reducer;

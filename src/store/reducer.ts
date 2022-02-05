import * as actionTypes from "./actionTypes";

const initialState: ArticleState = {
    todoData: [],
};

const reducer = (
    state: ArticleState = initialState,
    action: AppActions
): ArticleState => {
    switch (action.type) {
        case '@@itemConfiguration/one':
            return { ...state, todoData: action.payload };
        case '@@itemConfiguration/two':
            const deletedTodoData = state.todoData.filter(
                (item) => !action.payload.includes(item.id)
            );
            return { ...state, todoData: deletedTodoData };
    }
    return state;
};

export default reducer;

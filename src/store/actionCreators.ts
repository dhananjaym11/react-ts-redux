import * as actionTypes from "./actionTypes";

/*export function deleteTodoData(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.DELETE_DATA,
        article
    };
    return action;
}*/

export function getTodoData() {
    return (dispatch: DispatchType) => {
        const request = fetch('https://jsonplaceholder.typicode.com/todos');
        request
            .then(result => result.json())
            .then(
                (success) => {
                    const action: ArticleAction = {
                        type: '@@itemConfiguration/one',
                        payload: success,
                    };
                    dispatch(action);
                },
                (error) => {
                    console.log(error);
                }
            );
    };
}
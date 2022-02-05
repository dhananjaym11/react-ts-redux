import * as actionTypes from "./actionTypes";

export function addArticle(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.ADD_ARTICLE,
        article
    };

    return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
    const action: ArticleAction = {
        type: actionTypes.REMOVE_ARTICLE,
        article
    };
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ArticleAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action);
        }, 500);
    };
}

export function getTodoData() {
    return (dispatch: DispatchType) => {
        const request = fetch('https://jsonplaceholder.typicode.com/todos');
        request
            .then(result => result.json())
            .then(
                (success) => {
                    const action: ArticleAction = {
                        type: actionTypes.ADD_DATA,
                        article: { id: 0, title: '', body: '' },
                        payload: success,
                    };

                    console.log(success);
                    dispatch(action);
                },
                (error) => {
                    console.log(error);
                }
            );
    };
}
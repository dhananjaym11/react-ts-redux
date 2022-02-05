export function getTodoData() {
    return (dispatch: DispatchType) => {
        const request = fetch('https://jsonplaceholder.typicode.com/todos');
        request
            .then(result => result.json())
            .then(
                (success) => {
                    const action: TodoLoadAction = {
                        type: 'LOAD_DATA',
                        payload: success,
                    };
                    dispatch(action);
                },
                (error) => {
                    console.log(error);     // eslint-disable-line
                }
            );
    };
}
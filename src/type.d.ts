type ITodo = {
    id: number;
    title: string;
    completed: boolean;
}

type AppState = {
    todoData: ITodo[]
};

type TodoLoadAction = {
    type: 'LOAD_DATA';
    payload: ITodo[];
};

type TodoDeleteAction = {
    type: 'DELETE_DATA';
    payload: number[];
};

type AppActions = TodoLoadAction | TodoDeleteAction;

type DispatchType = (args: AppActions) => AppActions;
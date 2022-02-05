type ITodo = {
    id: number;
    title: string;
    completed: boolean;
}

type ArticleState = {
    todoData: ITodo[]
};

type ArticleAction = {
    type: '@@itemConfiguration/one';
    payload: ITodo[];
};

type TodoDeleteAction = {
    readonly type: '@@itemConfiguration/two'
    payload: number[];
};

type DispatchType = (args: ArticleAction) => ArticleAction;

type AppActions = ArticleAction | TodoDeleteAction
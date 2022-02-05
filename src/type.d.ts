interface IArticle {
    id: number;
    title: string;
    body: string;
}

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

type ArticleState = {
    todoData: ITodo[],
    articles: IArticle[];
};

type ArticleAction = {
    type: string;
    article: IArticle;
    payload?: ITodo[];
};

type DispatchType = (args: ArticleAction) => ArticleAction;

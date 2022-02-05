import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./App.scss";

import { Article } from "./components/Article";
import { AddArticle } from "./components/AddArticle";
import { addArticle, removeArticle, getTodoData } from "./store/actionCreators";
import { Dispatch } from "redux";

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const todoData: readonly ITodo[] = useSelector(
    (state: ArticleState) => state.todoData,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(getTodoData())
  }, [dispatch])

  return (
    <main>
      <h1>My Articles {todoData.length}</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;

import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

export default function ArticleManager() {
  const [articles, setArticles] = useState([
    { id: 1, title: "React", summary: "React is a UI library." },
    { id: 2, title: "Components", summary: "Components help reuse UI." },
  ]);

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const onClickAdd = () => {
    if (!title.trim() || !summary.trim()) return;

    const newArticle = {
      id: Date.now(),
      title: title.trim(),
      summary: summary.trim(),
    };

    setArticles([newArticle, ...articles]);
    setTitle("");
    setSummary("");
  };

  const onClickRemove = (id) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  return (
    <div>
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
}

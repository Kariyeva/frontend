import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, onClickRemove }) {
  return (
    <ul style={{ paddingLeft: 18 }}>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}

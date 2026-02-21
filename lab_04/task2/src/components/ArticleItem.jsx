import { useState } from "react";

export default function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <li style={{ marginBottom: 12 }}>
      <a href={`#${article.id}`} title="Toggle Summary" onClick={onClickToggle}>
        {article.title}
      </a>{" "}
      <button onClick={() => onClickRemove(article.id)} style={{ marginLeft: 10 }}>
        ×
      </button>

      <p style={{ display: isOpened ? "block" : "none", marginTop: 8 }}>
        {article.summary}
      </p>
    </li>
  );
}

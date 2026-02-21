export default function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}) {
  return (
    <section style={{ marginBottom: 18 }}>
      <h1>{name}</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={onChangeTitle}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      />

      <input
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
        style={{ width: "100%", padding: 10, marginTop: 10 }}
      />

      <button onClick={onClickAdd} style={{ padding: 10, marginTop: 10 }}>
        Add
      </button>
    </section>
  );
}

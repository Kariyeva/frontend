export default function Card({ title, className = "", children }) {
  const classes = `card ${className}`.trim();

  return (
    <article className={classes}>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

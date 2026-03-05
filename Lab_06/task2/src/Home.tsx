import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Student Portal</h1>
      <p>This is the home page.</p>
      <p>
        Go to <Link to="/courses">Courses</Link>
      </p>
    </div>
  );
}
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export default function CourseError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error.status}: {error.statusText}</p>
        <Link to="/courses">Back to Courses</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Something went wrong</h2>
      <Link to="/courses">Back to Courses</Link>
    </div>
  );
}
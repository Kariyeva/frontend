export default function Courses() {
  const courses = [
    "React Basics",
    "TypeScript Fundamentals",
    "Frontend Development",
    "Web Design"
  ];

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
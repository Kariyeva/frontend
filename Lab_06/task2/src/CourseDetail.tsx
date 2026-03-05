import { useLoaderData, useParams } from "react-router-dom";
import type { Course } from "./data";

type LoaderData = { course: Course };

export default function CourseDetail() {
  const { id } = useParams(); // id: string | undefined
  const { course } = useLoaderData() as LoaderData;

  return (
    <div>
      <h2>{course.title}</h2>
      <p><b>Instructor:</b> {course.instructor}</p>
      <p>{course.description}</p>
      <p><b>Route ID parameter:</b> {id}</p>
    </div>
  );
}
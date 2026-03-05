import type { LoaderFunctionArgs } from "react-router-dom";
import { courses } from "./data";

export async function courseLoader({ params }: LoaderFunctionArgs) {
  const idStr = params.id;
  const id = Number(idStr);

  if (!idStr || Number.isNaN(id)) {
    throw new Response("Invalid course id", { status: 400 });
  }

  const course = courses.find((c) => c.id === id);

  if (!course) {
    throw new Response("Course not found", { status: 404 });
  }

  return { course };
}
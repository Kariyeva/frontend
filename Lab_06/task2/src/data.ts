export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Basics", instructor: "A. Teacher", description: "Intro to React components and JSX." },
  { id: 2, title: "TypeScript Fundamentals", instructor: "B. Teacher", description: "Types, interfaces, generics, and safety." },
  { id: 3, title: "Frontend Development", instructor: "C. Teacher", description: "Modern frontend workflow and best practices." },
  { id: 4, title: "Web Design", instructor: "D. Teacher", description: "UI/UX basics and layout principles." },
];
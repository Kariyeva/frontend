import UserCard from "./components/UserCard"
import SkillList from "./components/SkillList"
import type { User, Skill } from "./types"

function App() {

  const user: User = {
    name: "Alice",
    email: "alice@mail.com",
    age: 25
  }

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Intermediate" },
    { id: 2, name: "TypeScript", level: "Beginner" },
    { id: 3, name: "CSS", level: "Expert" }
  ]

  return (
    <div>
      <UserCard user={user}>
        <p>Frontend student learning TypeScript.</p>
      </UserCard>

      <h3>Skills</h3>
      <SkillList skills={skills} />
    </div>
  )
}

export default App
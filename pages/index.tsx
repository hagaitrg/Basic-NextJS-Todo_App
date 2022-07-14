import { Todo } from "../utils/types"
import Link from "next/link"

interface IndexProps{
  todos: Array<Todo>
}

function Index(props: IndexProps){
  const {todos}  = props
  console.log()
  return (
    <div>
      <h1>My Todo List</h1>
      <h2>Click On Todo to see detail</h2>
      {/* Looping todo list*/}
      {todos?.map((t) =>(
        <div key={t._id}>
          <Link href="{`/todos/${t._id}`}">
            <h3 style={{ cursor :"pointer"}}>
              {t.activity} - {t.description} {t.done ? "completed" : "incomplete"}
            </h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProp(){
  const res = await fetch(process.env.API_URL as string)
  console.log(res)
  const todos =  await res.json()

  return {
    props: {todos},
  }
}

export default Index
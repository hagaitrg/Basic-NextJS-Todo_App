import { Fragment } from "react"
import TodoForm from "../components/todoForm/todoForm"
import { useRouter } from "next/router"

const createTodo = () => {
    const router = useRouter()
    const addTodoHandler = async(data:any) => {
        console.log("data" + data)
        const req = await fetch(process.env.API_URL as string, {
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                "content-type": "application/json",
            }
        })
        const res = await req.json()
        router.push("/")
    }
    return (
        <Fragment>
            <TodoForm addTodoHandler={addTodoHandler}/>
        </Fragment>
    )
}

export default createTodo
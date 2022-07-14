import { MongoClient } from 'mongodb'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'
import TodoItem from './components/todoItem/todoItem'
import { Todo } from '../utils/types'

const Home: NextPage = (props: any) => {  

  console.log(props.todos.data)
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Well Hello!</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Heyy mate my name is Disa Hagai Tarigan from Telkom University Bandung. I developed this application for my portfolio using TypeScript, Next JS, and MongoDB technology </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {
                  props.todos.data.map((todo: any) => (
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full " key={todo.id}>
                    <TodoItem
                      id = {todo._id}
                      activity={todo.activity}
                      createdAt = {todo.createdAt}
                      description={todo.description}
                      done={todo.done} />
                    </div>
                  )
                  )
                }
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export async function getStaticProps(context: any){
  const res = await fetch(process.env.API_URL as string)
  const todos:Todo[] = await res.json()

  return {
    props:{
      todos
    },
    revalidate: 60
  }
}
export default Home

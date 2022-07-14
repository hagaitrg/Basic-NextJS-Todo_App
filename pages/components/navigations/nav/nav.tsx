import Link from "next/link";
import { Fragment } from "react";
import { GiChecklist  } from "react-icons/gi";

const Nav = () => {
    return (
        <Fragment>
        <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center mb-4 md:mb-0 flex-row" href="/">
                        <span className="ml-3 text-4xl text-cyan-900"><GiChecklist/></span> <span className="ml-3 text-xl text-gray-900"> My Todo App</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900" href="/">Home</a>
                    <a className="mr-5 hover:text-gray-900">About</a>
                    </nav>
                    <a href="/createTodo">
                        <button className="inline-flex items-center bg-cyan-900  border-0 py-1 px-3 focus:outline-none hover:bg-cyan-800 hover:text-whiterounded text-white mt-4 md:mt-0 rounded">Create
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            
                        </svg>
                        </button>
                    </a>
                </div>
            </header>
        </Fragment>
    )
}

export default Nav
import { Fragment } from "react";
import { GiCheckMark, GiTrashCan, GiCrossMark  } from "react-icons/gi";

function TodoItem(props:any) {
    const {id, activity, description, done, createdAt} = props
    let dt = new Date(createdAt)
    let year = dt.getFullYear()
    let month = dt.toLocaleString('default', { month: 'long' })
    let day = ("0" + dt.getDate()).slice(-2);
    let date = year + " "+month + " " + day
    return (
        <Fragment>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg drop-shadow-lg">
                <div className="flex-grow">
                    <div className="flex mb-3">
                        <div className="flex-none">
                            <h2 className="text-gray-900 title-font font-medium text-xl mt-2"><strong>{activity}</strong></h2>
                        </div>
                        <div className="flex-auto w-64 ...">
                            
                        </div>
                        <div className = "flex-auto w-32 ...">
                        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"><GiCrossMark/></button>
                        </div>
                    </div>
                    <hr/>   
                    <p className="text-gray-500 text-xs mt-3 mb-2 ">Created at {date}</p>
                    <p className="text-gray-500 text-lg mb-3">{description}</p>
                    {
                        (done == true)?
                        (<p>Status <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"> Done</span></p> )
                        :
                        (<p>Status  <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">Undone</span></p>)
                    }
                    <div className="mt-5">
                        <button 
                            type="button" 
                            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                        > <GiCheckMark/>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TodoItem
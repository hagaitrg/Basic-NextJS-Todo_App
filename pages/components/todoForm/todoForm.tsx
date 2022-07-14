import { useRef } from "react";

function TodoForm(props:any){
    const {addTodoHandler} = props;

    const activityRef = useRef()
    const descriptionRef = useRef()

    const formSubmitHandler = (e: any) => {
        e.preventDefault()

        const formData = {
            activity : activityRef.current.value,
            description : descriptionRef.current.value,
            done : false,
        }
        addTodoHandler(formData)
    }

    return (
        <section className="text-gray-600 body-font relative">
            <form onSubmit={formSubmitHandler}>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Create Todo Activity</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Manage your daily <span className="bg-cyan-900 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-900 dark:text-white">activity</span> with us.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                {/* <label className="leading-7 text-sm text-gray-600">Activity</label> */}
                                <input 
                                type="text" 
                                id="activity" 
                                name="activity" 
                                placeholder="Activity"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                ref={activityRef}/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                {/* <label className="leading-7 text-sm text-gray-600">Description</label> */}
                                <textarea 
                                id="description" 
                                name="description" 
                                placeholder="Description"
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ref={descriptionRef}></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-cyan-900 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-800 rounded text-lg" type="submit">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default TodoForm
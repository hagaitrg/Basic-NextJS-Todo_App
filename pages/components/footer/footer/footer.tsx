import { Fragment } from "react"
import { GiMineralHeart  } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className="footer text-center p-4 bg-base-300 text-base-content inset-x-0 bottom-0">
            <div >
                <p className="flex flex-row justify-center tracking-normal mt-10" >Made with <span className="mr-2 ml-2 text-2xl text-cyan-900"><GiMineralHeart/> </span> by  <span className="bg-cyan-900 text-white text-sm font-medium mr-2 ml-2 px-2.5 py-0.5 rounded dark:bg-cyan-900 dark:text-white"> Hagai </span> Kyun :3
                </p>
            </div>
        </footer>
    )
}

export default Footer
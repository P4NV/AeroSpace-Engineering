import './App.css'
import * as motion from "motion/react-client"
import {delay} from "motion";

function App() {

  return (
    <div className='bg-gray-700 h-screen '>
        <div className="h-96 w-full  flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1.8,
                                duration:1.5}}
                    className="top-30 text-5xl text-red-800 font-black sticky">AeroSpace Engineering</motion.p>
                <div>
                    <motion.img className="Head-Plane h-256" src="../public/aerospace/airplane-flying-isolated.png"
                                initial={{
                                    opacity: 0,
                                    scale: 0.4,
                                    y: -250}}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y:0}}
                        transition={{ duration: 1.4,
                                      delay: 0.4,
                                      ease: "easeInOut",
                            }}
                        />
                </div>
            </div>
        </div>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.8,duration:1.5}}
            className="Main">
            <div className="flex">
                <div className="flex flex-col justify-center items-start">
                    <img className="w-150" src="../public/aerospace/vecteezy_top-view.png" />
                </div>
            </div>
        </motion.div>
        <div className="Footer">

        </div>
    </div>
  )
}

export default App

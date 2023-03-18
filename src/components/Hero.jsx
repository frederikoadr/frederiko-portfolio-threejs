import { motion } from "framer-motion"

import { styles } from "../styles"
import { AvatarsCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-blu"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#2dc1df]"></div>
        </div>
        
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#2dc1df]">Adrian</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Games, Virtual Simulation, and <br className="sm:block hidden"/> Interactive Applications
          </p>
        </div>
      </div>
      <AvatarsCanvas />
      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-blu mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
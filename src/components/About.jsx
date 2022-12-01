
const About = () => {
  return (
    <div name='about' className="w-full h-screen pb-10 bg-[#0a192f] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-10">
                    <p className="text-4xl font-bold inline border-b-4 border-[#217763]">About</p>
                </div>
                <div>

                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-10">
                <div className="sm:text-right text-4xl font-semibold">
                    <p>Hi! I'm Kris, nice to meet you. Please take a look around!</p>
                </div>
                <div>
                   <p>I'm a Denver-based Software Engineer with a passion for
                   building software that positively impacts others! I excel at
                   problem solving and communicating technical concepts in a non-technical
                   manner. My prior experience instilled a passion for the Education and
                   Mental Health industries. When I'm not coding, you can find me enjoying the Colorado mountains,
                   nerding out about Marvel and WebToons, and playing video games!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

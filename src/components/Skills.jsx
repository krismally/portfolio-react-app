
const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
    {/* Container */}
    <div className="max-w-[1000px] mx-auto p-4 px-10 flex flex-col justify-center w-full h-full">
        <div>
            <p className="text-4xl font-semibold inline border-b-4 border-[#217763]">Skills</p>
            <p className="py-4">// These are some of the technologies I've worked with the most</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="HTML Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="CSS Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="JavaScript Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="React Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">React JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="Express Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">Express JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="Node Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">Node JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="MongoDB Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">MongoDB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="Python Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">Python</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="PostgreSQL Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">PostgreSQL</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img alt="Figma Icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-20 mx-auto"/>
                <p className="my-4">Figma</p>
            </div>
        </div>
    </div>

    </div>
    
  )
}

export default Skills
import Pomotom from '../assets/pomotom.png'
import Logr from '../assets/logr.png'
import LogrBeta from '../assets/logr-beta.png'
import Marvel from '../assets/marvel-character-guide.png'

const Projects = () => {
  return (
    <div name='projects' className="w-full h-fit min-xl:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 px-10 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#217763] text-gray-300">Projects</p>
                <p className="py-4">// Check out some of my recent projects</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <div style={{backgroundImage: `url(${Logr})`}}
                 className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Django Application - Logr
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://logr-daily-symptom-tracker.herokuapp.com/" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/krismally/logr" target='_blank'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Pomotom})`}}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

               {/* Hover Effects */}
               <div className='opacity-0 group-hover:opacity-100'>
                       <div>
                           <span className='text-2xl font-bold text-white tracking-wider'>
                               MERN Application - PomoTom
                           </span>
                           <div className='pt-8 text-center'>
                               <a href="https://pomotom.com/" target='_blank'>
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                               </a>
                               <a href="https://github.com/krismally/pomo-frontend" target='_blank'>
                                   <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                               </a>
                           </div>
                       </div>
                   </div>
               </div>
               <div style={{backgroundImage: `url(${LogrBeta})`}}
               className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                      <div>
                          <span className='text-2xl font-bold text-white tracking-wider'>
                              MEN Application - Logr Beta
                          </span>
                          <div className='pt-8 text-center'>
                              <a href="https://logr-symptom-tracker.herokuapp.com/logr" target='_blank'>
                                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                              </a>
                              <a href="https://github.com/krismally/symptom-tracker" target='_blank'>
                                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div style={{backgroundImage: `url(${Marvel})`}}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

             {/* Hover Effects */}
             <div className='opacity-0 group-hover:opacity-100'>
                     <div>
                         <span className='text-2xl font-bold text-white tracking-wider'>
                             jQuery Application - Marvel
                         </span>
                         <div className='pt-8 text-center'>
                             <a href="https://www.marvelcharacterguide.com/" target='_blank'>
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href="https://github.com/krismally/guide-to-mcu" target='_blank'>
                                 <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                         </div>
                     </div>
                 </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;

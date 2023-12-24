import React, { useState,useEffect } from 'react';
import image2 from './images/istockphoto-1456545135-170667a.png'
import './css/todolist.css';
import Modaltodo from './components/Modaltodo';
import Todo from './components/Todo'
import {BsHouse,BsFillAlarmFill,BsCheckCircle,BsSearch,BsMenuButtonFill,BsBell,BsLightbulbFill,BsActivity,BsShieldFillCheck,BsPlusLg,BsHddRack,BsPlusCircleFill,BsSlashCircleFill,BsXCircleFill,BsFillCCircleFill,BsChevronDown,BsInfoCircle} from 'react-icons/bs'

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const datas = localStorage.getItem('object');
        if (datas) {
          setData(JSON.parse(datas));
        }
    }, [data])
      
      const todonew = data.filter((data)=> data.status === 'new');
      console.log('new',todonew);
      const tododone = data.filter((data)=> data.status === 'done');
      console.log('done', tododone);
      const todoprogress = data.filter((data)=> data.status === 'pogress');
      console.log('progress', todoprogress);
      
    return(
        <div className='h-screen'>
            <nav className="p-2 w-screen">
                <div className="">
                    <div className="flex justify-between items-center ">
                        <div className="flex"><BsHouse className="text-2xl text-black font-extrabold mx-4 " /> | <BsFillCCircleFill className="text-xl ml-5" /><span className="ml-2"> biu-Technologie </span><BsChevronDown className=" ml-2 mr-4 text-center align-center" /> | <BsInfoCircle className="ml-4 text-2xl" /></div>
                        <div className="">
                            <ul className="flex items-center">
                                <li className="mx-4"><button  className=" bg-blue-400 py-1 px-3 text-white rounded-3xl">Share</button></li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><Modaltodo />  | </li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><BsMenuButtonFill className="text-xl mr-6 cursor-pointer" /> |</li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><BsFillAlarmFill className="text-xl cursor-pointer" /></li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><BsCheckCircle className="text-xl cursor-pointer" /></li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><BsBell className="text-xl mr-6 cursor-pointer" /> | </li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><BsSearch className="text-xl cursor-pointer" /></li>
                                <li className="mx-4 text-neutral-900 font-bold flex"><img id="image" src={image2} alt="" srcset="" className="cursor-pointer" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="w-screen">
                <div className="w-full">
                    <div className="flex columns-5 w-full">
                        <div className="bg-teal-500 text-white p-3 w-full"><span className="mr-14 ml-1 flex items-center"><BsLightbulbFill className="bi bi-lightbulb-fill mr-3" /> Open</span> <span className=""><i className="bi bi-chevron-compact-down"></i></span></div>
                        <div className="bg-sky-500 text-white p-3 w-full"><span className="ml-2 flex items-center"><BsActivity className="bi bi-activity mr-1" /> In Progress</span></div>
                        <div className="bg-violet-400 text-white p-3 w-full"><span className="ml-1 flex  items-center"><BsShieldFillCheck className="bi bi-shield-fill-check mr-1" /> Done</span></div>
                        <div className="text-blue-400 p-3 bg-slate-300 font-bold w-full shadow-md"><span className="ml-2 flex  items-center"><BsPlusLg className="bi bi-plus-lg mr-1" /> Add Section</span></div>
                        <div className="w-full">
                            <div className="w-full flex h-full justify-between">
                                <div className="w-full bg-slate-100"></div> 
                                <div className="bg-gray-800 p-3 w-full"><span className=" text-white flex items-center text-center"><BsHddRack className="ml-12" /></span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-screen h-full">
        <div className="h-full">
            <div className="flex columns-5 h-full w-full">
                <div className="bg-slate-100 w-full pt-10 p-3 parent overflow-y-scroll ">
                    <div className="text-center m-3 plus cursor-pointer"><span type="button" className="cursor-pointer"><BsPlusCircleFill className=" text-black text-2xl" variant="primary" /></span></div>
                    {todonew.map(todos => (
                        <Todo objet= {todos}/>                    
                    ))}
                </div>
                <div className="w-full h-full bg-slate-200 p-3 parent1 overflow-y-scroll" >
                    {todoprogress.map(todos => (
                        <Todo objet= {todos}/>                    
                    ))}
                </div>
                <div className="w-full h-full bg-slate-100 p-3 parent2 overflow-y-scroll">
                    {tododone.map(todos => (
                        <Todo objet= {todos}/>                    
                    ))}
                </div>
                <div className="w-full h-full bg-slate-200 p-3">

                </div>
                <div className="w-full h-full bg-slate-100">
                    <div className="justify-between h-full flex">
                        <div className="w-full bg-slate-100 h-full"></div> 
                        <div className="bg-gray-600 p-3 w-full text-center">
                            <div className="text-center"><BsPlusCircleFill className="ml-12 text-blue-500 text-3xl cursor-pointer" /></div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Modal --> */}
    <div className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add activity</h1>
                    <button data-bs-dismiss="modal" aria-label="Close"><BsXCircleFill className="text-2xl text-red-300 hover:text-red-400" /></button>
                </div>
                <div className="modal-body">
                        <div className="flex">
                            <div className="m-3">
                                <label for="ActivName" className="form-label">Type name of activity</label>
                                <input type="text" name="ActivName" className="form-control" id="ActivName" />
                            </div>
                            <div className="m-3">
                                <label for="ActivDateTime" className="form-label">Type a date an time</label>
                                <input type="datetime" name="ActivDateTime" className="form-control" id="datetime" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-3">
                                <label for="nameSiteActivity" className="form-label">Type name of site</label>
                                <input type="texte" name="nameSiteActivity" className="form-control" id="nameSiteActivity" />
                            </div>
                            <div className="m-3">
                                <label for="priority" className="form-label">priority</label>
                                <input type="number" name="priority" className="form-control" id="priority" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button data-bs-dismiss="modal"><BsSlashCircleFill className="text-2xl text-red-300 hover:text-red-400" /></button>
                            <button><BsPlusCircleFill className=" text-green-300 text-2xl hover:text-green-400" /></button>
                        </div>
                </div>
            </div>
        </div>
    </div>
    
        </div>
    )    
}
export default Home
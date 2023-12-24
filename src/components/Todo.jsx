import image1 from '../images/istockphoto-1181034192-170667a.jpg'
import { BsFillArrowRightCircleFill,BsCheckCircleFill,BsTrash3,BsTrashFill } from "react-icons/bs";
import {chercher1,deleteTodo,todoprogress,todoDone} from'./importFonction'


const Todo = (props) => {
    let params1 = chercher1(props.objet.activId)
    let content1;
    let content2;
    let content3;

    if (props.objet.staus !== 'done') {

    content1 =  <h5 className="block text-lg p-1">{props.objet.ActivName}</h5>
    content2 =  <span ><BsFillArrowRightCircleFill className=" text-green-400" onClick={e =>todoprogress(params1)}/></span>
    content3 = <div className='flex justify-between'><span className="mr-2"> <img id="image1" src={image1} alt="" srcset="" /> </span><span>{props.objet.priority}</span><span className="cursor-pointer justify-end"><BsTrash3 className=" text-red-300" onClick={e=>deleteTodo(params1)}/></span></div>
        
    } 

    if (props.objet.status==='pogress') {
        content1 =  <h5 className="block text-lg p-1">{props.objet.ActivName}</h5>
        content2 =  <span ><BsFillArrowRightCircleFill className=" text-green-400" onClick={e =>todoDone(params1)}/></span>
        content3 = <div className='flex justify-between'><span className="mr-2"> <img id="image1" src={image1} alt="" srcset="" /> </span><span>{props.objet.priority}</span><span className="cursor-pointer justify-end"><BsTrash3 className=" text-red-300" onClick={e=>deleteTodo(params1)}/></span></div>   
    }

    if(props.objet.status === 'done') {

    content1 = <div class=" bg-green-200 rounded-t-lg"><h5 className="text-lg text-green-700 flex mx-2 p-1"><BsCheckCircleFill className=" text-green-700 mr-2 mt-2 texte-sm" />{props.objet.ActivName}</h5></div>
    content2 = <span className><BsTrashFill class=" text-red-500" onClick={e=>deleteTodo(params1)}/></span>
    content3 = <div className='flex justify-between mx-2'><span className="mr-2"><img id="image1" src={image1} alt="" srcset="" /></span><span>{props.objet.priority}</span></div>

    }

    return(
        <div className="mt-5 bg-white rounded-xl shadow-2xl hover:border-cyan-400 hover:border-2">
            <div className=" justify-between">
                {content1}
            </div>
            <div className="px-3 ml-6 justify-between flex">
                {props.objet.datetime} 
            <span className ="ml-2">
                {content2}
            </span>
        </div>
        <div className="p-1 justify-between">
            {content3}
        </div>
    </div>
    )
}

export default Todo
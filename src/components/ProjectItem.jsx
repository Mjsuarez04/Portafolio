import React from "react";
import { useNavigate } from "react-router";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projectInfo");
    localStorage.setItem("id", project.id);
  };

  return (
    // <div className='realtive flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
    //   <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
    //   <div className='hidden group-hover:block relative top-[40%] left-[-40%] translate-x-[-50%] translate-y-[-70%]'>
    //     <h3 className='text-2xl font-semibold text-white tracking-wider text-center'>
    //       {title}
    //     </h3>
    //     <p className='pb-4 pt-2 text-white text-center'>React Js</p>
    //     <a href="/"></a>
    //       <p className='flex items-center justify-center p-2 rounded-lg bg-white text-gray-700 font-semibold cursor-pointer text-lg'>More Info</p>
    //   </div>
    // </div>
    <div >
      {
        <div className="realtive flex items-center justify-center hover:-translate-y-1 hover:scale-110 duration-300  w-full shadow-xl shadow-gray-100 rounded-xl group hover:bg-gradient-to-l from-gray-200 to-[#001b5e]">
          <img className=" w-full rounded-xl group-hover:opacity-10" src={project.img} alt="" />
          <div className="hidden group-hover:block relative top-[80px] left-[-40%] translate-x-[-50%] translate-y-[-70%] ">
          <h3 className="text-1xl font-semibold text-white tracking-wider text-center">{project.proyecto}</h3>
          <p className="pb-2 pt-2 text-white text-center font-semibold">React Js</p>
          <p onClick={handleClick} className="flex items-center justify-center w-[7rem] p-2 rounded-lg bg-white text-gray-700 font-semibold cursor-pointer text-lg">
            More Info</p>
        </div>
      </div>
      }
    </div>
  );
};

export default ProjectItem;

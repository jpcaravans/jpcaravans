import React from 'react';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const  ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className='relative group'>
      <img className='w-full h-48 object-cover' 
      src={imgUrl} 
      loading="lazy"
      alt={title}
      />
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] 
      bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
      </div>
      </div>
      <div className='text-white py-4 px-4'>
        <h5 className='text-white text-lg md:text-base font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-sm md:text-sm leading-relaxed'>{description}</p>
      </div>
      </div>
  )
}

export default ProjectCard;
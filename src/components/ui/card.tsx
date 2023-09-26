import { ReactNode } from "react";

function Card({
    children
}:{
    children: ReactNode
}) {
  return <div className='bg-white rounded-md shadow-lg shadow-indigo-500/40 h-[50vh]'>
            {children}
         </div>;
}

export default Card;

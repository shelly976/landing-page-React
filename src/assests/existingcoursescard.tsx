import type React from 'react';
import { Button } from './button';

export default function Existingcourses({image,courseurl,title,buttonText}:{buttonText:React.ReactNode,courseurl:string,title:String,image:string}){
    return(<div className='ml-10'>
        <div className='w-[342px] h-[120px] object-contain'>
            <img src={image} className='rounded-md'></img>
            <div className='flex justify-between p-2 border border-300-black rounded-md'>
            <div>{title}</div>
            <Button onClick={()=>{
                window.location.href=courseurl
            }}>{buttonText}</Button>
            </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>)
}
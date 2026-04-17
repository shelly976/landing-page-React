import {Button} from './button';

export default function navbar(){
    return(<div className='flex justify-between m-5 border-b p-2'>
        <div className='text-lg'><b>100xdevs</b></div>
        <div className='flex space-x-6'>
        <Button onClick={()=>{
            window.location.href='https://github.com/100xdevs/'
        }}>OpenSource</Button>
        <Button onClick={()=>{
            window.location.href='https://www.youtube.com/watch?v=gViEtIJ1DCw&t=655s'
        }}>Youtube</Button>
        </div>
    </div>);
}
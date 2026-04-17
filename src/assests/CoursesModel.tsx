import Existingcourses from "./existingcoursescard"
import image from './../../public/image.png';
import image_copy from './../../public/image copy 2.png';
import img from './../../public/image copy 3.png';

export default function existingcoursess(){
       return(<div>
        <div className="mx-10 text-green-800 m-3 text-lg"><b>New Courses</b></div>
        <div className="flex space-x-5 flex-wrap">
        <Existingcourses image={img}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        <Existingcourses image={image_copy}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        <Existingcourses image={img}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        
      
    </div>
       <br></br><br></br>
        <div className="mx-10 text-blue-800 m-3 text-lg"><b>Existing Courses</b></div>
        <div className="flex space-x-5 flex-wrap">
        <Existingcourses image={image}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        <Existingcourses image={image_copy}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        <Existingcourses image={image}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        <Existingcourses image={image_copy}
                          courseurl={'https://harkirat.classx.co.in/'}
                          title='Farmers'
                          buttonText={"view course"}
        ></Existingcourses>
        
    </div></div>)
}
import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {


    //register is a hook which is used to register the input elements
    //handleSubmmit is a hook which is used to handle the form submmit 
    const {register,handleSubmit} = useForm()
    
    const submitHandler = (data)=>{
        console.log("data..",data)
    }


  return (
    <div>
        <h1 style ={{color:"blue"}}>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type="text" {...register("userName")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type = "number" {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label>
                <br></br>
                MALE  : <input type = "radio" name='gender' value="male" {...register("gender")}></input> <br></br>
                FEMALE  : <input type = "radio" name='gender' value="female" {...register("gender")}></input> <br></br>
            </div>
            <div>
                <label>SKILLS</label> <br/>
                <input type = "checkbox" name="skills" value="java" {...register("skills")}></input> JAVA <br/> 
                <input type = "checkbox" name="skills" value="react" {...register("skills")}></input> REACT <br/>
                <input type = "checkbox" name="skills" value="angular" {...register("skills")}></input> ANGULAR <br/>
            </div>
            <div>
                <label>JOINING DATE</label>
                <input type = "date" {...register("joiningDate")}></input>
            </div>
            <div>
                <label>FAV COLOR</label>
                <input type = "color" {...register("favColor")}></input>
            </div>
        <div>
            <input type="submit" value="Submit" className="btn btn-primary"/>
        </div>
        </form>
    </div>
  )
}

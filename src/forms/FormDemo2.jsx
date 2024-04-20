import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {


    const {register,handleSubmit,formState:{errors},reset} = useForm()

    console.log("errors..",errors)
    const submitHandler = (data)=>{
        console.log("data..",data)
    }

    const validationSchema = {
        age:{
            required:{
                value:true,
                message:"age is required*"
            },
            min:{
                value:18,
                message:"age should be greater than 18"
            }
        },
        address:{
            required:{
                value:true,
                message:"address is required*"
            },
            minLength:{
                value:5,
                message:"address should be greater than 5"
            },
            maxLength:{
                value:10,
                message:"address should be less than 10"
            }

        },
        contact:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/^[6-9]{1}[0-9]{9}$/,
                message:"contact should be valid"
            }
        }
    
    }

  return (
    <div>
        <h1 style ={{color:"blue"}}>FORM DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type="text" {...register("name",{required:{value:true,message:"name is required*"}})}></input>
                
                {
                    errors.name && <p style={{color:"red"}}>{errors.name.message}</p>
                }
            </div>
            <div>
                <label>AGE</label>
                <input type="number" {...register("age",validationSchema.age)}></input>
                {
                    errors.age && <p style={{color:"red"}}>{errors.age.message}</p>
                }
            </div>
            <div>
                <label>ADDRESS</label>
                <input type="text" {...register("address",validationSchema.address)}></input>
                {
                    errors?.address && <p style={{color:"red"}}>{errors.address.message}</p>
                }
            </div>
            <div>
                <label>CONTACT</label>
                <input type="text" {...register("contact",validationSchema.contact)}></input>
                {
                    errors?.contact && <p style={{color:"red"}}>{errors.contact.message}</p>
                }
            </div>
            <div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
                <input type="reset" value="Reset" className="btn btn-primary" onClick={()=>reset()}/>
            </div>
        </form>
    </div>
  )
}

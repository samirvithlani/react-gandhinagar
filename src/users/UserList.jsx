import React from 'react'

export const UserList = (props) => {
    const userObj  = {
        id: 4,
        name:"parth",
        age: 26
    }
  return (
    <div>
        <h1>USER LIST</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    // props.users && props.users.length>0 && props.users.map((user) => {
                        props.users?.map((user)=>{
                            return(<tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>{props.deleteUser(user.id)}}>DELETE</button>
                                </td>
                            </tr>)
                        })
                }
            </tbody>
        </table>
        {/* <button onClick={()=>{props.test()}}>CLICK</button> */}
            <button className='btn btn-primary' onClick={()=>{props.addUser(userObj)}}>ADD USER</button>        
    </div>
  )
}

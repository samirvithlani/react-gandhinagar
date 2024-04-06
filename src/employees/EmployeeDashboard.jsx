import React from 'react'
import { Link } from 'react-router-dom'

export const EmployeeDashboard = () => {

  const employees =[
    {
      id:104,
      name: "EMPLOYEE 4"
    },
    {
      id:105,
      name: "EMPLOYEE 5"
    }
  ]


  return (
    <div>
      <h1>EMPLOYEE DASHBOARD</h1>
        <ul>
          <li>
            <Link to = "/empdashboard/detail/101">EMPLOYEE 1</Link>
          </li>
          <li>
          <Link to = "/empdashboard/detail/102">EMPLOYEE 2</Link>
          </li>
          <li>
          <Link to = "/empdashboard/detail/103">EMPLOYEE 3</Link>
          </li>
        </ul>
        {
          employees.map((emp)=>{
            return(
              <ul>
                <li>
                  <Link to = {`/empdashboard/detail/${emp.id}`}>{emp.name}</Link>
                </li>
              </ul>
            )
          })
        }

      </div>
  )
}

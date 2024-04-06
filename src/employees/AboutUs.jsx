import React from 'react'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <div>
        <h1>ABOUT US</h1>
        <ul>
          <li>
            <Link to = "/aboutus/company">About Company</Link>
          </li>
          <li>
            <Link to = "country">About Country</Link>
          </li>
          <li>
            <Link to = "/aboutculture">About Culture</Link>
          </li>
          
        </ul>
    </div>
  )
}

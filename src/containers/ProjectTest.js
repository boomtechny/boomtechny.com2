import React from 'react'
import { getRouteProps, Link } from 'react-static'
//

export default getRouteProps(({ project }) => (
  <div>
    <Link to="/work/">{'<'} Back</Link>
    <br />
    <h3>{project.title}</h3>

  </div>
))

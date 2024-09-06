import React from 'react'
import { Link,Outlet } from 'react-router-dom';
import Homepage from './Homepage';

function Women() {
  return (
    <div>
        <Homepage/>
        Women Items:
        <ul>
            <li><Link to="groom">Groom</Link></li>
            <li><Link to="shirt">Shirt</Link></li>
            <li><Link to="trouser">Trouser</Link></li>
            <li><Link to="jewellery">Jewellery</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Women



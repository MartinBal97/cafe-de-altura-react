import { Link } from "react-router-dom";

export default function NavLink({nameLink, path}) {
    return ( 
        <li> 
            <Link className="mx-[0.5rem]" to={path}>{nameLink}</Link>                    
        </li>
    )
}
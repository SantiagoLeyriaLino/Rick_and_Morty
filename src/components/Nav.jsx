
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from "./SearchBar";

        

export default function Nav({onSearch}) {
   
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
            <Link to="/about"> <h3>About</h3> </Link>
            <Link to="/home"><h3>Home</h3></Link>
        </nav>
    )
}
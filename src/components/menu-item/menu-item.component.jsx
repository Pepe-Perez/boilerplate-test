import React from 'react';

import { Link } from 'react-router-dom';

const MenuItem = ({item, handleToggle}) => {
    const {name, pathUrl} = item;
    return(
    <li className="header-nav__item">
        <Link className="header-nav__link" to={pathUrl} onClick={handleToggle}>
            {name}
        </Link>
    </li>
)};

export default MenuItem;

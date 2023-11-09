import React from 'react'
import { Link } from 'react-router-dom';

const Country = ({name}) => {
  return (
    <Link to={`/weather?q=${name}`}>
      <li className="p-4 shadow-md rounded border-b-2 border-cyan-200">{name}</li>
    </Link>
  );
}

export default Country
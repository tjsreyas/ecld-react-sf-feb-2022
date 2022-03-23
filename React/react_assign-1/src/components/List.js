import React from 'react';
import './List.css'
const List = () => {
  return (
    <div className='list-container'>
        <table>
            <tr>
     <td><h2>Soft Skills</h2>
      <ul>
          <li>Communication Skills</li>
          <li>People Management</li>
          <li>Reading</li>
          <li>Speaking</li>
          <li>Writing</li>
      </ul>
      </td> 
      <td><h2>Technical Skills</h2>
      <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>Bootstrap</li>
          <li>Babel, Webpack</li>
      </ul>
      </td>
      </tr>
      </table>
    </div>
  );
}

export default List;

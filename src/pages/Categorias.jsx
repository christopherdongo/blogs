import { Link } from 'react-router-dom';
export const Categorias = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Categorias'>Categorias</Link>
        </li>
        <li>
          <Link to='/BlogPost'>Home</Link>
        </li>
      </ul>

      <h1>Categorias</h1>
    </div>
  );
};

import { BlogPost, Categorias, Home } from '../pages';

export const routes = [
  {
    Name: 'Home',
    Component: <Home />,
    path: '/',
  },
  {
    Name: 'Categorias',
    Component: <Categorias />,
    path: '/Categorias',
  },
  {
    Name: 'BlogPost',
    Component: <BlogPost />,
    path: '/BlogPost',
  },
];

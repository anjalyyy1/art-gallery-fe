/* eslint-disable react/display-name */
import { lazy } from 'react';

type RouteConfig = {
  path?: string;
  exact?: boolean;
  component?: any;
  title?: string;
  renderComponent?: any;
};

const routes: RouteConfig[] = [
  {
    path: '/arts',
    exact: true,
    component: lazy(() => import('pages/artGallery')),
  },
  {
    path: '/arts/:id',
    exact: true,
    component: lazy(() => import('pages/art')),
  },
];

export { routes };

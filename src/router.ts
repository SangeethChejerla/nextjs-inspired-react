import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import AppLayout from './app/_layout';
import AboutPage from './app/about/page';
import BlogPage from './app/blog/page';
import GetUsPage from './app/getus/page';
import IndexPage from './app/index';

const rootRoute = createRootRoute({
  component: AppLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
});

const getUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/getus',
  component: GetUsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  getUsRoute,
  blogRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

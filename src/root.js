import { Router, Route, RootRoute } from "@tanstack/react-router";
import IndexPage from "./pages/Index";
import VedtekterPage from "./pages/Vedtekter";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

const vedtekterRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/vedtekter",
  component: VedtekterPage,
});



const routeTree = rootRoute.addChildren([
  indexRoute,
  vedtekterRoute,
]);

export const router = new Router({ routeTree });

export default router;
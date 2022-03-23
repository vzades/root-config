import { registerApplication, start } from "single-spa";

import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"));

const applications = constructApplications({
  routes,
  loadApp({name}) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications
});

applications.forEach(registerApplication);

// registerApplication({
//   name: "@nagp/navbar",
//   app: () => System.import("@nagp/navbar"),
//   activeWhen: ["/"]
// });

// registerApplication({
//   name: "@nagp/account",
//   app: () => System.import("@nagp/account"),
//   activeWhen: ["/account"]
// });

// registerApplication({
//   name: "@nagp/admin",
//   app: () => System.import("@nagp/admin"),
//   activeWhen: ["/admin"]
// });

start({
  urlRerouteOnly: true,
});

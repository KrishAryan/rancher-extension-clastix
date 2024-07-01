import { RouteConfig } from "vue-router";
import Dashboard from "./Dashboard.vue";
import Helloworld from "./pages/c/_cluster/kubearmor/helloworld.vue"
import { CLASTIX_NAME } from "./types";

export const routes: RouteConfig[] = [
  {
    name: `c-cluster-${CLASTIX_NAME}-dashboard`,
    path: `/c/:cluster/:product/dashboard`,
    component: Dashboard,
  },
  {
    name: `c-cluster-${CLASTIX_NAME}-helloworld`,
    path: `/c/:cluster/:product/helloworld`,
    component: Helloworld,
    meta:      {
      product: 'kubearmor'
    },
  }
];

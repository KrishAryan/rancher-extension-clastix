<script>
import { WORKLOAD_TYPES } from "@shell/config/types";
import Console from "./components/Console.vue";
import Install from "./components/Install.vue";

export default {
  name: "Dashboard",
  layout: "single",
  async beforeMount() {
    const res = await this.$store.dispatch(`cluster/findMatching`, {
      type: WORKLOAD_TYPES.DEPLOYMENT,
      selector: "kubearmor-app=kubearmor-operator",

    },{ root: true });
   
    this.operatorPresence=res.length
    var type
    const ingress = res[0];
    this.consoleUrl = "https://kubearmor.io/";
    type='security.kubearmor.com.kubearmorpolicies'
  if ( this.$store.getters['cluster/canList'](type) ) {
        const res1 = await this.$store.dispatch('cluster/findAll', { type });
            console.log(res1)
      }
  else{
    console.log("cannot list")
  }
   

  },


  components: {
    Console,
    Install,
  },

  data() {
    return {
      consoleUrl: "",
      operatorPresence: false,
    };
  },
  computed: {
    hasKubearmor() {
      return !!this.operatorPresence;
    },
  },
};
</script>
<template>

  <Console v-if="hasKubearmor" :url="consoleUrl" />
  <Install v-else />
</template>

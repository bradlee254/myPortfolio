import { createRouter, createWebHistory } from "vue-router";

import Home from "../layout/Home.vue";
import About from "../layout/About.vue";
import Skills from "../layout/Skills.vue";
import Projects from "../layout/Projects.vue";
import ProjectDetails from "../layout/ProjectDetails.vue";
import Contact from "../layout/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/skills", component: Skills },
    { path: "/projects", component: Projects },
    {
      path: "/projects/:id",
      component: ProjectDetails,
      props: true,
    },
    { path: "/contact", component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

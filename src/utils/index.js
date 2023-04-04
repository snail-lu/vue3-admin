import Layout from '@/components/layout/index.vue';

const modules = import.meta.glob('../views/**/*.vue');

export const transformRoutes = (routes) => {
    routes.forEach((route) => {
        route.component = loadComponent(route.component);
        // debugger;
        if (route.children) {
            transformRoutes(route.children);
        }
    });
    return routes;
};

export const loadComponent = (component) => {
    if (component === 'Layout') {
        return Layout;
    } else {
        return modules[component];
    }
};

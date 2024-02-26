export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useMyAuthStore();
    if (auth.isAuthenticated() === true) {
        return navigateTo
            ('/')
    }
})

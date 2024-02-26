export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useMyAuthStore();
    if (auth.isAuthenticated() === false) {
        return navigateTo
            ('/login')
    }
})

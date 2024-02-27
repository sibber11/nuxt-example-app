export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useMyAuthStore();
    if (!auth.authenticated) {
        return navigateTo
            ('/login')
    }
})

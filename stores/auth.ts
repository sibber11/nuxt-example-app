import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore('auth', () => {
  const token = useCookie('token');
  const authenticated = ref(token.value != null);
  async function login(username: string, password: string) {
    const { data } = await useFetch('/api/login', {
      method: 'post',
      body: {
        username, password
      }
    });
    if (data.value?.token) {
      const token = useCookie('token');
      token.value = data.value.token;
      authenticated.value = true;
    }
    navigateTo('/');
  }
  function logout() {
    const token = useCookie('token');
    authenticated.value = false;
    token.value = null;
    navigateTo('/login');
  }
  return {
    login, logout, authenticated
  }
})

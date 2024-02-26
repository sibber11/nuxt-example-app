import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore('auth', () => {
  const token = ref('');
  function login(_token: string) {
    token.value = _token;
  }
  function logout() {
    token.value = '';
    return navigateTo('/login');
  }
  function isAuthenticated() {
    return token.value != '';
  }
  return {
    token, login, logout, isAuthenticated
  }
})

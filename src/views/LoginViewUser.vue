<template>
  <div class="container">
    <h1>Login Page</h1>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Username</label>
  <input  v-model="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" required>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Password</label>
  <input  v-model="password" type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" required>
</div>

      <button type="submit" class="btn btn-primary mb-4 mx-2">Login</button>
    </form>

    

    <p>{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSocieties from '../composable/societies'

const router = useRouter()
const { login } = useSocieties()

const name = ref('')
const password = ref('')
const errorMessage = ref('')

const loginUser = async () => {
  try {
    await login({ name: name.value, password: password.value })
    // Jika login berhasil, arahkan ke halaman yang sesuai
    router.push({ name: 'user' })
  } catch (error) {
    console.error('Login error:', error)
    // Tangani kesalahan login dan tampilkan pesan kesalahan
    errorMessage.value = 'Login failed. Please check your credentials and try again.'
  }
}
</script>

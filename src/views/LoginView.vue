<template>
    <div class="col-md-6 m-auto">
      <h1>Login Page</h1>
      <form @submit.prevent="submitLogin">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="from.email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleFormControlInput1" v-model="form.password" />
    </div>
    <button type="submit" class="btn btn-primary mb-4">Edit Data</button>
</form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';

const form = ref({
    email: '',
    password: '',
});

const submitLogin = async ()=> {
    await axios.post('/login',{
        email:form.value.email,
        password: form.value.password
    });
    
    router.push('/');
}

</script>

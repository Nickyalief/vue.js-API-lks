<template>
  <div>
    <div class="btn btn-secondary">
      Ini penampilan dari project vue Pertama ku 
    </div>
    <h2>Status Form {{ form.open }}</h2>
    <h2>Judul Form {{ form.title }}</h2>
    <input type="text" v-model="form.title">

    <h3>Angka {{ angka }}</h3>

    <button class="btn btn-warning mx-2" @click="increment">Tambah Angka</button>
    <button class="btn btn-danger" @click="decrement">Kurang Angka</button>

    <br><br>

    <h2>
      Nama saya adalah 
      <span v-if="form.nama">{{ form.nama }}</span>
      <span v-else>🥵</span>
    </h2>

    <button class="mx-2" @click="showModal(true)">Tambah Nama</button>
    <button v-if="form.nama" class="mx-2" @click="hapusNama">Hapus Nama</button>
    <modal-dialog :show="form.open" @closeModal="tutupModal" @simpan="tampilNama" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import ModalDialog from '../components/TheModalDialog.vue';

const form = reactive({
  open: false,
  title: 'ini adalah form',
  nama: ''
})

const angka = ref(0);

const increment = () => angka.value++
const decrement = () => angka.value--

const showModal = (data) => {
  form.open = data
}

const tutupModal = (data) => {
  form.open = data
}

const tampilNama = (data) => {
  form.nama = data
}

const hapusNama = () => {
  form.nama = ''
}
</script>

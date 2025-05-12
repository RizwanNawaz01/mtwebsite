import Swal from 'sweetalert2'

console.log('✅ SweetAlert2 plugin loaded')

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('swal', Swal)
})
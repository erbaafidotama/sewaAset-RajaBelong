import { writable, get } from 'svelte/store'

export const cart = writable({})
export const pesan = writable({
    pesan_tanggal: "",
})

export const getPesan = () => get(pesan)
import { browser } from "$app/environment";
import type { User } from "$lib/types";
import axios from "axios";
import { writable } from "svelte/store";


const authValue = browser ? JSON.parse(window.localStorage.getItem('auth') || '{}') : {};
export const auth = writable(authValue)


export let checkLoggedInUser = () => {
    if (browser) {
        let authValue = JSON.parse(window.localStorage.getItem('auth') || '{}');
        auth.set(authValue)
    }
}

export let me = writable(null as User );

auth.subscribe((value) => {
    if (value?.loggedInUser) {
        me.set(value.loggedInUser)
    }
})


export const token = writable(authValue.token)

if (authValue.token) {
    axios.defaults.headers.common['Authorization'] = `bearer ${authValue.token}`
    token.set(authValue.token)
}
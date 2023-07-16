<script lang="ts">
	import { imageUrl } from '$lib/util/imageutil';
  import { Input, Button, Alert } from "flowbite-svelte";
  import { login, register } from "$lib/api/auth";
  import { goto } from "$app/navigation";
  let mode = "login";
  let username = "";
  let password = "";
  let error: null | string = null;
  let registration = {
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    last_name: "",
    username: "",
  };

  function registerMode() {
    error = null;
    mode = "register";
  }

  function onLogin() {
    error = null;
    login(username, password)
      .then((res) => {
        goto("/profile/me");
      })
      .catch((err) => {
        error = err;
      });
  }

  function onRegister() {
    error = null;
    register(registration)
      .then((res) => {
        goto("/profile/me");
      })
      .catch((err) => {
        error = err;
      });
  }
</script>



<div class="grid grid-cols-1 md:grid-cols-2 h-screen">
  <div class="bg-primary-700 flex items-center justify-center min-h-[150px]">
    <h1
      class="text-white font-bold lg:text-7xl md:text-5xl text-2xl bold text-center"
    >
    <img src="/img/logo.png" class="w-32 m-auto" />
      Dream, Create & <br />Collabortate
    </h1>
  </div>

  <div class=" items-center w-full mt-9 flex items-center">
    <div class="w-full">
      {#if error}
        <div class="m-9">
          <Alert color="red"
            >{@html error.replace("clear_password:", "Password")}</Alert
          >
        </div>
      {/if}
      {#if mode === "login"}
        <h1
          class="text-primary-900 font-bold lg:text-4xl md:text-5xl text-2xl bold text-center"
        >
          Login
        </h1>
        <div class="m-9 space-y-4">
          <Input
            id="large-input"
            size="lg"
            placeholder="Email"
            bind:value={username}
          />
          <Input
            id="large-input"
            size="lg"
            type="password"
            placeholder="Password"
            bind:value={password}
          />

          <div class="flex flex-row justify-center text-center">
            <div class="w-full">
              <Button class="w-full" size="lg" on:click={onLogin}>
                <i class="fas fa-sign-in-alt mr-4" />
                Login
              </Button>
            </div>
          </div>
          <div class="mt-9 text-md text-blue-600 text-center">
            <button class="hover:text-primary-900">Forgot Password</button>
            |
            <button class="hover:text-primary-900" on:click={registerMode}
              >Register</button
            >
          </div>
        </div>
      {:else}
        <h1
          class="text-primary-900 font-bold lg:text-4xl md:text-5xl text-2xl bold text-center"
        >
          Register
        </h1>
        <div class="m-9 space-y-4">
          <Input
            size="lg"
            placeholder="Firstname"
            bind:value={registration.name}
          />
          <Input
            size="lg"
            placeholder="Lastname"
            bind:value={registration.last_name}
          />
          <Input
            size="lg"
            placeholder="Email"
            bind:value={registration.email}
          />
          <Input
            size="lg"
            placeholder="Username"
            bind:value={registration.username}
          />
          <Input
            type="password"
            size="lg"
            placeholder="Password"
            bind:value={registration.password}
          />
          <Input
            type="password"
            size="lg"
            placeholder="Repeat Password"
            bind:value={registration.passwordConfirm}
          />
          <div class="flex flex-row justify-end">
            <Button
              class="bg-primary-600 hover:bg-primary-600 w-full"
              on:click={onRegister}
              size="lg"
            >
              <i class="fas fa-user-plus mr-4" />
              Register</Button
            >
          </div>
        </div>
      {/if}

      <div class="text-center">
        <div class="p-8 my-8 relative">
          <hr />
          <div class="absolute top-[20px] w-full">
            <span class="bg-gray-100 px-4 text-gray-400"> OR </span>
          </div>
        </div>

        <div class="px-9 md:space-x-4   flex flex-col md:flex-row">
          <a
            href="/oauth/google"
            class="bg-red-600  p-4 mb-2 md:mb-0 text-white flex-1 text-center"
          >
            <i class="fab fa-google mr-2 md:text-lg" />
            Login With Google
          </a>
          <a
            href="/oauth/linkedin"
            class="bg-blue-600  p-4 text-white flex-1 text-center"
          >
            <i class="fab fa-linkedin mr-2 md:text-lg" />
            Login With LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

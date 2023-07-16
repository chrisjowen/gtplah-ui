<script lang="ts">
  import "../app.postcss";
  import { page } from "$app/stores";
  import { auth } from "$lib/store/index";
  import { browser } from "$app/environment";
  let loggedInUser: any = null;
  let hideSideBar = true;

  auth.subscribe((value) => {
    loggedInUser = value.loggedInUser;
  });

  $: {
    if (browser) {
      $page.route.id && document.getElementById("main-pane")?.scrollTo(0, 0);
    }
  }
</script>

<div class="flex flex-col absolute inset-0 h-full bg-red-600">
  <div class="w-full  text-white drop-shadow-md z-40 hidden">
    <div class="flex flex-row items-center">
      <div class="flex-1 flex">
        <div class="flex-1 flex items-center">
          <a href="/" class="flex p-3">
            <div class="flex items-center">
              <span class="text-white font-bold lg:text-xl bold">GPTLah</span>
            </div>
          </a>
        </div>
        <a
          href="#stay"
          on:click={() => (hideSideBar = false)}
          class="md:hidden p-2"
        >
          <i class="fas fa-bars text-lg" />
        </a>
      </div>
      <div class="hidden md:block">
        <div class="justify-end space-x-4 flex text-xs">
          {#if loggedInUser}
            <!-- <NotificationMenu /> -->
            <div class=" m-1 mx-3" />
          {:else}
            <div>
              <button class="hover:bg-primary-600 rounded-xl p-2 px-3">
                <i class="fas fa-sign-in-alt text-xs mr-1" />
                Login
              </button>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div id="main-pane" class="flex-1 h-full overflow-auto">
    <slot />
  </div>
</div>

<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { resetToken } from "$lib/api/auth";
  import { onMount } from "svelte";

  onMount(() => {
    resetToken($page.params.token).then((_) => {
      if (browser && window.opener) {
        window.opener.postMessage({ token: $page.params.token }, "*");
        window.close();
      }
      setTimeout(() => goto("/profile/me"), 0);
    });
  });
</script>

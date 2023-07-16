<script>
  import { each } from "svelte/internal";

  export let data = [];
</script>

<div class="flex p-8 drop-shadow-md">
  {#each data as event}
    <div
      class="text-red-600 w-[350px] mr-4 p-4 border hover:drop-shadow-lg bg-white rounded-lg text-center"
    >
      <object
        title={event.description}
        data="https://image.thum.io/get/{event.url}"
        type="image/png"
        class="h-[200px] w-full border"
      />
      <h1 class="text-xl font-bold mt-4">{event.title}</h1>
      <p class="text-xs">{event.description}</p>
    </div>
  {/each}
</div>

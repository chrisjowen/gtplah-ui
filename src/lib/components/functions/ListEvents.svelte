<script>
  import { each } from "svelte/internal";

  export let data = [];
</script>

<div class="flex md:p-4 shrink-0 overflow-auto border bg-gray-50 rounded-md">
  {#each data as event}
    <div
      class="text-red-600 md:w-[350px] w-full shrink-0 md:mr-2 p-4 border  drop-shadow-md hover:drop-shadow-lg bg-white rounded-lg text-center"
    >
      <object
        title={event.description}
        data="https://image.thum.io/get/{event.url}"
        type="image/png"
        class="h-[200px] w-full border"
      />
      <h1 class="text-xl font-bold mt-4">{event.title}</h1>
    </div>
  {/each}
</div>

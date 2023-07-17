<script lang="ts">
  import api from "$lib/api";
  import { Button, Checkbox, Input, Label, Textarea } from "flowbite-svelte";

  let submitted = false;

  let form = {
    email: "",
    feedback: "",
    informed: "",
  };

  function submit() {
    api.feedback.create(form).then((r) => {
      submitted = true;
    });
  }
</script>

<div class=" h-full bg-[#98CBCC] bg-[url('/img/bnr.png')] bg-cover">
  <!-- HERO -->
  <div
    class=" h-full lg:py-[50px] lg:w-[1000px] drop-shadow-lg m-auto flex flex-col"
  >
    <div class="flex flex-col justify-center flex bg-white rounded-b-md">
      <div class="flex w-full flex-row mb-3 p-4 bg-gray-100">
        <div class="flex-shrink-0">
          <img
            class="w-[40px] w-[40px] rounded-full"
            src="/img/auntie.png"
            alt="you"
          />
        </div>
        <span class="b-2 border max-w-[100%] p-4 rounded-md bg-red-600">
          <div class="prose max-w-none !text-white">
            <p>😴</p>
          </div>
        </span>
      </div>

      {#if !submitted}
        <div class="p-4">
          <h1 class="font-bold text-xl mb-2">Auntie Is Sleeping Now</h1>
          <p>
            She's old lah! Please leave a message if you enjoyed talking with
            her.
          </p>
        </div>
        <div class="p-4 flex-1">
          <Label>Email (optional)</Label>
          <Input
            id="input"
            bind:value={form.email}
            type="text"
            class="mb-4"
            placeholder="Email address"
          />
          <Label>Feedback</Label>
          <p class="text-xs">Any feedback that would help?</p>
          <Textarea
            class="h-[200px] border"
            required={true}
            bind:value={form.feedback}
            placeholder="Feedback"
          />
          <Button on:click={submit}>Submit</Button>
        </div>
      {:else}
        <div class="p-4">
          <h1 class="font-bold text-xl mb-2">
            Thanks for the feedback, Auntie will be pleased
          </h1>
        </div>
      {/if}
    </div>
  </div>
</div>

<script lang="ts">
  import { connect } from "$lib/channel/socket";
  import { Input } from "flowbite-svelte";
  import type { Channel } from "phoenix";
  import { onMount } from "svelte";
  import SvelteMarkdown from "svelte-markdown";
  import ListEvents from "$lib/components/functions/ListEvents.svelte";

  let channel: Channel;
  let input = "";
  let innerWidth = 0;
  let loading = false;
  let messages = [
    {
      content: "Hi, I'm Auntie Chan. How can I help you?",
      sender: "server",
    },
  ];

  onMount(async () => {
    let userId = 1;
    channel = await connect(`user:${userId}`, "empty");
    channel.on("message:server:send", onMessageRecieved);
  });

  function componentFor(name: string) {
    return ListEvents;
  }

  function onKeyDown(e: KeyboardEvent): void {
    if (e.code === "Enter" || e.keyCode===13) {
      send();
    }
  }

  function send(): void {
    if(input == "") return

    loading = true;
    channel.push("message:client:send", { message: input });
    messages = messages.concat({ content: input, sender: "me" });
    input = "";
    scrollBottom();
  }

  function onMessageRecieved(msg: any) {
    loading = false;
    messages = messages.concat({ ...msg, sender: "server" });
    scrollBottom();
  }

  function scrollBottom() {
    let el = document.getElementById("messages");
    setTimeout(() => {
      el?.scrollTo(0, el.scrollHeight);
      if(innerWidth > 768) {
        document.getElementById("input")?.focus();
      }
    }, 100);
  }
</script>
<svelte:window bind:innerWidth={innerWidth} />

<div class=" h-full bg-[#98CBCC] bg-[url('/img/bnr.png')] bg-cover">
  <!-- HERO -->
  <div
    class=" h-full lg:py-[50px] lg:w-[1000px] drop-shadow-lg m-auto flex flex-col"
  >
    <div
      class="flex-1 w-full overflow-hidden
      flex 
      justify-end
      items-end
      rounded-t-lg
      bg-white
      flex-col
      m-auto h-full"

    >
      <div class="w-full 
      
      flex h-full justify-end items-end flex-col
      p-4 overflow-auto flex-1 " id="messages">
        <!-- {#each [0,1,2,3,4,5] as message} -->
        {#each messages as message}
          <div
            class="flex w-full flex-row mb-3
            {message.sender == 'server' ? '' : 'justify-end'} 
            "
          >
            {#if message.sender == "server"}
              <div class="flex-shrink-0">
                <img
                  class="w-[40px] w-[40px] rounded-full"
                  src="/img/auntie.png"
                  alt="you"
                />
              </div>
            {/if}
            <span
              class="b-2 border max-w-[75%] p-4 rounded-md {message.sender ==
              'server'
                ? 'bg-red-600'
                : 'bg-gray-600'} "
            >
              {#if message.function != null}
                <div class="mb-2">
                  <svelte:component
                    this={componentFor(message.function)}
                    data={message.results}
                  />
                </div>
              {/if}
              {#if message.content}
                <div
                  class="prose max-w-none !text-white prose-strong:!text-white prose-li:!text-white prose-ol:!text-white prose-ul-marker:!text-white prose-ul:!text-white prose-a:!text-blue-100"
                >
                  <SvelteMarkdown source={message.content} />
                </div>
              {/if}
            </span>
          </div>
        {/each}
        <!-- {/each} -->

        {#if loading}
          <div class="flex w-full flex-row mb-3">
            <div class="flex-shrink-0">
              <img
                class="w-[40px] w-[40px] rounded-full"
                src="/img/auntie.png"
                alt="you"
              />
            </div>
            <span class="b-2 border max-w-[50%] p-4 rounded-md bg-red-600">
              <div class="prose max-w-none !text-white">
                <i class="fas fa-spinner animate-spin" />
              </div>
            </span>
          </div>
        {/if}
      </div>
    </div>
    <div class="flex flex-row justify-center flex bg-red-700 rounded-b-md">
      <div class="p-2 flex-1 ">
        <Input
          id="input"
          bind:value={input}
          type="text"
          disabled={loading}
          placeholder="Ask a question"
          on:keydown={onKeyDown}
        />
       
      </div>
      <div>
        <button
          class="bg-white text-red-700  rounded-md  border p-2 px-6 my-2 mr-2 disabled:opacity-50"
          on:click={send}
          disabled={loading }
        ><i class="fas fa-paper-plane" /></button>
      </div>
    </div>
  </div>
</div>



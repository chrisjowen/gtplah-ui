<script lang="ts">

  import { auth } from "$lib/store/index";



  function onCopyToClipboard(event: MouseEvent) {
    

    let token = $auth.token;
    //Copy to clipboard
    navigator.clipboard.writeText(token).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }
</script>
Token: 

<div class="border p-4 bg-white" on:click={onCopyToClipboard}>
    {$auth.token}
</div>
<script>
  import { goto } from "$app/navigation";
  import { logout } from "$lib/api/auth";
  logout();
  goto("/");
</script>

Logging out...

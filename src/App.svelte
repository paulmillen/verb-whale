<script>
  import { Router, Route } from "svelte-routing";
  import VerbWhale from "./routes/verbwhale/VerbWhale.svelte";
</script>

<style>
  .route-container {
    width: 100%;
    height: 100%;
  }
</style>

<Router>
  <div class="route-container">
    <Route path="/" component={VerbWhale} />
  </div>
</Router>

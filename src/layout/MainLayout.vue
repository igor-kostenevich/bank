<template>
  <the-navbar></the-navbar>
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import TheSidebar from '../components/TheSidebar'
import AppMessage from '../components/ui/AppMessage'
import TheNavbar from '../components/TheNavbar'

export default {
  components: { TheNavbar, AppMessage, TheSidebar }
}
</script>

<style>

</style>

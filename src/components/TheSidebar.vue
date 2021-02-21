<template>
  <transition name="slide-sidebar">
    <div :class="['sidebar']" v-if="sidebar">
      <span class="sidebar-close" @click="close">&times;</span>

      <div class="sidebar-content">
        <p>Добро пожаловать в систему по учету заявок.</p>
        <p>Для ознакомления с веб-приложением перейдите на страницу "Помощь"</p>
        <a class="link_github" href="https://github.com/igor-kostenevich/bank" target="_blank">Посмотреть исходники на github</a>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const sidebar = computed(() => store.state.sidebar)

    return {
      sidebar,
      close: () => store.commit('closeSidebar')
    }
  }
}
</script>

<style scoped>
.slide-sidebar-enter-active {
  transform: translate(100%, 0px);
}

.slide-sidebar-leave-active {
  transform: translate(100%, 0px);
}
</style>

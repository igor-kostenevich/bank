<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="Список заявок" v-else>
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>

    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>

    <teleport to='body'>
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import RequestFilter from '../components/request/RequestFilter'
import AppLoader from '../components/ui/AppLoader'
import RequestModal from '../components/request/RequestModal'
import AppModal from '../components/ui/AppModal'
import RequestTable from '../components/request/RequestTable'
import AppPage from '../components/ui/AppPage'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    const requests = computed(() => store.getters['request/requests'].filter(request => {
      if (filter.value.name) {
        return request.fio.includes(filter.value.name)
      }
      return request
    }).filter(request => {
      if (filter.value.status) {
        return filter.value.status === request.status
      }
      return request
    })

    )

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    return {
      modal, requests, loading, filter
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal, AppLoader, RequestFilter },
  name: 'Home'
}
</script>

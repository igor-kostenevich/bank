<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Поиск по имени" v-model="name">
    </div>
    <div class="form-control">
      <select name="" id="" v-model="status">
        <option disabled selected>Поиск по статусу</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">Очистить</button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],

  setup (_, { emit }) {
    const name = ref('')
    const status = ref()
    const isActive = computed(() => name.value || status.value)

    watch([name, status], values => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1]
      })
    })

    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = null
      }
    }
  }
}
</script>

<style>

</style>

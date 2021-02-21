<template>
  <!-- <transition> -->
    <div class="question" @click="isOpen = !isOpen">
      <div :class="['question-title', {'open': isOpen}]">
        {{ question.title }}
      </div>
      <p class="question-body" v-if="isOpen">{{ question.text }}</p>
    </div>
  <!-- </transition> -->
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      isOpen: ref(false)
    }
  },
  props: ['question']
}
</script>

<style>
</style>

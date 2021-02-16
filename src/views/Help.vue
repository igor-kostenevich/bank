<template>
  <app-page back title="Помощь">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import QuestionItem from '../components/question/QuestionItem'
import AppPage from '../components/ui/AppPage'

export default {
  setup () {
    const questions = [
      { title: 'Что есть в данной системе?', text: 'Тут есть все, для того, чтобы что то сделать' },
      { title: 'Как работает авторизация?', text: 'Через Firebase' }
    ]

    return {
      questions
    }
  },

  components: { AppPage, QuestionItem }

}
</script>

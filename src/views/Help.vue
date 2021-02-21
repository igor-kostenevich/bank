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
      { title: 'Для чего эта система?', text: 'Это миниклон условного банка для создания заявок пользователями.' },
      { title: 'Что можно делать в этом веб-приложении?', text: 'Можно создать заявку, зайти в определенную заявку, изменить статус заявки, удалить заявку, фильтровать заявки по названию и/или статусу.' },
      { title: 'Как сделано это веб-приложение?', text: 'Это веб-приложение сделано с помощью фреймворка JavaScript - Vue.js 3. Приложение написано на Composition API, а так же использованы vue-router и vuex. Заявки сохраняются в базу данных Firebase. Для всех полей сделана валидация.' },
      { title: 'Как работает авторизация?', text: "Авторизация работает с помощью jwt token'a и Firebase." },
      { title: 'Известные баги...', text: '- При логине с неправильными данными при многократном нажатии кнопки "Войти" может возникнуть ошибка входа.' }
    ]

    return {
      questions
    }
  },

  components: { AppPage, QuestionItem }

}
</script>

<template>
  <div class="auth-page">
    <h2>Регистрация</h2>
    <p>
      <router-link :to="{ name: 'login' }">Уже есть аккаунт?</router-link>
    </p>
    ОШИБКИ ВАЛИДАЦИИ
    <form @submit.prevent="onSubmit">
      <v-text-field
        label="Имя пользователя"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        label="Email"
        :rules="rules"
        hide-details="auto"
        type="email"
      ></v-text-field>

      <v-text-field
        label="Пароль"
        :rules="rules"
        hide-details="auto"
        type="password"
      ></v-text-field>

      <v-btn color="primary" elevation="2" large type="submit">
        Зарегистрироваться
      </v-btn>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "icv-register",
  data: () => ({
    rules: [
      (value: string) => !!value || "Обязательное поле",
      (value: string) => (value && value.length >= 3) || "Минимум 3 символа",
    ],
  }),
  methods: {
    onSubmit() {
      console.log("форма отправлена");
    },
  },
});
</script>

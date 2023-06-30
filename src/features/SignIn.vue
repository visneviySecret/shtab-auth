<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <form v-else @submit.prevent="checkForm">
            <h3>Войти</h3>
            <Textfield
                v-model="username"
                required
                :placeholder="'Введите логин'"
                :error="error.login"
            ></Textfield>
            <Textfield
                v-model="password"
                required
                :placeholder="'Введите пароль'"
                :error="error.password"
            />
            <Button>Отправить</Button>
            <div v-if="error.message" class="error">{{ error.message }}</div>
        </form>
    </div>
</template>

<script setup>
import Textfield from '../shared/Textfield.vue'
import Button from '../shared/Button.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const isLoading = ref(false)
const error = ref({})
const username = ref('')
const password = ref('')

const checkForm = () => {
    if (username.value !== '' && password.value !== '') {
        handleSubmit()
    }

    if (username.value === '') {
        handleError('login', 'Требуется указать логин.')
        return
    }
    if (password.value === '') {
        handleError('password', 'Требуется указать пароль.')
        return
    }
}

const handleSubmit = async () => {
    const newUser = { username: username.value, password: password.value }
    try {
        isLoading.value = true
        await store.dispatch('signin', newUser)
        router.push('/profile')
    } catch (err) {
        handleError('message', err)
    } finally {
        isLoading.value = false
    }
}

const handleError = (key, err) => {
    error.value[key] = err
    setTimeout(() => {
        error.value = {}
    }, 3000)
}
</script>

<style lang="css" scoped>
form > :not(:last-child) {
    margin-bottom: 15px;
}
</style>

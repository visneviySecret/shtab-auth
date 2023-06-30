<template>
    <div>
        <div>
            <h3>Ваш профиль:</h3>
            <h4>{{ user }}</h4>
            <Button @click="handleLogOut">Выйти</Button>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const user = computed(() => store.state.user)

const handleLogOut = async () => {
    await store.dispatch('signout')
    router.push('/login')
}
</script>

<style lang="scss" scoped></style>

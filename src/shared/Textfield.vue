<template>
    <div>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
        />
        <div v-if="error" class="error">{{ error }}</div>
    </div>
</template>

<script setup>
defineProps(['modelValue', 'placeholder', 'update:modelValue', 'error'])
</script>

<style lang="css" scoped>
input {
    padding: 10px;
    border-radius: 5px;
}
</style>

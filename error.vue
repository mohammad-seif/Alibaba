<template>
	<div class="error-wrapper">
		<h1>{{ error.statusCode }}</h1>
		<p>{{ error.statusMessage }}</p>
		<button @click="handleError">Clear errors</button>
	</div>
</template>
<script setup>
const props = defineProps({
	error: Object
});
const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped lang="scss">
.error-wrapper {
	display: grid;
	place-items: center;
	margin-top: 100px;
	gap: 16px;
}
</style>

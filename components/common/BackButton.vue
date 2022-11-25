<template>
	<CommonButton class="back-btn" @click="navigateBack()">
		<Icon name="mdi:arrow-left-thin" />
		<span>Back</span>
	</CommonButton>
</template>

<script setup>
const router = useRouter();

const navigateBack = () => router.back();
</script>

<style lang="scss" scoped>
.back-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>

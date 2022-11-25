<template>
	<button class="btn">
		<slot />
	</button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
	border: none;
	outline: none;
	background-color: var($--theme-bg);
	color: var($--theme-text);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	padding: 10px 30px;
	border-radius: 4px;
	cursor: pointer;
}
</style>

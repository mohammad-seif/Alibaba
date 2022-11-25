<template>
	<button class="toggle-btn" @click="toggle()">
		<Icon name="mdi:moon-waning-crescent" />
		<span>Dark Mode</span>
	</button>
</template>

<script setup>
const toggle = () => {
	document.documentElement.classList.toggle('dark');
};
</script>

<style lang="scss" scoped>
.toggle-btn {
	min-width: 90px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	outline: none;
	border-radius: 6px;
	font-weight: 500;
	font-size: 14px;
	color: var($--theme-text);
	background-color: var($--theme-bg);
	cursor: pointer;
	padding: 0 12px;
	transition: all ease-in-out 0.1s;
	&:hover {
		box-shadow: 0 0 4px 1px var($--theme-text);
	}
	&:active {
		transform: scale(0.97);
	}
}
</style>

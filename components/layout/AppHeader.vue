<template>
	<header class="app-header">
		<h2>Where in the world?</h2>
		<LayoutThemeSwitcher />
	</header>
</template>

<style lang="scss" scoped>
.app-header {
	position: sticky;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	box-shadow: 0px 0 5px 2px rgba(0, 0, 0, 0.2);
	padding: 0 24px;
	color: var($--theme-text);
	background-color: var($--theme-bg);
	z-index: 998;
}
</style>

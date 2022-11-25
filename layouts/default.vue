<template>
	<main class="main-wrapper">
		<LayoutAppHeader />
		<div class="main-content">
			<slot />
			<div></div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.main-wrapper {
	background-color: var($--theme-bg);
	color: var($--theme-text);

	& > .main-content {
		min-height: calc(100vh - 118px);
		padding: 0 24px;
	}
}
</style>

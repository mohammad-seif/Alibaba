<template>
	<div class="search-input">
		<Icon name="mdi:magnify" />
		<input v-model="keyword" type="text" placeholder="Search for a country..." />
	</div>
</template>

<script>
import { BASE_URL } from '@/config/API';

export default defineNuxtComponent({
	data: (vm) => ({
		keyword: vm.$route.query.keyword || '',
		debounce: vm.setupDebounce(vm.fetchData, 700)
	}),
	emits: ['filterItems'],
	methods: {
		setupDebounce(fn, delay) {
			let timeout;
			return (args) => {
				if (timeout) clearTimeout(timeout);
				timeout = setTimeout(() => fn(args), delay);
			};
		},
		async fetchData() {
			const { data } = await useFetch(`${BASE_URL}/name/${this.keyword}`, { key: this.keyword });
			this.$emit('filterItems', data.value);
		}
	},
	watch: {
		keyword: {
			immediate: true,
			handler(newValue) {
				newValue && this.debounce(newValue);
			}
		}
	}
});
</script>

<style lang="scss" scoped>
.search-input {
	min-width: 300px;
	display: flex;
	align-items: center;
	background-color: var($--theme-bg);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	padding: 12px 18px;
	border-radius: 4px;

	& > input {
		background-color: var($--theme-bg);
		border: none;
		outline: none;
		padding-left: 12px;
		color: var($--theme-text);

		&::placeholder {
			font-family: 'Roboto';
		}
	}
}

@media only screen and (max-width: $--mobile-width) {
	.search-input {
		width: 100%;
	}
}
</style>

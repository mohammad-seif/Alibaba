<template>
	<section class="filter-section">
		<SearchInput :items="list" @filterItems="filterResults" />
		<FilterInput :items="list" @filterItems="filterResults" />
	</section>
	<section class="card-list-section">
		<div v-if="list && list.length === 0">Oops! There is no data</div>
		<CountryCard v-else v-for="card in list" :key="card.name" :country="card" />
	</section>
</template>

<script>
import { BASE_URL } from '@/config/API';

export default defineNuxtComponent({
	async setup() {
		try {
			const { data: list } = await useFetch(`${BASE_URL}/all`, {
				key: 'country-list',
				lazy: true
			});
			return {
				list
			};
		} catch (err) {
			throw createError({ statusCode: 500, statusMessage: 'Server is not responding.' });
		}
	},
	methods: {
		filterResults(payload) {
			console.log(payload);
			this.list = payload || [];
		}
	}
});
</script>

<style lang="scss" scoped>
.filter-section {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 48px 0;
}

.card-list-section {
	width: 100%;
	display: grid;
	justify-content: space-between;
	gap: 2rem;
	grid-template-columns: repeat(4, 1fr);
}

@media only screen and (max-width: $--mobile-width) {
	.card-list-section {
		grid-template-columns: 100% !important;
	}

	.filter-section {
		flex-direction: column;
		gap: 24px;
		align-items: flex-start;
	}
}
</style>

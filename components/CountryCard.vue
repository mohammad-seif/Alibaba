<template>
	<div class="card-wrapper">
		<div class="image-container">
			<NuxtLink :to="`/country/${country.name}`">
				<img :src="country.flag" :alt="country.name" loading="lazy" />
			</NuxtLink>
		</div>
		<div class="card-data-container">
			<h1>{{ country.name }}</h1>
			<p>Population: {{ country.population.toLocaleString() }}</p>
			<p>Region: {{ country.region }}</p>
			<p>Capital: {{ country.capital }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		country: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.card-wrapper {
	display: grid;
	grid-template-rows: 60% 40%;
	background-color: var($--theme-bg);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	overflow: hidden;
	& > .image-container {
		& > a > img {
			height: 100%;
			aspect-ratio: 4/3;
			width: 100%;
			object-fit: cover;
		}
	}

	& > .card-data-container {
		padding: 16px 12px 12px;

		& > h1 {
			font-size: 18px;
			font-weight: 500;
			margin-bottom: 16px;
		}

		& > p {
			font-size: 14px;
			font-weight: 400;
			margin-bottom: 12px;
		}
	}
}
</style>

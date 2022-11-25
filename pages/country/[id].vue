<template>
	<section class="back-btn-section">
		<CommonBackButton />
	</section>
	<section class="country-details-section">
		<div class="country-image">
			<img :src="country.flag" :alt="country.name" loading="lazy" />
		</div>
		<div class="country-info">
			<h2>{{ country.name }}</h2>
			<div class="country-info-details">
				<ul>
					<li><b>Native Name:</b> {{ country.nativeName }}</li>
					<li><b>Population:</b> {{ country.population.toLocaleString() }}</li>
					<li><b>Region:</b> {{ country.region }}</li>
					<li><b>Sub Region: </b>{{ country.subregion }}</li>
					<li><b>Capital:</b> {{ country.capital }}</li>
				</ul>
				<ul>
					<li><b>Top Level Domain:</b> {{ country.topLevelDomain.join(', ') }}</li>
					<li><b>Currencies:</b> {{ country.currencies.map((c) => c.name).join(', ') }}</li>
					<li><b>Languages:</b> {{ country.languages.map((l) => l.name).join(', ') }}</li>
				</ul>
			</div>
			<div v-if="country.borders" class="border-countries">
				<span class="label">Border Countries: </span>
				<CommonButton @click="navigate(border)" v-for="border in country.borders" :key="border">{{
					border
				}}</CommonButton>
			</div>
		</div>
	</section>
</template>

<script>
import { BASE_URL } from '@/config/API';

export default defineNuxtComponent({
	async setup() {
		const route = useRoute();
		const { data } = await useFetch(`${BASE_URL}/name/${route.params.id}`, {
			key: route.params.id
		});
		return {
			data
		};
	},
	computed: {
		country() {
			return this.data[0];
		}
	},
	methods: {
		async navigate(id) {
			const { data } = await useFetch(`${BASE_URL}/alpha/${id}`);
			this.$router.push(data._value.name);
		}
	}
});
</script>

<style lang="scss" scoped>
.back-btn-section {
	margin: 48px 0;
}
.country-details-section {
	width: 100%;
	display: grid;
	gap: 48px;
	justify-content: space-between;
	grid-template-columns: 40% 50%;

	& > .country-image > img {
		aspect-ratio: 16/9;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	& > .country-info {
		& > h2 {
			font-size: 26px;
		}
		& > .border-countries {
			display: flex;
			align-items: center;
			gap: 16px;
			flex-flow: row wrap;
		}
		& > .country-info-details {
			display: flex;
			gap: 28px;
			align-items: flex-start;

			& > ul > li {
				margin: 24px 0;
				font-size: 14px;
			}
		}
	}
}

@media only screen and (max-width: $--mobile-width) {
	.country-details-section {
		grid-template-columns: none;
		grid-template-rows: auto;

		& > .country-info {
			& > .border-countries {
				& > span {
					width: 100%;
					display: block;
				}
			}
			& > .country-info-details {
				gap: 12px;
			}
		}
	}
}
</style>

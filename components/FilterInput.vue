<template>
	<div @click="toggle" class="filter-input">
		<span>Filter by Region</span>
		<Icon name="mdi:chevron-down" />
		<ul :class="['drop-down-menu', show && 'visible']">
			<li
				v-for="item in items"
				:key="item"
				@click="setSelected(item)"
				:class="[item === selected && 'selected']"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
import { BASE_URL } from '~~/config/API';

export default defineNuxtComponent({
	data: (vm) => ({
		show: false,
		items: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
		selected: vm.$route.query.region || null
	}),
	emits: ['filterItems'],
	mounted() {
		document.body.addEventListener(
			'click',
			(e) => {
				this.show = false;
			},
			false
		);
	},
	methods: {
		setSelected(item) {
			this.selected = item;
			this.fetchData();
		},
		async fetchData() {
			const { data } = await useFetch(`${BASE_URL}/region/${this.selected}`, {
				key: this.selected
			});
			this.$emit('filterItems', data.value);
		},
		toggle(event) {
			event.stopPropagation();
			this.show = !this.show;
		}
	}
});
</script>

<style lang="scss" scoped>
.filter-input {
	cursor: pointer;
	background-color: var($--theme-bg);
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
	padding: 12px 20px;
	border-radius: 4px;
	position: relative;
	font-size: 13px;
	user-select: none;

	& > .visible {
		visibility: visible;
	}
	& > .drop-down-menu {
		width: 100%;
		border-radius: inherit;
		position: absolute;
		top: 110%;
		left: 0;
		background-color: inherit;
		visibility: hidden;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 8px;
		padding: inherit;
		box-shadow: inherit;
		&.visible {
			visibility: visible;
		}

		& > li {
			width: 100%;
			font-size: 13px;
			font-weight: 400;
			height: 25px;
			&.selected {
				color: var($--theme-gray);
				font-weight: 900;
				font-style: italic;
			}
		}
	}
}
</style>

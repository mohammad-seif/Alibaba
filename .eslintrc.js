module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/base', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
	rules: {
		'vue/html-indent': 0,
		'vue/multi-word-component-names': 0
	}
};

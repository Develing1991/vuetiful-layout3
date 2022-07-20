<script>
	export default {
		computed: {
			isGalaxyFold() {
				return this.$vuetify.breakpoint.width < 310;
			},
		},
	};
</script>

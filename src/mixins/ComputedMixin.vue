<script>
	export default {
		computed: {
			isGalaxyFold() {
				return this.$vuetify.breakpoint.width < 320;
			},
		},
	};
</script>

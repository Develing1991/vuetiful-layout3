<script>
	//example
	//{{ 3000 | priceFilter }} '3,000'
	//{{ '3,000' | priceFilter }} '3000'
	export default {
		filters: {
			commaFilter: value =>
				value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			uncommaFilter: value => value.toString().replace(/[^\d]+/g, ''),
		},
	};
</script>

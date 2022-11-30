<template>
	<div class="page-feed-center">
		<transition name="fade-in" mode="out-in">
			<router-view />
		</transition>
	</div>
</template>
<script>
	export default {
		name: "VueLayout",
		data() {
			return {};
		},
	};
</script>

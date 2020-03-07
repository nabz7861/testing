<template>
	<div id="app">
		<User/>
		<Search/>
	</div>
</template>

<script>
import Search from './search.vue'
import User from './user.vue'

export default {
    name: "app",
	components: {
		Search,
		User
	}
}
</script>
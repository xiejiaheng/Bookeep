<template>
  <div id="app">
    <transition mode="out-in">
			<router-view/>
		</transition>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {

}
		/*第一中方式--router中选中的路由默认会添加 .router-link-active 这个类*/
		.router-link-active,
		.v-enter,
		.v-leave-to{
			opacity: 0;
			transform: translateX(150px);
			}

		.v-enter-active,
		.v-leave-active{
			transition: all 0.3s ease;
			}
</style>

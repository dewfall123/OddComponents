<script lang="ts" setup>
const props = withDefaults(defineProps<{
  width?: number;
  height?: number;
  borderWidth?: number;
  borderRadius?: number;
}>(), {
  width: 100,
  height: 100,
  borderWidth: 3,
  borderRadius: 0,
})
</script>

<template>
  <div class=" inline-block bg-red gradient-border" >
    
  </div>
</template>

<style>
@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}


.gradient-border {
  --border-angle: 0 trun;
  --border-size: v-bind(borderWidth + 'px');
  border-radius: v-bind(borderRadius + 'px');
  
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
  
  background-image: 
    conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ), conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;

  animation: bg-spin 3s linear infinite;
}

@keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
</style>
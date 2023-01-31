<template>
  <button :style="{ borderColor: color }"><slot></slot></button>
</template>
<script>
export default {
  name: "HButton",
  props: {
    color: { type: String, default: "blue" },
  },
};
</script>

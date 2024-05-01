<template>
  <p :class="isYellow ? `yellow` : `blue`">{{ count }}</p>
  <p v-if="count % 2 === 0">Count is an even number</p>
  <p v-else>Count is an odd number</p>
  <p>{{ currentColor }}</p>
  <p v-if="isYellow">
    The current color is yellow. Click toggle to change color
  </p>
  <p v-else>The current color is blue. Click toggle to change color</p>
  <div style="display: block">
    <button style="display: block" @click="addCount" :disabled="count >= 20">
      Count
    </button>
  </div>

  <p>{{ countLimit }}</p>
  <button @click="toggleColor">Toggle</button>

  <h1>People Component</h1>
  <People :class="isYellow ? 'yellow' : 'blue'" :message="propItem" @add-more-count="updateCount" />
</template>

<script>
import People from './components/People.vue'

export default {
  data() {
    return {
      count: 0,
      isYellow: true,
      propItem: 'This text is from parent'
    };
  },
  methods: {
    addCount() {
      this.count++;
    },
    updateCount(){
      this.count += 1
    },
    toggleColor() {
      this.isYellow = !this.isYellow;
    },
  },
  computed: {
    currentColor() {
      if (this.isYellow) {
        return "Color Yellow";
      } else return "Color Blue";
    },
    countLimit() {
      if (this.count >= 20) {
        return "Count reached limit";
      }
    },
  },
  components: {
    People, // Register the People component
  },
};
</script>

<style>
.yellow {
  color: yellow;
}

.blue {
  color: blue;
}
</style>

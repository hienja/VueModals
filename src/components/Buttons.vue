<template>
  <v-container>
    <v-layout
      text-center
      row
      wrap
    >
      <v-btn @click="onConfirm">
        Confirm
      </v-btn>
      <v-btn @click="onAlert">
        Alert
      </v-btn>
      <v-btn @click="onMessage">
        Message
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    onConfirm () {
      this.$modal.show('confirm')
    },
    onAlert () {
      this.$modal.show('alert')
    },
    onMessage () {
      this.$modal.show('message', {
        message: 'I need a massage.'
      })
    }
  }
}
</script>

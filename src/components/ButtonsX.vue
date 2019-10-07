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
      this.$store.dispatch('setModal', {
        type: 'Confirm'
      })
    },
    onAlert () {
      this.$store.dispatch('setModal', {
        type: 'Alert'
      })
    },
    onMessage () {
      this.$store.dispatch('setModal', {
        type: 'Message',
        props: {
          message: 'I need a massage.'
        }
      })
    }
  }
}
</script>

<template>
    <v-dialog :value="true" height="auto" @click:outside="onAccept">
        <v-card>
            <v-card-title>
                Show message props
            </v-card-title>
            <v-card-text>
                {{ message }}
            </v-card-text>
            <v-card-actions>
                <v-btn @click="onAccept">
                    Okay
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: [ 'message' ],
  methods: {
    onAccept () {
      this.$store.dispatch('removeModal', 'Message')
    }
  }
}
</script>

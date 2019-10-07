<template>
    <v-dialog :value="true" height="auto" @click:outside="onAccept">
        <v-card>
            <v-card-title>
                Alert!
            </v-card-title>
            <v-card-text>
                You're not doing enough squats!
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
  methods: {
    onAccept () {
      this.$store.dispatch('removeModal', 'Alert')
    }
  }
}
</script>

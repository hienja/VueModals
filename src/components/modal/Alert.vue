<template>
    <modal name="alert" height="auto">
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
    </modal>
</template>

<script>
export default {
  methods: {
    onAccept () {
      this.$modal.hide('alert')
    }
  }
}
</script>

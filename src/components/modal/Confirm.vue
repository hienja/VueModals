<template>
    <modal name="confirm" height="auto">
        <v-card>
            <v-card-text>
                Do you wish to confirm?
            </v-card-text>
            <v-card-actions>
                <v-btn @click="onReject">
                    No
                </v-btn>
                <v-btn @click="onAccept">
                    Yes
                </v-btn>
            </v-card-actions>
        </v-card>
    </modal>
</template>

<script>
export default {
  methods: {
    onReject () {
      this.$modal.hide('confirm')
    },
    onAccept () {
      this.$modal.show('alert')
    }
  }
}
</script>

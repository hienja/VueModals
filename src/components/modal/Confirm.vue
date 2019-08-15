<template>
    <v-dialog name="confirm">
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
    </v-dialog>
</template>

<script>
export default {
  methods: {
    onReject () {
      this.$modal.hide('confirm')
    },
    onAccept () {
      this.$modal.hide('confirm')
    }
  }
}
</script>

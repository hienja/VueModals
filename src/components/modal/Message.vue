<template>
    <modal name="message" height="auto" @before-open="beforeOpen">
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
    </modal>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    beforeOpen ({ params }) {
      this.message = params.message
    },
    onAccept () {
      this.$modal.hide('message')
    }
  }
}
</script>

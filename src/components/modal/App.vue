<template>
    <v-container>
        <v-dialog/>
        <Confirm/>
        <Alert/>
        <Message/>
    </v-container>
</template>

<script>
import Confirm from './Confirm'
import Alert from './Alert'
import Message from './Message'

export default {
  components: {
    Confirm,
    Alert,
    Message
  }
}
</script>

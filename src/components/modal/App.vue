<template>
    <v-container>
        <Confirm/>
        <Alert/>
    </v-container>
</template>

<script>
import Confirm from './Confirm'
import Alert from './Alert'

export default {
  components: {
    Confirm,
    Alert
  }
}
</script>

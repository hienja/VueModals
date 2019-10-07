<template>
  <span>
    <component v-for="(modal, index) in modals" :is="modal.type" v-bind="modal.props" :key="index"/>
  </span>
</template>

<script>
import { mapState } from 'vuex'

import Alert from './Alert'
import Confirm from './Confirm'
import Message from './Message'

export default {
  components: {
    Alert,
    Confirm,
    Message
  },
  computed: {
    ...mapState({
      modals: ({ modal }) => modal.modals
    })
  }
}
</script>

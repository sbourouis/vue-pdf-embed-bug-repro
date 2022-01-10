<template>
  <div>
    <VuePdfEmbed :source="pdf" />
  </div>
</template>

<script lang="ts">
import VuePdfEmbed from 'vue-pdf-embed';
import { Vue, Options } from 'vue-class-component';

@Options({
  props: {
    pdf: {
      type: String,
      required: true
    }
  },
  components: {
    VuePdfEmbed
  }
})
export default class PdfViewer extends Vue {
  pdf!: string;
}
</script>

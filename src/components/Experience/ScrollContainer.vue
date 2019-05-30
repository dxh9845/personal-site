<template>
    <div>
        <div class='scroll-container' ref='scroller'>
            <slot v-for='item in items' :item="item"></slot>
        </div>
        <div class='d-flex justify-content-between align-content-center mt-3'>
            <fa-icon icon='chevron-right' size='2x' flip='horizontal' @click='prev'></fa-icon>
            <fa-icon icon='chevron-right' size='2x' @click='next'></fa-icon>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ScrollContainer extends Vue {
    @Prop() private items! : object[];

    $refs! : {
        scroller: HTMLDivElement
    }

    prev() : void {
      this.$refs.scroller.scrollBy(-300, 0);
    }

    next() : void {
      this.$refs.scroller.scrollBy(-300, 0);
    }
}
</script>


<style lang='scss'>
.scroll-container {
    width: 100%;
    white-space: nowrap;

    overflow-x: auto;
    overflow-y: hidden;

    // Hide the scrollbar
    // scrollbar-width: none;
    // -ms-overflow-style: none;

    // &::-webkit-scrollbar {
    //     width: 0!important;
    // }


    scroll-snap-type: x mandatory;

    & > * {
        margin: 0px 25px;
        scroll-snap-align: center;
    }
}

</style>

<template>
    <div class='timeline-item d-inline-flex flex-column justify-content-center align-items-center' role='listitem'>
        <div class='my-auto'>
            <h1 :class="['title', 'novecento', titlefont]">
                <fa-icon class='icon' v-if='!isHeader' :icon='icon' aria-hidden='true' fixed-width></fa-icon>
                {{ title }}
            </h1>
        </div>
        <div v-if='!isHeader' class='more mb-0'>
            <a class='h4 franklin-demi' :to="link">More
                <small>
                    <fa-icon icon='chevron-right' aria-hidden="true"></fa-icon>
                </small>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TimelineType } from '@/utils/enums';


@Component
export default class ExperienceBlock extends Vue {
    @Prop() private title! : string;

    @Prop({ required: false }) private subheading!: string;

    @Prop() private type! : number;

    @Prop({ required: false }) private link! : string;

    // Set enum for the type
    TimelineType = TimelineType;

    get titlefont() {
      return { bold: this.type === this.TimelineType.Header };
    }

    get isHeader() {
      return this.type === this.TimelineType.Header;
    }

    get icon() {
        switch (this.type) {
            case(this.TimelineType.Education):
                return 'graduation-cap';
            case(this.TimelineType.Work):
                return 'building';
            default:
                return ''
        }
    }
}
</script>

<style lang="scss">
.timeline-item {
    height: 250px;
    width: 300px;
    background-color: color('white');

    .title {
        display: inline-block;
        color: black;
    }

    .title.bold {
        font-size: 3rem;
        font-weight: 800;
        // Get the color from the Bootstrap color mapping
        color: color('blue');
    }

    .more {
        width: 100%;
        padding: 5px;
        color: color('white');
        text-align: center;
        background-color: color('blue');

        a {
            text-transform: uppercase;
        }
    }
}
</style>

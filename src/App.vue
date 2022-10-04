<template>
    <div id="app" class="app">
        <main class="wrapper">
            <CreateColumn v-if="columnCollection.length !== 0" />
            <ColumnTemplate />
        </main>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CreateColumn from '@/components/CreateColumn/index.vue'
import ColumnTemplate from '@/components/ColumnTemplate/index.vue'

export default {
    name: 'App',

    components: {
        CreateColumn,
        ColumnTemplate,
    },

    data() {
        return {}
    },

    methods: {},

    computed: {
        ...mapGetters(['columnCollection']),
    },
}
</script>

<style lang="scss">
// plugins
@import 'ant-design-vue/dist/antd.css';
// plugins_end

@import '@/assets/app/styles/resets';

html,
body {
    overflow: hidden;
}

html {
    background: #efeff4;
}

html,
body,
.app,
.wrapper {
    height: 100%;
}

.wrapper {
    display: flex;
    flex-flow: column;
}

.generating-area {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .text-p {
        font-size: 24px;
        line-height: 32px;
        text-align: center;
    }
}
</style>

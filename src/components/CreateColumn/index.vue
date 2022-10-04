<template>
    <div class="generating">
        <a-button type="primary" @click="isVisibleModal = true">
            Добавить колонку
        </a-button>

        <a-modal
            title="Добавить колонку"
            :closable="false"
            v-model="isVisibleModal"
        >
            <div class="field-grp">
                <label v-text="'Название колонки'" />

                <a-input
                    v-model="nameColumn"
                    placeholder="Укажите название колонки"
                />
            </div>

            <template slot="footer">
                <a-button key="back" @click="handleCancel"> Отменить </a-button>

                <a-button
                    key="submit"
                    type="primary"
                    :loading="confirmLoading"
                    @click="handleOk"
                >
                    Создать колонку
                </a-button>
            </template>
        </a-modal>
    </div>
</template>

<script>
// import { mapGetters } from 'Vuex'

export default {
    name: 'CreateColumn',

    data() {
        return {
            nameColumn: '',
            isVisibleModal: false,
            confirmLoading: false,
        }
    },

    methods: {
        handleOk() {
            this.confirmLoading = true

            setTimeout(() => {
                this.$store.dispatch('generatingColumns', {
                    id:
                        Date.now().toString(36) +
                        Math.random().toString(36).substr(2),
                    caption: this.nameColumn,
                    cardCollection: [],
                })

                this.isVisibleModal = false
                this.confirmLoading = false

                this.nameColumn = ''
            }, 200)
        },

        handleCancel() {
            this.isVisibleModal = false
            this.nameColumn = ''
        },
    },

    computed: {},
}
</script>

<style lang="scss" scoped>
.generating {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
    padding: 24px;
}
</style>

<template>
    <div class="collection-wrapp">
        <template v-if="columnCollection && columnCollection.length !== 0">
            <ul class="collection">
                <template v-for="(column, index) in columnCollection">
                    <li :key="`${column.id}`" class="collection__item">
                        <div class="collection__head">
                            <p class="text-p" v-text="column.caption" />
                            <a-button type="secodary" @click="addCard(index)">
                                Добавить карточку
                            </a-button>
                        </div>

                        <div class="collection__body">
                            <draggable
                                group="all-cards"
                                tag="ul"
                                :list="columnCollection[index].cardCollection"
                                class="card-collection"
                            >
                                <template
                                    v-for="card in columnCollection[index]
                                        .cardCollection"
                                >
                                    <CardTemplate :key="card.id" :data="card" />
                                </template>
                            </draggable>
                        </div>
                    </li>
                </template>
            </ul>

            <a-modal
                title="Добавить карточку"
                :closable="false"
                v-model="isVisibleModal"
            >
                <div class="field-grp">
                    <label v-text="'Название карточки'" />

                    <a-input
                        v-model="cardParams.nameCard"
                        placeholder="Укажите название карточки"
                    />
                </div>

                <div class="field-grp">
                    <label v-text="'Описание к карточки'" />

                    <a-textarea
                        v-model="cardParams.descrCard"
                        :autoSize="true"
                        placeholder="Задайте описание к карточки"
                    >
                    </a-textarea>
                </div>

                <template slot="footer">
                    <a-button key="back" @click="handleCancel">
                        Отменить
                    </a-button>

                    <a-button
                        key="submit"
                        type="primary"
                        :loading="confirmLoading"
                        @click="handleOk"
                    >
                        Создать карточку
                    </a-button>
                </template>
            </a-modal>
        </template>

        <div class="generating-area" v-else>
            <p class="text-p">
                Для того, чтобы продолжить работу с карточками, <br />
                необходимо создать хотя бы одну тематическую колонку
            </p>

            <CreateColumn />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Draggable from 'vuedraggable'

import CreateColumn from '@/components/CreateColumn/index.vue'
import CardTemplate from '@/components/CardTemplate/index.vue'

export default {
    name: 'ColumnTemplate',
    components: {
        CreateColumn,
        CardTemplate,
        Draggable,
    },

    data() {
        return {
            isVisibleModal: false,
            confirmLoading: false,
            currentIndex: undefined,
            cardParams: {
                nameCard: '',
                descrCard: '',
            },
        }
    },

    methods: {
        addCard(index) {
            this.isVisibleModal = true
            this.currentIndex = index
        },

        handleOk() {
            this.confirmLoading = true

            setTimeout(() => {
                this.$store.dispatch('generatingCard', {
                    id:
                        Date.now().toString(36) +
                        Math.random().toString(36).substr(2),
                    currentIndex: this.currentIndex,
                    caption: this.cardParams.nameCard,
                    description: this.cardParams.descrCard,
                })

                this.isVisibleModal = false
                this.confirmLoading = false

                this.cardParams.nameCard = ''
                this.cardParams.descrCard = ''
            }, 120)
        },

        handleCancel() {
            this.isVisibleModal = false
            this.cardParams.nameCard = ''
            this.cardParams.descrCard = ''
        },
    },

    computed: {
        ...mapGetters(['columnCollection']),
    },
}
</script>

<style lang="scss" scoped>
textarea {
    resize: none;
    min-height: 70px !important;
}

.collection-wrapp {
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    flex-flow: wrap;
}

.collection {
    flex: 100%;
    padding: 16px;
    display: flex;
    flex-flow: row;
    overflow: auto;

    // -ms-overflow-style: none;
    // scrollbar-width: none;

    // &::-webkit-scrollbar {
    //     display: none;
    // }

    &__item {
        flex: 0 0 320px;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        border: 1px solid #000;
        padding: 16px 0;

        &:not(:last-of-type) {
            margin-right: 16px;
        }
    }

    &__head {
        display: flex;
        flex-flow: column;
        width: 100%;
        border-bottom: 1px solid #000;
        padding: 0 16px 16px;

        .text-p {
            margin-right: auto;
            font-size: 20px;
            line-height: 24px;
            font-weight: bold;
            margin-bottom: 12px;
        }
    }

    &__body {
        display: flex;
        flex-flow: column;
        flex-grow: 1;
        padding: 16px;

        .card-collection {
            height: 100%;
        }
    }
}
</style>

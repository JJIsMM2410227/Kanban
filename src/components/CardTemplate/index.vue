<template>
    <li class="card">
        <div class="card__body" v-if="data.caption || data.description">
            <p
                v-if="data.caption"
                class="card__caption"
                v-text="data.caption"
            />
            <p
                v-if="data.description"
                class="card__description"
                v-text="data.description"
            />
        </div>

        <ul class="user-list">
            <li class="user-list__item">
                <a href="javascript:void(0);" class="user-list__link"> MI </a>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'ColumnTemplate',
    props: {
        data: {
            type: Object,
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-flow: column;
    border: 1px solid #000;
    border-radius: 4px;
    width: 100%;
    padding: 8px;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-bottom: 8px;
    }

    &__body {
        display: flex;
        flex-flow: column;
    }

    &__caption {
        font-weight: bold;

        & + .card__description {
            margin-top: 4px;
        }
    }

    &__description {
    }
}

.user-list {
    display: flex;
    flex-flow: wrap;
    justify-content: flex-end;

    &__item {
        display: inline-flex;

        &:not(:last-of-type) {
            margin-right: 4px;
        }
    }

    &__link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border: 1px solid #000;
        border-radius: 100%;
    }
}
</style>

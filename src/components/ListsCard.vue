<script>
export default {
    props: {
        list: Object
    }
}
</script>

<template lang="">
    <div class="col-4" :class="list.has_bg_image ? 'menu' : ''">
        <div class="container">
            <h1>{{ list.title }}</h1>
            <div class="row" v-for="(item, index) in list.menu" :key="index">
                <div class="col-10">
                    <h2>{{ item.name }}</h2>
                </div>
                <div class="col-2">
                    <span><b>{{ item.price }}</b></span>
                </div>
                <div class="col-12">
                    <p>{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-4 {
    padding: 0;
    margin-top: 3rem;
    height: 100%;
    background-color: #E8E8E8;

    &.menu {
        margin-top: 0;
        background-image: linear-gradient(black, transparent), url('/misc22x.jpg');
        background-size: 120%;
        background-position: 0;
        color: white;
    }

    .container {
        margin-top: 5rem;
        margin-bottom: 2rem;
        padding: 0 2rem;
        width: 80%;

        h1 {
            font-size: 3rem;
            padding-bottom: 2rem;
        }

        .row {
            padding: 0;

            p {
                font-size: 18px;
                padding-bottom: 1rem;
            }
        }
    }
}
</style>
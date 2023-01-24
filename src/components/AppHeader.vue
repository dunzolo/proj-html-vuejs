<script>
export default {
    props: {
        navbar_list: Object
    },
}
</script>

<template lang="">
    <header>
        <div class="container-header">
            <div class="logo">
                <img src="/logo-restaurant-2x.png" alt="logo">
            </div>
            <div>
                <ul class="unstyled-list">
                    <li v-for="(item, index) in navbar_list" :key="index" @click="item.isVisible = true">
                        <a>
                            {{ item.label }}
                            <ul v-if="item.isVisible">
                                <li v-for="(item, index) in item.tag_list" :key="index">
                                    {{ item }}
                                </li>
                            </ul>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: transparent;
    position: absolute;
    width: 100%;

    .container-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        padding: 2rem;

        .logo img {
            width: 250px;
        }

        .unstyled-list {
            list-style-type: none;
            display: flex;
            margin-bottom: 0px; //bootstrap aggiunge di default margin-bottom

            li a {
                text-decoration: none;
                color: white;
                padding: 10px;
            }

            .dropdown {
                background-color: red;
                height: 100px;
                width: 100px;
                border: 1px solid black
            }
        }
    }

}
</style>
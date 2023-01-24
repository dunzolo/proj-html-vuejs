<script>
export default {
    props: {
        navbar_list: Object
    },
    data() {
        return {
            index_visible: ''
        }
    },
    methods: {
        showDropdown(index) {
            this.index_visible = index
        }
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
                    <li v-for="(item, index) in navbar_list" :key="index" @mouseover="showDropdown(index)">
                        <a>
                            {{ item.label }}
                            <ul class="dropdown-list" v-if="item.dropdown_list && index_visible === index">
                                <li v-for="(item, index) in item.dropdown_list" :key="index">
                                    {{ item }}
                                </li>
                            </ul>
                            <ul class="dropdown-box" v-if="item.dropdown_box && index_visible === index">
                                <li class="box" v-for="(item, index) in item.dropdown_box" :key="index">
                                    <div class="box-card" :style="{ 'background-image': `url(${item.background_image})`}">
                                        <h1>{{ item.title }}</h1>
                                        <i :class= item.icon></i>
                                        <p>{{ item.paragraph }}</p>
                                        <i class="fa-thin fa-sushi"></i>
                                    </div>
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
        padding: 2rem 2rem 0 2rem;
        position: relative;


        .logo img {
            width: 250px;
        }

        .unstyled-list {
            list-style-type: none;
            display: flex;
            margin-bottom: 0px; //bootstrap aggiunge di default margin-bottom
            cursor: pointer;

            li a {
                text-decoration: none;
                color: white;
                padding: 30px;
            }

            .dropdown-list {
                background-color: #3B3B3B;
                position: absolute;
                padding: 0px;
                list-style-type: none;
                top: 100%;
                border-radius: 5px;


                li {
                    padding: 1rem;

                    &:hover {
                        background-color: #BDA16B;
                        border-radius: 5px;


                    }
                }
            }

            .dropdown-box {
                position: absolute;
                padding: 0;
                top: calc(100% + 20px);
                left: 0;
                list-style-type: none;
                display: flex;
                width: 100%;

                .box {
                    width: calc(100% / 4);

                    .box-card {
                        background-image: linear-gradient(black, transparent);
                        background-size: 100%;
                        height: 400px;
                        text-align: center;
                        padding: 3rem;
                    }

                }
            }
        }
    }

}
</style>
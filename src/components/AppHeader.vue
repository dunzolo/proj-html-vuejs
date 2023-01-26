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
            <div class="header-right">
                <ul class="unstyled-list">
                    <li class="items" v-for="(item, index) in navbar_list" :key="index" @mouseover="showDropdown(index)" @mouseleave="this.index_visible = ''">
                        <a :href="item.url" :class="item.active  ? 'active' : ''">
                            <span>{{ (item.label).toUpperCase() }}</span>
                            <span class="label-new" v-if="item.label_new">{{ (item.label_new).toUpperCase() }}</span>
                            <span v-if="item.dropdown_list || item.dropdown_box"><i class="fa-solid fa-angle-down"></i></span>
                            <transition name="show">
                                <ul class="dropdown-list" v-if="item.dropdown_list && index_visible === index">
                                    <li v-for="(i, index) in item.dropdown_list" :key="index">
                                        <span>{{ i }}</span>
                                    </li>
                                </ul>
                            </transition>
                            <transition name="show">
                                <ul class="dropdown-box" v-if="item.dropdown_box && index_visible === index">
                                    <li class="box" v-for="(item, index) in item.dropdown_box" :key="index" :style="{ 'background-image': `url(${item.background_image})`}">
                                        <div class="box-card" >
                                            <div class="content">
                                                <h2>{{ item.title }}</h2>
                                                <i :class= item.icon></i>
                                                <p>{{ item.paragraph }}</p>
                                                <i class="fa-thin fa-sushi"></i>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </transition>
                        </a>
                    </li>
                    <i class="fa-solid fa-cart-shopping text-light"></i>
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;

header {
    background-color: transparent;
    position: absolute;
    width: 100%;

    .container-header {
        @include flex-align-center-between;
        width: 90%;
        margin: 0 auto;
        padding: 2rem 2rem 0 2rem;
        position: relative;

        .logo img {
            width: 250px;
        }

        .unstyled-list {
            list-style-type: none;
            @include flex-center;
            margin-bottom: 0px; //bootstrap aggiunge di default margin-bottom
            cursor: pointer;
            font-family: 'Work Sans', sans-serif;

            .items {
                @include flex-align-justify-center;
                height: 3rem;

                & a {
                    text-decoration: none;
                    color: grey;
                    padding: 0px 20px;
                    font-size: 15px;
                    @include flex-center;
                    height: 100%;

                    &.active {
                        color: white;
                    }

                    &:hover {
                        color: white;
                    }

                    .label-new {
                        font-size: 12px;
                        margin-left: 0.5rem;
                        padding: 0 0.25rem;
                        border: 1px solid grey;
                    }

                    .fa-angle-down {
                        padding-left: 0.5rem;
                    }

                    .show-enter-active,
                    .show-leave-active {
                        transition: opacity 1s;
                    }

                    .show-enter-from,
                    .show-leave-to {
                        opacity: 0;
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
                            background-color: transparent;
                            transition: background-color .5s;
                            border-radius: 5px;

                            &:hover {
                                background-color: #BDA16B;
                                border-radius: 5px;
                            }
                        }
                    }

                    .dropdown-box {
                        position: absolute;
                        width: 100%;
                        padding: 0;
                        top: 100%;
                        left: 0;
                        list-style-type: none;
                        display: flex;

                        .box {
                            width: calc(100% / 4);
                            @include bg-cover;

                            .box-card {
                                background-image: linear-gradient(black, transparent);
                                height: 400px;
                                text-align: center;
                                padding: 5rem 4rem;

                                p {
                                    font-family: 'Lora', serif;
                                }

                                i {
                                    padding: 2rem;
                                }

                                .content {
                                    // inserisco nella classe in cui deve avvenire la traniszione la rispettiva proprietà
                                    transition: scale 0.7s;
                                }

                                & .content:hover {
                                    scale: 1.1;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
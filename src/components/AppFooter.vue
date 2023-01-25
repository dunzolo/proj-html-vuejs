<script>
export default {
    props: {
        footer_list: Object
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
    <footer>
        <div class="container text-center">
            <div class="row">
                <div class="col-12">
                    <img src="/logo-restaurant-2x-300x58.png" alt="">
                    <p>Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Quam eu proin sit massa condimentum.</p>
                    <ul class="unstyled-list">
                        <li class="icon-social" v-for="(item, index) in footer_list" :key="index"  @mouseover="showDropdown(index)">
                            <div class="caption" v-if="index_visible === index">
                                <span>{{ item.label }}</span>
                            </div>
                            <a href=""><i :class="item.icon"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 500px;
    background-image: url('/footer2x.jpg');
    background-size: 130%;
    background-position: top;

    .container {
        padding: 5rem 0;
        width: 40%;

        p {
            font-size: 20px;
            padding-top: 2rem;
            color: white;
        }

        .unstyled-list {
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;

            .icon-social {
                padding: 2rem .5rem;
                position: relative;

                a i {
                    color: black;
                    background-color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    padding: 1rem;
                    margin-top: .5rem;

                    &:hover {
                        background-color: black;
                        color: white;
                    }
                }

                span {

                    // layout
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;

                    // looks
                    background-color: #3B3B3B;
                    padding: .25rem;
                    color: white;
                    font-size: 12px;
                    border-radius: .5rem;
                    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);


                    &::after {
                        // layout
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: calc(0% - .25rem);
                        left: calc(50% - .25rem); // offset should move with padding of parent
                        border: .25rem solid transparent;
                        border-top: none;
                        transform: rotate(180deg);

                        // looks
                        border-bottom-color: #3B3B3B;
                        filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
                    }
                }
            }
        }
    }
}
</style>
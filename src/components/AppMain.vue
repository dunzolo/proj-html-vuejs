<script>
import FoodCard from './FoodCard.vue';
import CriticsCard from './CriticsCard.vue';
import NewsCard from './NewsCard.vue';
import ListsCard from './ListsCard.vue';

import { store } from '../store.js';

export default {
    components: {
        FoodCard,
        CriticsCard,
        NewsCard,
        ListsCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template lang="">
    <main>
        <!-- first section -->
        <div id="first-section" class="container">
            <div class="row">
                <div class="col-6">
                    <p>
                        <b>HAC TELLUS, FELIS RISUS AT</b> mattis mattis. Eget euismod semper eget tortor, donec amet, blandit. Tristique facilisi faucibus elementum feugiat in nam in feugiat. Ipsum odio etiam duis facilisis amet vulputate.
                    </p>
                    <h1>
                        food is our common ground, a universal experience.
                    </h1>
                    <p>
                        Tristique tempus condimentum diam donec. Condimentum ullamcorper sit elementum hendrerit mi nulla in consequat, ut. Metus, nullam scelerisque netus viverra dui.
                    </p>
                    <div class="signature">
                        <img src="/signature.jpg" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <img class="image-full" src="/info22x.jpg" alt="">
                </div>
            </div>
            <!-- row cards -->
            <div class="row text-center">
                <FoodCard v-for="(item, index) in store.array_foods" :key="index" :food="item"/>
            </div>
        </div>
        <!-- second section container full-->
        <div id="second-section" class="container-full">
            <div class="image-full"></div>
            <div class="caption-right">
                <div class="container">
                    <div class="col-2">
                        <div class="line"></div>
                    </div>
                    <div class="col-10">
                        <span class="font-work-sans">FINE DINING EXPERIENCE</span>
                        <h1>THE BEST TABLE IN TOWN</h1>
                        <p>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla.</p>
                        <button class="btn btn-outline-light">EXPLORE THE MENU</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- third section -->
        <div id="third-section" class="container">
            <h1 class="title">What critics are saying about us</h1>
            <hr class="center">
            <div class="row"> 
                <div class="col-6">
                    <img src="/blog72x-1200x1375.jpg" alt="">
                </div>
                <div class="col-6">
                    <div class="container bg-black">
                        <span class="font-work-sans">MEGGY STEWART</span>
                        <h2>NEW YORK TIMES</h2>
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <hr>
                        <p>
                            Non arcu mauris tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed at.
                        </p>
                        <p>
                            Mmalesuada ullamcorper amet. Pretium pretium dignissim nisi. 
                        </p>
                        <button class="btn btn-outline-light">READ FULL ARTICLE</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <CriticsCard v-for="(item, index) in store.array_critics" :key="index" :critics="item"/>
            </div>
        </div>
        <!-- fourth section -->
        <div id="fourt-section">
            <div class="container-full">
                <div class="row">
                    <div class="col-12 text-center">
                        <span class="caption font-work-sans">KUNG PAO CHICKEN - $32</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- fifth section -->
        <div id="fifth-section">
            <div class="container text-center">
                <h1 class="title">Latest news & promotions</h1>
                <hr>
                <div class="row">
                    <NewsCard v-for="(item, index) in store.array_news" :key="index" :news="item" />
                </div>
            </div>
        </div>
        <!-- sixth section -->
        <div id="sixth-section" class="container-full">
            <div class="image-full"></div>
            <div class="caption-right">
                <div class="container">
                    <div class="col-2">
                        <div class="line"></div>
                    </div>
                    <div class="col-10">
                        <span class="font-work-sans">ENJOY YOUR MEAL AT HOME</span>
                        <h1>TAKEOUT NOW AVAILABLE</h1>
                        <p>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla non arcu moris tortor.</p>
                        <button class="btn btn-outline-light">VIEW TAKEOUT MENU</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- seventh section -->
        <div id="seventh-section" class="container-large"> 
            <div class="row">
                <ListsCard v-for="(item, index) in store.array_lists" :key="index" :list="item" />
            </div>
        </div>
        <!-- eigth section -->
        <div id="eigth-section">
            <div class="container-full">
                <div class="row background-image">
                    <div class="box">
                        <div class="row">
                            <div class="col-10">
                                <h1>BRAISED ABALONE</h1>
                            </div>
                            <div class="col-2">
                                <span><b>$52</b></span>
                            </div>
                            <div class="col-12">
                                <hr>
                                <p>Pretium accumsan porttitor viverra leo gravida mollis imperdiet. Fringilla nibh pharetra sociis leo amet.</p>
                                <button class="btn btn-outline-light">BUY AVADA TODAY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;

#first-section.container {
    .row {
        padding-top: 7rem;
    }

    .col-6 {
        padding: 0 2rem;

        p {
            padding: 2rem 1rem 2rem 0;
            font-size: 20px;
            line-height: 1.7;
        }

        h1 {
            font-size: 70px;
        }

        .signature img {
            width: 200px;
        }

        .image-full {
            height: 700px;
            width: 100%;
            object-fit: cover;
        }
    }

    .col-4 {
        padding: 0 3rem 7rem;
    }
}

#second-section.container-full {
    height: 800px;
    display: flex;

    .image-full {
        width: 60%;
        height: 100%;
        background-image: url('/slider32x.jpg');
        background-size: 120%;
    }

    .caption-right {
        width: 40%;
        height: 100%;
        background-color: black;
        color: white;
        @include flex-column-center;

        .container {
            display: flex;
            padding: 4rem;

            .line {
                width: 50%;
                margin-top: 10px;
            }

            h1 {
                font-size: 80px;
                padding: 3rem 0;
            }

            p {
                font-size: 20px;
                padding-bottom: 3rem;
            }
        }
    }
}

#third-section {

    .title {
        font-family: 'Lora', serif;
        font-style: italic;
        padding-top: 5rem;
        text-align: center;
    }

    hr {
        width: 10%;
    }

    hr.center {
        margin: 1rem auto;
    }

    .row {
        padding-top: 3rem;

        .col-6 {
            padding: 0;
            color: white;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            .container {
                padding: 7rem;

                h2 {
                    font-size: 70px;
                    padding: 3rem 0;
                }

                p {
                    font-size: 20px;
                    padding: 1rem 0;
                }

                i {
                    padding-right: 15px;
                    padding-bottom: 3rem;
                }
            }
        }
    }
}

#fourt-section {
    .container-full {
        height: 500px;
        margin-top: 7rem;

        .row {
            margin: 0;
            width: 100%;
            height: 100%;
            background-image: url('/page52x.jpg');
            background-size: 150%;
            background-position: center;

            .col-12 {
                display: flex;
                align-items: end;
                justify-content: center;

                .caption {
                    padding-bottom: 20px;
                    font-weight: 700;
                    color: white;
                }
            }
        }
    }
}

#fifth-section {
    .container {

        .title {
            font-family: 'Lora', serif;
            padding-top: 5rem;
            text-align: center;
            color: black;
        }

        hr {
            width: 10%;
            margin: 1rem auto;
        }

        .row {
            padding: 2rem 0 5rem 0;

            .col-4 {
                height: 700px;
                padding: 0 1rem;
                position: relative;
            }
        }
    }
}

#sixth-section {
    .image-full {
        width: 60%;
        height: 100%;
        background-image: url('/slider72x-scaled.jpg');
        background-size: 120%;
    }
}

#seventh-section.container-large {
    width: 90%;
    margin: 0 auto;

    .row {
        height: 100%;
        padding: 5rem 0;
    }
}

#eigth-section {
    .container-full {
        height: 800px;

        .row.background-image {
            margin: 0;
            width: 100%;
            height: 100%;
            background-image: url('/hero42x.jpg');
            background-size: 100%;
            position: relative;

            .box {
                position: absolute;
                top: 10%;
                left: 10%;
                background-color: black;
                color: white;
                width: 470px;
                padding: 5rem;

                h1 {
                    font-size: 4rem;
                    padding-bottom: 2rem;
                }

                hr {
                    width: 20%;
                    padding-bottom: 1rem;
                }

                p {
                    font-size: 18px;
                    padding-bottom: 1.5rem;
                }
            }
        }
    }
}
</style>
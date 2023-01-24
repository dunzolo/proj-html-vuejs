<script>
export default {

}
</script>

<template lang="">
    <main>
        <!-- first section -->
        <div class="container">
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
                <div class="col-4">
                    <img class="icon" src="/sushi-1.png" alt="">
                    <h2>The best table in town</h2>
                    <hr>
                    <p>Sed aenean egestas ut aliquam turpis mauris, molestie. Vitae tellus tempor sem id tempus neque, tellus turpis turpis. Morbi tortor id gravida aliquet.</p>
                    <button>EXPLORE THE MENU</button>
                </div>
                <div class="col-4">
                    <img class="icon" src="/sushi-2.png" alt="">
                    <h2>Perfect For Groups</h2>
                    <hr>
                    <p>Quam eu proin sit massa condimentum. Volutpat non pulvinar aliquet nunc. Orci elementum in aliquet a gravida vivamus aliquam turpis vitae.</p>
                    <button>BUY AVADA TODAY</button>
                </div>
                <div class="col-4">
                    <img class="icon" src="/sushi-3.png" alt="">
                    <h2>Fresh produce everyday</h2>
                    <hr>
                    <p>Hendrerit amet, volutpat leo non, commodo maecenas scelerisque tincidunt. Morbi vulputate morbi purus quisque sit sagittis orci elementum gravida.</p>
                    <button>LEARN MORE ABOUT US</button>
                </div>  
            </div>
        </div>
        <!-- second section -->
        <div class="container-full">
            <div class="image-full"></div>
            <div class="caption-right">
                <div class="container">
                    <div class="col-3">
                        <span>________</span>
                    </div>
                    <div class="col-9">
                        <p>FINE DINING EXPERIENCE</p>
                        <h1>THE BEST TABLE IN TOWN</h1>
                        <p>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla.</p>
                        <button>EXPLORE THE MENU</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- third section -->
        <div id="third-section" class="container">
            <div class="row"> 
            <h1 class="text-center">What critics are saying about us</h1>
            <hr>
                <div class="col-6">
                    <img src="/blog72x-1200x1375.jpg" alt="">
                </div>
                <div class="col-6">
                    <div class="container bg-black">
                        <p>MEGGY STEWART</p>
                        <h1>NEW YORK TIMES</h1>
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
                        <button>READ FULL ARTICLE</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 pe-4">
                    <div class="image-left">
                        <div class="container">
                            <p>MARY MAXEY</p>
                            <h1>THE GUARDIAN</h1>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <hr>
                            <p>
                                Non arcu mauris tortor ultrices mollis tellus euismod fermentum. Habitant amet tincidunt id sapien accumsan sed.
                            </p>
                            <button>READ FULL ARTICLE</button>
                        </div>
                    </div>
                     <!-- <img src="/info52x.jpg" alt=""> -->
                </div>
                <div class="col-6 ps-4">
                    <div class="image-right">
                        <div class="container">
                            <p>PATRICK MONROE</p>
                            <h1>GLOBE AND MAIL</h1>
                            <div>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <hr>
                            <p>
                                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.
                            </p>
                            <button>READ FULL ARTICLE</button>
                        </div>
                    </div>
                    <!-- <img src="/info12x.jpg" alt=""> -->
                </div>
            </div>
        </div>
        <!-- fourth section -->
        <div id="fourt-section">
            <div class="container-full">
                <div class="row">
                    <p class="caption">KUNG PAO CHICKEN - $32</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container {
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

        p {
            font-size: 18px;
            padding-bottom: 1rem;
        }

        .icon {
            padding: 2rem;
        }
    }
}

.container-full {
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
        display: flex;
        flex-direction: column;
        justify-content: center;

        .container {
            display: flex;
            padding: 4rem;

            h1 {
                font-size: 80px;
            }
        }
    }

}

#third-section {

    .row {
        padding-top: 5rem;

        .image-left {
            background-image: linear-gradient(black, transparent), url('/info52x.jpg');
            background-size: 100%;
            height: 700px;
            width: 100%;
            object-fit: cover;
            color: white
        }

        .image-right {
            background-image: linear-gradient(black, transparent), url('/info12x.jpg');
            background-size: 100%;
            height: 700px;
            width: 100%;
            object-fit: cover;
            color: white
        }

        .col-6.image-right {
            padding-left: 2rem;
        }

        .col-6.image-left {
            padding-right: 2rem;
        }

        .col-6 {
            padding: 0;
            color: white;

            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            .container {
                padding: 5rem;
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
            position: relative;

            .caption {
                font-weight: 700;
                position: absolute;
                bottom: 10px;
                left: 45%;
                color: white;
            }
        }
    }
}
</style>
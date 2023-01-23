<script>
export default {

}
</script>

<template lang="">
    <main>
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
        </div>
        <div class="container">
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
</style>
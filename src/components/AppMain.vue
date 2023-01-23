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
    </main>
</template>

<style lang="scss" scoped>
.container {
    height: 700px;

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
}
</style>
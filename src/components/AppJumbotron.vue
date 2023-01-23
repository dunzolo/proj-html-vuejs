<script>
export default {

}
</script>

<template lang="">
    <div class="jumbotron">
        <div class="container-full">
            <div class="jumbotron-left">
            </div>
            <div class="jumbotron-right">
                <img src="/slider52x.jpg" alt="image-jumbotron">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    height: 1000px;

    .container-full {
        width: 100%;
        height: 100%;
        display: flex;

        .jumbotron-right {
            width: 50%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .jumbotron-left {
            background-color: black;
            width: 50%;


        }
    }

}
</style>
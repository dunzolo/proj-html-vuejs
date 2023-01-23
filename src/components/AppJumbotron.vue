<script>
export default {

}
</script>

<template lang="">
    <div class="jumbotron">
        <div class="container-full">
            <div class="jumbotron-left">
                <div class="container">
                    <div class="col-3">
                        <span>________</span>
                    </div>
                    <div class="col-9">
                        <p>THE BEST TABLE IN TOWN</p>
                        <h1>FINE DINING EXPERIENCE</h1>
                        <p>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</p>
                        <button>EXPLORE THE MENU</button>
                        
                    </div>
                </div>
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
            color: white;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .container {
                display: flex;
                padding: 10rem;

                h1 {
                    font-size: 80px;
                }
            }

        }
    }

}
</style>
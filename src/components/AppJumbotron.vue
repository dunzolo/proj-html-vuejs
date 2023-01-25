<script>
export default {

}
</script>

<template lang="">
    <div class="jumbotron">
        <div class="container-full">
            <div class="jumbotron-left">
                <div class="container">
                    <div class="col-2">
                        <div class="line"></div>
                    </div>
                    <div class="col-10">
                        <span class="font-work-sans">THE BEST TABLE IN TOWN</span>
                        <h1>FINE DINING EXPERIENCE</h1>
                        <p>Pellentesque vitae viverra risus, sagittis. Venenatis ridiculus scelerisque nisi in urna nulla. Sit tempor a et nisl, ac felis.</p>
                        <button class="btn btn-outline-light">BUY AVADA TODAY</button>
                    </div>
                </div>
            </div>
            <div class="jumbotron-right"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    height: 950px;

    .container-full {
        width: 100%;
        height: 100%;
        display: flex;

        .jumbotron-right {
            width: 50%;
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent), url('/slider52x.jpg');
            background-size: cover;
            background-position: center;
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
                padding: 0 10rem;

                .line {
                    width: 50%;
                    height: 1px;
                    background-color: white;
                    margin-top: 10px;
                }

                h1 {
                    font-size: 90px;
                    padding: 3rem 0;
                }

                p {
                    font-size: 20px;
                    padding-bottom: 3rem;
                }

                .btn {
                    font-family: 'Work Sans', sans-serif;
                    padding: 10px 20px;
                }


                .font-work-sans {
                    font-family: 'Work Sans', sans-serif;
                }
            }

        }
    }

}
</style>
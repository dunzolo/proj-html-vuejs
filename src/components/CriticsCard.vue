<script>
export default {
    props: {
        critics: Object
    }
}
</script>

<template lang="">
    <!-- essendo presenti solo due immagini, assegno padding diversi -->
    <div class="col-6" :class="critics.is_first ? 'pe-4' : 'ps-4'">
        <div class="image" :style="{ 'background-image': `url(${critics.url_image})`}">
            <div class="container" >
                <span class="font-work-sans">{{ critics.label_top }}</span>
                <h2>{{ critics.title }}</h2>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <hr>
                <p>{{ critics.paragraph }}</p>
                <button class="btn btn-outline-light">{{(critics.label_button).toUpperCase()}}</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;

.image {
    @include bg-cover;
    height: 700px;
    color: white;

    .container {
        padding: 7rem;
        background: linear-gradient(black, rgba(0, 0, 0, 0.5));

        h2 {
            font-size: 70px;
            padding: 1rem 0;
        }

        i {
            padding-right: 15px;
            padding-bottom: 2rem;
        }

        hr {
            width: 20%;
        }

        p {
            font-size: 20px;
            padding: 2rem 0;
        }

        .font-work-sans {
            font-family: 'Work Sans', sans-serif;
        }
    }
}
</style>
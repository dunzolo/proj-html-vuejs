<script>
export default {
    props: {
        food: Object
    }
}
</script>

<template lang="">
    <div class="col-4">
        <img class="icon" :src="food.url_image" alt="">
        <h2>{{ food.title }}</h2>
        <hr>
        <p>{{ food.paragraph }}</p>
        <button class="btn btn-outline-dark">{{ (food.label_button).toUpperCase() }}</button>
    </div>
</template>

<style lang="scss" scoped>
hr {
    width: 20%;
    margin: 1rem auto;
}

p {
    font-size: 18px;
    padding-bottom: 1rem;
}

.icon {
    padding: 2rem;
}
</style>
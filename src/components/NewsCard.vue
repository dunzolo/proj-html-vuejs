<script>
export default {
    props: {
        news: Object
    }
}
</script>

<template lang="">
    <div class="col-4">
        <div class="image" :style="{ 'background-image': `url(${news.url_image})`}">
            <div class="bottom-section">
                <h2>{{ news.title }}</h2>
                <p>{{ news.caption }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;

h2 {
    padding-top: 2rem;
}

p {
    font-size: 12px;
}

.image {
    @include bg-cover;
    background-position: center;
    height: 100%;
}

.bottom-section {
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: white;
}
</style>
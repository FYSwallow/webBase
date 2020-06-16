<template>
    <section class="main-container">
        {{data}}
    </section>
</template>

<script>
export default {
    props: {
        data: {
            type: Number
        }
    }

}
</script>

<style lang='scss' scoped>
.main-container {
    margin: 20px;
    background-color: #fff;
}
</style>
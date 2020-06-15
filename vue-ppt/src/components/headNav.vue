<template>
    <div class="header-warpper">
        <slot name="left"></slot>
        <slot name="middle"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "../style/color.scss";
@import "../style/mixin.scss";

.header-warpper {
    @include fj;
    @include hm(40px);
    padding: 0 2px 0 5px;
    color: #fff;
    background-color: $dark;
}
</style>
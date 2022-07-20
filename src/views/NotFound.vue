<template>
    <div class="wscn-http404-container">
        <div class="bullshit flex-box-column flex-h-center flex-v-center">
            <div class="bullshit__oops">Page Not Found!</div>
            <a href="/" class="bullshit__return-home">Back to home</a>
        </div>
        <div class="pic-404">
            <img class="pic-404__parent" src="@/assets/images/404.png" alt="404" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Page404',
    computed: {
        message() {
            return 'The webmaster said that you can not enter this page...';
        }
    }
};
</script>

<style lang="scss" scoped>
.wscn-http404-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.pic-404 {
    position: relative;
    float: left;
    width: 456px;
    overflow: hidden;

    &__parent {
        width: 100%;
    }
}
.bullshit {
    &__oops {
        font-size: 32px;
        font-weight: bold;
        line-height: 40px;
        color: #1482f0;
        opacity: 0;
        margin-bottom: 20px;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    &__return-home {
        display: block;
        float: left;
        width: 110px;
        height: 36px;
        background: #1482f0;
        border-radius: 100px;
        text-align: center;
        color: #ffffff;
        opacity: 0;
        font-size: 14px;
        line-height: 36px;
        cursor: pointer;
        animation-name: slideUp;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        animation-fill-mode: forwards;
    }
    @keyframes slideUp {
        0% {
            transform: translateY(60px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
}
</style>

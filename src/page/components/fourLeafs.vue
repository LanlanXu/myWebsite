<template>
    <div class="fourLeaf" :style="{ fontSize: size + 'px', top: top + 'px', left: left + 'px' }">
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
        <div class="leaf"></div>
    </div>
</template>
<script>
export default {
    props: ['size', 'top', 'left']
}
</script>


<style lang="scss">
.fourLeaf{ 
    position: relative;
    animation: circle 3s infinite;
    width: 0;
    height: 0;

    &::before{ content: ' ';
        position: absolute;
        left: -0.2em;
        top: -0.2em;
        border: 0.2em solid #f9b62d;
        border-radius: 100%;
    }

    .leaf{ 
        transform-origin: 0 0.1em;
        position: absolute;
        top: -0.1em;
        left: 0;
        width: 1.4em;
        height: 0.2em;
        background: #f9b62d;
        border-bottom-right-radius: 0.1em;

        &::before{ 
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0.6em;
            width: 0.8em;
            height: 0.5em;
            background: #e39e20;
            border-radius: 0.1em;
        }

        &::after{ 
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 0.6em;
            width: 0.8em;
            height: 0.3em;
            background: #f9b62d;
            border-top-left-radius: 0 0.25em;
            border-top-right-radius: 1.2em 0.2em;
            border-bottom-right-radius: 0.25em;
        }

        &:nth-child(2){ 
            transform: rotate(90deg);
        }

        &:nth-child(3){ 
            transform: rotate(180deg);
        }

        &:nth-child(4){ 
            transform: rotate(-90deg);
        }
    }
}
@keyframes circle
{
    from {transform: rotate(0deg);}
    to {transform: rotate(180deg);}
}
</style>

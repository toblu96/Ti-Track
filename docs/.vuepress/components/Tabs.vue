<template>

    <ul class="flex border-b">
        <li class="-mb-px mr-1" v-for="(button, index) in buttons">
            <button class="bg-transparent inline-block py-2 px-2 md:px-4 hover:text-cyan-800 font-semibold focus:outline-none text-xs md:text-base" 
                :class="{'border-l': (index == activeIndex),
                            'border-t': (index == activeIndex),
                            'border-r': (index == activeIndex),
                            'rounded-t': (index == activeIndex),
                            'text-cyan-900': (index == activeIndex),
                            'bg-gray-100': (index == activeIndex),
                            'text-gray-500': (index != activeIndex)}"
                @click="buttonClicked(index)">
                {{ button }}
            </button>
        </li>
    </ul>

</template>

<script>
export default {
    props: {
        buttons: {
            type: Array,
            default: function() {
                return [
                    'First',
                    'Second',
                    'Last'
                ]
            }
        }
    },
    data: function () {
        return {
            activeIndex: 0
        }
    },
    created: function() {
        this.activeIndex = 0;
        this.$emit('activeIndex', this.activeIndex)
    },
    methods: {
        buttonClicked: function(index) {
            this.activeIndex = index;
            // console.log(this.activeIndex)
            this.$emit('activeIndex', this.activeIndex)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @tailwind base;

    @tailwind components;

    @tailwind utilities;
</style>
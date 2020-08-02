<template>

    <div class="bg-white overflow-hidden shadow">
        <div class="flex bg-gray-100 border-b border-gray-200 px-4 py-2">
            <p class="font-bold mr-1">{{AntennaOrientation}}</p>
            <p>Antenna Array Orientation</p>
        </div>
        <div class="block lg:flex px-4 py-2">
            <div class="flex lg:block lg:flex-none lg:w-1/3">
                <p class="flex-1 lg:flex-none">Angle ∅: {{AngleValues[0]}}°</p>
                <p class="flex-1 lg:flex-none pb-2 lg:pb-0">Min: {{AngleValues[1]}}°, Max: {{AngleValues[2]}}°</p>
            </div>
            <div class="lg:flex-auto">
                <img :src="Images[0]" alt="Angle Measurement">
            </div>
        </div>
        <div class="block lg:flex border-t border-gray-200 px-4 py-2">
            <div class="flex lg:block lg:flex-none lg:w-1/3">
                <p class="flex-1 lg:flex-none">RSSI ∅: {{RSSIValues[0]}} dBm</p>
                <p class="flex-1 lg:flex-none pb-2 lg:pb-0">Min: {{RSSIValues[1]}} dBm, Max: {{RSSIValues[2]}} dBm</p>
            </div>
            <div class="lg:flex-auto">
                <img :src="Images[1]" alt="RSSI Measurement">
            </div>
        </div>
    </div>


</template>

<script>
export default {
    props: {
        AntennaOrientation: String,
        AngleValues: {
            type: Array,
            default: function() {
                return [
                    -54,
                    0,
                    0
                ]
            }
        },
        RSSIValues: {
            type: Array,
            default: function() {
                return [
                    -54,
                    0,
                    0
                ]
            }
        },
        Images: {
            type: Array,
            default: function() {
                return [
                    './bla',
                    './bla'
                ]
            }
        }
    },
}
</script>

<style lang="stylus" scoped>
    @tailwind base;

    @tailwind components;

    @tailwind utilities;
</style>
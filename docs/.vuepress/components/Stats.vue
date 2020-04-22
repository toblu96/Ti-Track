<template>
    <div class="inline-flex w-full h-auto py-2 md:py-4">
        <div v-for="data in dataset" class="flex-1 px-2 md:px-4 py-2 m-2 first:ml-0 last:mr-0 bg-gray-200 border rounded">
            
            <div class="font-bold text-gray-500 text-xs md:text-sm mb-1">{{data.title}}</div>
            
            <div class="flex-row font-bold text-sm md:text-xl"
                :class="{'text-red-700': ((data.value == 127) || (data.value == -127))}"
            >{{data.value}} {{data.unit}}</div>

        </div>
    </div>

</template>

<script>
export default {
    props: {
        dataset: {
            type: Array,
            default: function() {
                return [
                    {title: 'min Angle', value: 20, unit: '°'},
                    {title: 'max Angle', value: 25, unit: '°'},
                    {title: 'min RSSI', value: -76, unit: 'dBm'},
                    {title: 'max RSSI', value: -54, unit: 'dBm'},
                ]
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @tailwind base;

    @tailwind components;

    @tailwind utilities;
</style>
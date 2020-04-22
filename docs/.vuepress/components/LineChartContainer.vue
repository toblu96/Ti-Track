<template>
	<div class="py-4">

		<tabs @activeIndex="changeChart"
			:buttons="btnText"/>

		<div class="antiFlicker bg-gray-100 border-b border-l border-r rounded-b">
			<line-chart
				class="p-1"
				v-if="loaded"
				:chartdata="chartdata"
				:options="options"/>
		</div>

		<Stats :dataset="stats"/>

  	</div>
</template>

<script>
import LineChart from './LineChart.vue'
import Tabs from './Tabs.vue'
import Stats from './Stats.vue'
import * as Papa from 'papaparse';

export default {
  name: 'LineChartContainer',
  components: { LineChart, Tabs },
  props: {
    btnText: {
      	type: Array
	},
	PathList: {
		type: Array,
		default: function() {
			return [
				'/assets'
			]
		}
	}
  },
  data: () => ({
    chartdata: {
        labels: [],
        datasets: [
			{
				label: '',
				backgroundColor: '#f87979',
				data: []
			}
		]
	},
	chartColors: [
		'',
		'',
		'#006063',
		'#318683',
		'#C6C799',
		'#CBBD7D',
		'#C46E49',
	],
    options: {
      responsive: true,
	  maintainAspectRatio: false
	},
	stats: [
		{title: 'min Angle', value: 0, unit: '°'},
		{title: 'max Angle', value: 0, unit: '°'},
		{title: 'min RSSI', value: 0, unit: 'dBm'},
		{title: 'max RSSI', value: 0, unit: 'dBm'}
	],
	loaded: false,
	chartIndex: 0
  }),
  watch: {
	  chartIndex: function(val) {
		  
		  this.updateData(this)
	  }
  },
  async mounted () {
	await this.updateData(this)
  },
  methods: {
	  updateData: function() {
		  let local = this
		  	local.loaded = false
			Papa.parse(this.PathList[this.chartIndex], {
				download: true,
				complete: function(results) {
					// Werte rücksetzen
					local.chartdata.labels = []
					local.stats[0].value = null
					local.stats[1].value = null
					local.stats[2].value = null
					local.stats[3].value = null

					// Iteration durch CSV Header (Timestamp, Angle, etc.)
					for (var header = 0; header < results.data[0].length; header++) {
						let _labels = results.data[0] // erster Eintrag enthält alle Header
						
						// Definition der einzelnen Filtergruppen (Ohne Timestamp)
						local.chartdata.datasets[(header)] = {
							label: _labels[header],
							backgroundColor: local.chartColors[header],
							data: []
						} 

						// Nur Datenzeilen abfragen (ohne Header)
						for (var dataLine = 1; dataLine < results.data.length; dataLine++) {
							let _data = results.data[dataLine]
							
							// Nur eintragen wenn gültige Daten vorhanden
							if (_data.length > 1) {
								// Zeitachse auf Chart (Index 0)
								if (local.chartdata.labels.indexOf(_data[0]) === -1) {
									local.chartdata.labels.push(_data[0])
								}

								// Daten einfüllen
								local.chartdata.datasets[header].data.push(_data[header])

								if (header == 2) {
									// Winkel min
									if (local.stats[0].value == null) {local.stats[0].value = _data[header]}
									local.stats[0].value = Math.min(_data[header], local.stats[0].value)
									// Winkel max
									if (local.stats[1].value == null) {local.stats[1].value = _data[header]}
									local.stats[1].value = Math.max(_data[header], local.stats[1].value)
								}

								if (header == 5) {
									// RSSI min
									if (local.stats[2].value == null) {local.stats[2].value = _data[header]}
									local.stats[2].value = Math.min(_data[header], local.stats[2].value)
									// RSSI max
									if (local.stats[3].value == null) {local.stats[3].value = _data[header]}
									local.stats[3].value = Math.max(_data[header], local.stats[3].value)
								}
							}
							
							
						}

					}
					local.chartdata.datasets.splice(0,2)	// Removes Timestamp and Identifier from chartData
					local.loaded = true
				}
			});
			
	  },
	  changeChart: function(val) {
		  this.chartIndex = val
	  }
  }
	  
  
}
</script>

<style scoped>

	@tailwind base;

	@tailwind components;

	@tailwind utilities;

	.antiFlicker {
		min-height: 410px;
	}
</style>
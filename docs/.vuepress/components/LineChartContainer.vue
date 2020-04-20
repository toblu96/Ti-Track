<template>
	<div class="container">
	  	<button-group 
		  @activeIndex="changeChart"
		  :buttons="btnText"
		  />
    	<line-chart
			class="lineChart"
			v-if="loaded"
			:chartdata="chartdata"
			:options="options"/>

  	</div>
</template>

<script>
import LineChart from './LineChart.vue'
import ButtonGroup from './ButtonGroup.vue'
import * as Papa from 'papaparse';

export default {
  name: 'LineChartContainer',
  components: { LineChart, ButtonGroup },
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
					// Zeitachse rücksetzen
					local.chartdata.labels = []

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
	.container {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	.lineChart {
		background-color: #f5f5f5;
		border-radius: .2em;
		border-top-left-radius: 0px;
		padding: .2em
	}
</style>
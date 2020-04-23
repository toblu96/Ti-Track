# Distance
The measurements outside should give an approximate indication of how accurate measurement results can be made in open terrain. During these measurements all interfering signals such as mobile phones or laptop radio signals were switched off. There are also no large objects in the surrounding area which could influence the measured values by reflections. In order to be able to analyze the signal strength (RSSI) of the angle evaluation, measurements are made at the same angle <code>0°</code> from the antenna array but at different distances to the TX.

## Measurement Setup

The following measurements were made outside in the garden. The arrangement of RTLS passive and RTLS slave is shown below. Both modules are located 76 cm above the floor (table height). The RTLS Master is also on the table, but is not shown for simplicity.

![Measurement Setup Outside Distance](./assets/img/Measurement_Setup_Outside_Distance.png)

## Real Environment

|![Array Setup Outdoor](./assets/img/Array_Setup_Outdoor_Distance.jpg)|![TX Setup Outdoor](./assets/img/TX_Setup_Outdoor_Distance.jpg)|
|:------|:-----------|


## Measurement Results <Badge text="WIP" type="warning"/>
<LineChartContainer 
    :PathList="[
        '/assets/data/Measurements/Distance/2m.csv',
        '/assets/data/Measurements/Distance/4m.csv',
        '/assets/data/Measurements/Distance/6m.csv',
        '/assets/data/Measurements/Distance/8m.csv'
    ]"
    :btnText="[
        '2m',
        '4m',
        '6m',
        '8m',
    ]"
/>


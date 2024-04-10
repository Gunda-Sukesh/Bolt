import React from 'react'

const page = () => {
      const application = {
        key: 'PhsiKAMFWGngmj2V0LkrdivaMA9JAGxZ',
        name: 'EV Routing',
        version: '1.0'
      };
      
      const appearance = {
        marker: {
          color: {
            start: 'green',
            finish: 'red',
            leg: 'blue'
          }
        },
        line: {
          color: '#224488',
          width: 6,
          padding: 40,
          join: 'round',
          cap: 'round'
        }
      };
      
      const ids = {
        html: {
          map: 'map',
          start: 'start',
          finish: 'finish',
          summary: 'summary'
        },
        route: {
          source: 'routeSource',
          layer: 'routeLayer'
        }
      };
      
      const labels = {
        lengthInMeters: 'Travel Distance (km)',
        travelTimeInSeconds: 'Travel Time',
        trafficDelayInSeconds: 'Traffic Delay',
        batteryConsumptionInkWh: 'Battery Consumption (kWh)',
        remainingChargeAtArrivalInkWh: 'Remaining Charge (kWh)',
        totalChargingTimeInSeconds: 'Total Charging Time',
        targetChargeInkWh: 'Target Charge (kWh)',
        chargingTimeInSeconds: 'Charging Time',
        routeSummary: 'Route Summary',
        legSummary: 'Route Leg #%s'
      }
      
      const units = {
        metersPerKilometer: 1000,
        secondsPerMinute: 60,
        secondsPerHour: 3600
      };
      
      const markers = [];
      var finishLocation;
      var routeData;
      var startLocation;
    
  return (
    <div>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <link rel="stylesheet" type="text/css" href="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.36.1/maps/maps.css">
        <script src="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.36.1/maps/maps-web.min.js"></script>
        <script src="https://api.tomtom.com/maps-sdk-for-web/cdn/5.x/5.36.1/services/services-web.min.js"></script>
        <script src="chargingAvailability.js"></script>
        <script src='route.js'></script>
        </link>
        
    </div>
  )
}

export default page

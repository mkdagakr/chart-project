import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["United States", 900],
    ["Brazil", 400],
    ["France", 600],
    ["RU", 1200],
    ["India", 1700],
];

const Geochart = () => {
    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="35vh"
            data={data}
        />
    );
}

export default Geochart;
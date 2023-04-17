import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
];

export const options = {
    title: "Company Activities",
    pieHole: 0.4,
    is3D: false,
};

const Piechart = () => {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="38vh"
            data={data}
            options={options}
        />
    );
}

export default Piechart;
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

function Details({title}) {
  const {total, chartData} = useTransactions(title);
  console.log(chartData);
  return (
    <Card style={title === 'Income' ? { borderBottom: "10px solid rgba(0, 255, 0, 0.5)" }  : {borderBottom: '10px solid rgba(255, 0, 0, 0.5)'}}>
      <CardHeader title={title} />
      <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h5" style={{alignSelf: 'start'}}>${total}</Typography>

      <Doughnut data={chartData}></Doughnut>
      </CardContent>
    </Card>
  );
}

export default Details;

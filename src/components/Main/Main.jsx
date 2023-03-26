import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { ExpenseTrackerContext } from '../../context/expenseContext';
import Form from './Form/Form';
import ItemsList from './List/ItemsList';

function Main() {
    const {balance} = useContext(ExpenseTrackerContext);
  return (
    <Card style={{paddingBottom: '3%'}}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography variant='h5' align='center'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                {/* InfoCard */}
                Try saying: Add income for $100 in Category Salary for Monday...
            </Typography>
            <Divider/>
            {/* Form */}
            <Form/>
        </CardContent>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {/* List */}
                    <ItemsList/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main;
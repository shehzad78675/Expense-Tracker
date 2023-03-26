import React, { useContext } from 'react'
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@mui/material';
import { Delete, MoneyOff } from '@mui/icons-material';
import { ExpenseTrackerContext } from '../../../context/expenseContext';

function ItemsList() {
    const {transactions, deleteTransaction} = useContext(ExpenseTrackerContext);
    // console.log(globalState);
    
    // const transactions = [
    //     {id: 1, type: 'Income', category: 'Salary', amount: 400, date: '12/02/2023'},
    //     {id: 2, type: 'Expense', category: 'Tex', amount: 400, date: '12/02/2023'},
    //     {id: 3, type: 'Expense', category: 'Tex', amount: 400, date: '12/02/2023'}
    // ]
  return (
    <List dense={false} style={{maxHeight: '150px', overflow:"auto"}}>
        {transactions.map((transaction) => (
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar style={transaction.type === "Income" ? {color: '#fff', backgroundColor: 'green'} : {color: '#fff', backgroundColor: 'red'}}>
                            <MoneyOff/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount}  -  ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </List>
  )
}

export default ItemsList;
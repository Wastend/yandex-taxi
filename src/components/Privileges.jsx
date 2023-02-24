import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { AppButton } from '../common/StyledComponents'
import women from '../source/women.png'
import { CalendarMonth, AccountBalanceWallet, Build } from '@mui/icons-material';

const Privileges = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', m:'8rem 0 8rem 0' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '35vw',
                width: '45%',
                backgroundColor: '#222222',

            }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: '600', color: 'white', m:'0 12rem 2rem 0' }}>
                    Работа в удовольствие
                </Typography>
                <List sx={{ display: 'flex', flexDirection: 'column', m: '1rem 15% 0 15%' }}>
                    <ListItem>
                        <ListItemAvatar sx={{mb:'2.8rem'}}>
                            <CalendarMonth sx={{ color: 'yellow' }} />
                        </ListItemAvatar>
                        <ListItemText primary="Удобный график" primaryTypographyProps={{ fontSize: '1.3rem', color: 'white' }} secondary='Работа по несколько часов в неделю или каждый день - вы сами выбираете свой график' secondaryTypographyProps={{ fontSize: '1rem', color: 'white' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar sx={{mb:'2.8rem'}}>
                            <AccountBalanceWallet sx={{ color: 'yellow' }} />
                        </ListItemAvatar>
                        <ListItemText primary="Деньги - сразу" primaryTypographyProps={{ fontSize: '1.3rem', color: 'white' }} secondary='Выводите деньги с помощью удобного мобильного приложения' secondaryTypographyProps={{ fontSize: '1rem', color: 'white' }} />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar sx={{mb:'2.8rem'}}>
                            <Build sx={{ color: 'yellow' }} />
                        </ListItemAvatar>
                        <ListItemText primary="Партнерская программа" primaryTypographyProps={{ fontSize: '1.3rem', color: 'white' }} secondary='Скидка 20% на ремонт и сервисное обслуживание водителей парка' secondaryTypographyProps={{ fontSize: '1rem', color: 'white' }} />
                    </ListItem>
                </List>
            </Box>
            <Box
                component="img"
                sx={{
                    height: '35vw',
                    width: '55%',
                }}
                alt="men"
                src={women}
            />

        </Box>
    )
}

export default Privileges
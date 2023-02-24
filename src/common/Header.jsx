import { Box, Typography } from '@mui/material'
import logo from '../source/yandex_taxi_logo.svg'
import React from 'react'

const Header = () => {
    return (
        <Box sx={{display: 'flex',  flexDirection: 'row', position:'relative', verticalAlign:'midle', justifyContent: 'space-between', margin: '2rem 6.5rem 1rem 6.5rem'}}>
            <Box sx={{ width:'15rem',height:'2rem',display: 'flex', flexDirection: 'row', gap:'2rem', flex: 1}}>
                <img src={logo} alt='logo'/>
                <Typography sx={{color:'#8B8B8B'}}>Официальный партнер<br/>г.Омск</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'row', gap:'5rem', ml:'7rem'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', gap:'2rem'}}>
                    <Typography sx={{color:'#8B8B8B'}}>Выбрать авто</Typography>
                    <Typography sx={{color:'#8B8B8B'}}>Начало работы</Typography>
                    <Typography sx={{color:'#8B8B8B'}}>Преимущество работы</Typography>
                    <Typography sx={{color:'#8B8B8B'}}>Приложение</Typography>
                    <Typography sx={{color:'#8B8B8B'}}>Контакты</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <Typography sx={{flex:1, textAlign:'center', fontWeight: 'bold'}}>8 (3812) 49-46-45</Typography>
                    <Typography sx={{fontSize:'0.8rem', color:'#8B8B8B', textDecoration: 'underline'}}>заказать звонок</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Header
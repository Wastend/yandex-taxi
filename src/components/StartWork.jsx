import { Typography, Box } from '@mui/material'
import React from 'react'

const StartWork = () => {
    return (
        <Box id="startWork" sx={{ width: '100%' }}>
            <Typography sx={{ margin: '10rem 0 3rem 10vw', fontWeight: 'bold' }} variant="h4">Выберите автомобиль</Typography>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'0 10vw', gap:'1rem'}}>
                <Box>
                    <Box sx={{display:'flex', flexDirection:'row', mb:'2rem'}}>
                        <Typography sx={{backgroundColor:'#FFDF39', fontWeight: 'bold', fontSize:'1.2rem'}}>1.</Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize:'1.2rem', textDecoration: 'underline'}}>Оставьте заявку</Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize:'1.2rem'}}>&nbsp;на сайте</Typography>
                    </Box>
                    <Typography>мы свяжемся с вами для уточнения<br/> деталей</Typography>
                </Box>
                <Box>
                    <Box sx={{display:'flex', flexDirection:'row', mb:'2rem'}}>
                        <Typography sx={{backgroundColor:'#FFDF39', fontWeight: 'bold', fontSize:'1.2rem'}}>2.</Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize:'1.2rem', textDecoration: 'underline'}}>Скачайте</Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize:'1.2rem'}}>&nbsp;приложение</Typography>
                    </Box>
                    <Typography>для удобного вывода средств</Typography>
                </Box>
                <Box>
                    <Box sx={{display:'flex', flexDirection:'row', mb:'2rem'}}>
                        <Typography sx={{backgroundColor:'#FFDF39', fontWeight: 'bold', fontSize:'1.2rem'}}>3.</Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize:'1.2rem'}}>Выходите на линию</Typography>
                    </Box>
                    <Typography>чтобы получить первые заказы</Typography>
                </Box>
                <Box>
                    <Box sx={{display:'flex', flexDirection:'row', mb:'2rem'}}>
                        <Typography sx={{backgroundColor:'#FFDF39', fontWeight: 'bold', fontSize:'1.2rem'}}>4.</Typography>
                        <Typography sx={{fontWeight: 'bold', fontSize:'1.2rem'}}>Начните зарабатывать</Typography>
                    </Box>
                    <Typography>работайте тогда, когда вам удобно</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default StartWork
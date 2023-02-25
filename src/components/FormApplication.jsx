import { Box, Typography, TextField, Link, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { AppButton } from '../common/StyledComponents'
import fine from '../source/fine.png'

const FormApplication = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState(null)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <Snackbar open={message !== null} autoHideDuration={4000} onClose={() => setMessage(null)} anchorOrigin={{ vertical: 'top', horizontal: "center" }}>
        <Alert onClose={() => setMessage(null)} severity="success">{message}</Alert>
      </Snackbar>
      <Box id="request" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30vw', width: '47%', backgroundColor: '#F0F0F0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <Typography variant="h4" fontWeight="bold">Оставить заявку</Typography>
          <TextField
            label='Фио'
            size='medium'
            value={name}
            sx={{ width: '25vw' }}
            onChange={(e) => setName(e.target.value)} />
          <TextField
            type='number'
            label='Телефон'
            size='medium'
            value={phone}
            sx={{ width: '25vw' }}
            onChange={(e) => setPhone(e.target.value)} />
          <Box sx={{ display: 'flex', flexDirection: 'row', width: '25vw', justifyContent: 'space-between', gap: '3rem' }}>
            <AppButton sx={{ width: '65%' }} variant="contained" onClick={() => {
              setMessage("Заявка на имя " + name + " по телефону " + phone + " отправлена!")
              setName("")
              setPhone("")
            }}>
              Отправить
            </AppButton>
            <Typography sx={{ fontSize: '0.9rem' }}>Нажимая кнопку вы соглашаетесь с <Link target="_blank" href='https://support.wix.com/ru/article/создание-политики-конфиденциальности' sx={{ fontSize: '0.9rem', color: 'black' }}>политикой конфиденциальности</Link></Typography>
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          height: '30vw',
          width: '53%',
        }}
        alt="fine"
        src={fine}
      />

    </Box>
  )
}

export default FormApplication
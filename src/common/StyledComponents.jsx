import { Button, styled } from "@mui/material"

export const AppButton = styled(Button)({
    '&': {
        backgroundColor: '#FFDF39',
        color: 'black',
        fontWeight: '600',
    },
    '&:hover': {
        backgroundColor: '#FFF818',
    },
})
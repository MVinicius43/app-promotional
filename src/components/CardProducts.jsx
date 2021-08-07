import { Card, makeStyles, Typography, Box } from '@material-ui/core'
import { Kitchen } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
    card: {
        margin: 8,
        display: 'flex',
        flexDirection: 'row'
    },

    icon: {
        margin: 8
    },

    name: {
        fontSize: 11,
        marginTop: 6
    },

    qtd: {
        fontSize: 12
    },

    textPromotion: {
        color: '#2E8B57',
        fontSize: 12
    },

    box: {
        marginLeft: 150,
        marginBottom: 8
    },

    boxText: {
        display: 'flex',
        flexDirection: 'row',
    }

}))

const CardProducts = props => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <Kitchen className={classes.icon}/>
            <Box>
                <Typography className={classes.name}>{props.nome}</Typography>
                <Typography className={classes.qtd}>Quantidade: {props.qtd}</Typography>
            </Box>
            <Box className={classes.box}>
                <Typography className={classes.name}>Preço / Promoção</Typography>
                <Box className={classes.boxText}>
                    <Typography className={classes.qtd}>{props.preço} /</Typography>
                    <Typography className={classes.textPromotion}>{props.promoção}</Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default CardProducts
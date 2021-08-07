//Components
import { 
    Card,
    Typography,
    makeStyles,
    Box,
    Select,
    FormControl,
    MenuItem,
    InputLabel
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    card: {
        marginTop: 20,
        marginLeft: 100,
        width: 400,
        padding: 10
    },

    textProducts: {
        fontSize: 16,
        marginTop: 20,
        marginLeft: 20
    },

    FormControl: {
        margin: theme.spacing(0.5),
        minWidth: 150,
        marginTop: 10
    },

    name: {
        fontSize: 12,
        marginTop: 6,
        marginLeft: 10
    },

    qtd: {
        fontSize: 10,
        marginLeft: 10,
        marginBottom: 8
    },

    cardText: {
        margin: 8,
        display: 'flex',
        flexDirection: 'row'
    },
}))

const Services = () => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <Box display='flex' flexDirection='row' justifyContent='space-between' width='100%'>
                <Typography className={classes.textProducts}>
                    Serviços
                </Typography>
                <FormControl variant="outlined" className={classes.FormControl}>
                    <InputLabel>Mais Utilizados</InputLabel>
                    <Select>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Mais Utilizados</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Card className={classes.cardText}>
                <Box>
                    <Typography className={classes.name}>Permite cobrar taxa de entrega de pedidos</Typography>
                    <Typography className={classes.qtd}>Quantidade: 33 - R$ 20,00 em média</Typography>
                </Box>
            </Card>
        </Card>
    )
}

export default Services
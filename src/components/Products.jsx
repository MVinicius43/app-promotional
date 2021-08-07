//Components
import { Card,
        Typography,
        makeStyles,
        Box,
        Select,
        FormControl,
        InputLabel,
        MenuItem
    } from '@material-ui/core'
import CardProducts from './CardProducts'
import Services from './Services'

//api
import data from '../data.json'

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
    }
}))

const Products = () => {
    const classes = useStyles()

    return (
        <>
        <Card className={classes.card}>
            <Box display='flex' flexDirection='row' justifyContent='space-between' width='100%'>
                <Typography className={classes.textProducts}>
                    Produtos
                </Typography>
                <FormControl variant="outlined" className={classes.FormControl}>
                    <InputLabel>Mais Vendidos</InputLabel>
                    <Select>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Mais Vendidos</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            {
                data.map(item => {
                    return (
                        <CardProducts nome={item.nome} qtd={item.qtd} preço={item.preço} promoção={item.promoção}/>
                    )
                })
            }
        </Card>
        
        <Services />
        </>
    )
}

export default Products
import { Box, Card, makeStyles, Typography } from '@material-ui/core'
import { CallMissedOutgoing, People } from '@material-ui/icons' 
import RevenuesChart from './RevenuesChart'
import PromotionsChart from './PromotionsChart'
import Products from './Products'

const useStyles = makeStyles(() => ({
    boxFat: {
        backgroundColor: '#ff9800',
        borderRadius: 10,
        width: 220,
        height: 90,
        marginTop: 20,
        marginLeft: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    boxClients: {
        borderRadius: 10,
        width: 220,
        height: 90,
        marginTop: 20,
        marginLeft: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    icon: {
        color: 'white',
        width: 50,
        height: 50,
        marginLeft: 15
    },

    iconClient: {
        width: 50,
        height: 50,
        marginLeft: 15
    },

    textFat: {
        color: 'white',
        marginRight: 80,
        fontSize: 10
    },

    textPrice: {
        color: 'white',
        fontSize: 18,
    },

    textPart: {
        marginRight: 80,
        fontSize: 10
    },

    textClient: {
        fontSize: 18,
    }
}))

const DataPanel = () => {
    const classes = useStyles()

    return (
        <Box display='flex' flexDirection='row' justifyContent="center">
            <Box>
                <Box display='flex' flexDirection='row'>
                    <Card className={classes.boxFat}>
                        <CallMissedOutgoing className={classes.icon}/>
                        <Box>
                            <Typography className={classes.textFat}>Faturamento</Typography>
                            <Typography className={classes.textPrice}>R$300,00</Typography>
                        </Box>
                    </Card>

                    <Card className={classes.boxClients}>
                        <People className={classes.iconClient}/>
                        <Box>
                            <Typography className={classes.textPart}>Participantes</Typography>
                            <Typography className={classes.textClient}>100 clientes</Typography>
                        </Box>
                    </Card>
                </Box>

                <RevenuesChart />
                <PromotionsChart />
            </Box>
            <Box>
                <Products />
            </Box>
        </Box>
    )
}

export default DataPanel
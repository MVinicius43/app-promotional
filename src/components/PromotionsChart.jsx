import { Pie } from 'react-chartjs-2'
import { makeStyles, Card, Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    box: {
        borderRadius: 10,
        width: 480,
        height: 125,
        marginTop: 20,
        marginLeft: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}))

const PromotionsChart = () => {

    const classes = useStyles()

    const data = {
        labels: ['Segunda-feira (R$ 150,00)', 'Terça-feira (R$ 150,00)', 'Entrega grátis (R$ 300,00)'],
        datasets: [
          {
            data: [150, 150, 300],
            borderColor: '#ff9800',
          },
        ]
      };

    const options = {
        responsive: false,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Promoções mais utilizadas',
            },
        },
        
    }

    return (
        <Card className={classes.box}>
            <Box width='100%' margin='0px -50px'>
                <Pie width='480px' height='125px' data={data} options={options}/>
            </Box>
        </Card>
    )
}

export default PromotionsChart
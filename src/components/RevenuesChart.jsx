import { Line } from 'react-chartjs-2'
import { makeStyles, Card } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    box: {
        borderRadius: 10,
        width: 410,
        height: 150,
        marginTop: 20,
        marginLeft: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 35
    },
}))

const RevenuesChart = () => {

    const classes = useStyles()

    const data = {
        labels: ["Abr 3", "Abr 4", "Abr 5", "Abr 6", "Abr 7", "Abr 8", "Abr 9"],
        datasets: [
          {
            label: 'Faturamento Diário',
            data: [100, 200, 150, 200, 300, 200, 400, 500],
            borderColor: '#ff9800'
          },
        ]
      };

    return (
        <Card width='500px' margin='20px 40px' className={classes.box}>
            <Line data={data}/>
        </Card>
    )
}

export default RevenuesChart
import { Search } from '@material-ui/icons'
import { Box,
        IconButton, 
        Input, 
        Select, 
        FormControl, 
        MenuItem, 
        InputLabel,
        TextField,
        makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    FormControl: {
        margin: theme.spacing(0.5),
        minWidth: 150,
    }
}))
 
const FilterPanel = () => {
    const classes = useStyles();

    return (
        <Box marginTop='90px' display='flex' flexDirection='row'>
            <Box>
                <IconButton>
                    <Search/>
                </IconButton>
                <Input placeholder='Procurar um cliente...' />
            </Box>

            <Box marginLeft='600px' marginRight='80px'>
                <FormControl variant="outlined" className={classes.FormControl}>
                    <InputLabel>Tipo</InputLabel>
                    <Select>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Porcentagem</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            
            <Box marginTop='12px'>
                <TextField type='date' defaultValue="2021-06-21"/>
            </Box>
        </Box>
    )
}

export default FilterPanel
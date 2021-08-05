import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const ToolbarPanel = () => {

    return (
        <AppBar color='white'>
            <Toolbar>
                <IconButton edge="start" color="inherit">
                    <Menu />
                </IconButton>
                <Typography>Desempenho de Promoções</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default ToolbarPanel
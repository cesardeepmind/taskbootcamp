import { useHistory } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {Home, Task, Settings} from '@mui/icons-material';



const getIcon = (icon) => {
    switch(icon) {
        case 'HOME':
            return (<Home />)

        case 'TASKS':
            return (<Task />)
        case 'SETTINGS':
            return (<Settings />)

        default:
            return (<Home />)
    }
}

const MenuListItem = ({list}) => {

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) => 
                (
                    <ListItem button key={index} onClick={() => navigate(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            )}
        </List>
    )
}

export default MenuListItem;

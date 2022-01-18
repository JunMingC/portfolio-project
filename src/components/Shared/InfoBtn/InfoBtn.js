import { IconButton, Toolbar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleInfoBar } from '../../../redux/features/infoBarSlice';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

const InfoBtn = ({ invert }) => {
    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(toggleInfoBar());
    };

    return (
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="white"
                onClick={toggleHandler}
            >
                <ReadMoreIcon sx={invert ? { transform: 'scale(-1)' } : null} />
            </IconButton>
        </Toolbar>
    )
}

export default InfoBtn

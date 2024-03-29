import { Button } from 'react-bootstrap';

const ButtonComponent = (props) => {
    
    const style = {
        backgroundColor: props.color ? props.color : '#009AD7',
        marginLeft: props.ml,
        marginBottom: props.mb,
        marginTop: props.mt ? props.mt : '18px',
        marginRight: props.mr,
        width: props.w ? props.w : '100%'
    }
    return (
        <Button 
            style={style}
            type={props.type}
            size={props.size}
            onClick={() => props.onClick()}
            className={props.className}
        >
            {props.children}
        </Button>
    )
}

export default ButtonComponent;
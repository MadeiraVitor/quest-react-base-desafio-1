const Text = (props) => {
    return <h1 style={{color: props.color, textTransform: props.uppercase}}>{props.text}</h1>
}

export default Text
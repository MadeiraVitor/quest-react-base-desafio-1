const Text = (props) => {
    return <h1 style={{color: props.color}}>{props.children.toUpperCase()}</h1>
}

export default Text
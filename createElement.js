function createElement( type, props, ...children){
    return {
        type,
        props: {
            ...props,
            children: children.map(child=>
                typeof child === "object" ? child : createTextElement(child)
            )
        },
    }
}

function createTextElement(text){
    return {
        type: "TEXT_ElEMENT",
        props: {
            nodevalue: text,
            children: [],
        },
    }
}


export default createElement;
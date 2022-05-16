import * as React from "react"

const ProgrammingLanguageTag = ({ name }) => {
    return (
        <span className={"programming-language-tag " + name}>
            {name}
        </span>
    )
}

export default ProgrammingLanguageTag
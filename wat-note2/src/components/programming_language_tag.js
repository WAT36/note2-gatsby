import * as React from "react"

const ProgrammingLanguageTag = ({ name }) => {
    return (
        <span className={"right-placed programming-language-tag " + name}>
            {name}
        </span>
    )
}

export default ProgrammingLanguageTag
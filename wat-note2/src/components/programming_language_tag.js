import * as React from "react"

const ProgrammingLanguageTag = ({ name }) => {
    return (
        <span className="right-placed">
            <span className={"programming-language-tag " + name}>
                {name}
            </span>
        </span>
    )
}

export default ProgrammingLanguageTag
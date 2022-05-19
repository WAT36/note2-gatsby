import * as React from "react"

const ProgrammingLanguageTag = ({ name }) => {
    return (
        <span className="right-placed">
            <input type="radio" className="plang_radio" name="programming_language" id={name} />
            <label for={name} className="programming-language-tag">
                {name}
            </label>
        </span>
    )
}

export default ProgrammingLanguageTag
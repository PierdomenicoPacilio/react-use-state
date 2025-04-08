import Button from "./Button"
import languages from "../assets/languages"
import { useState } from "react"

export default function ButtonList() {

    const [activeButton, setActiveButton] = useState(null)

    return <div>
        {languages.map(element => <Button
            key={element.id}
            title={element.title}
            isButtonOpen={activeButton === element.id}
            onToggle={() => setActiveButton(activeButton === element.id ? null : element.id)}
        >{element.description}</Button>)}
    </div>
}
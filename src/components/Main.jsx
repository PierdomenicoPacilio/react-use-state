import languages from "../assets/languages"
import { useState } from "react"
import Card from "./Card"
import Button from "./Button"

export default function Main() {

    const [selectedLanguage, setSelectedLanguage] = useState(null)

    return <main>
        {languages.map(language => <Button
            key={language.id}
            title={language.title}
            onClick={() => setSelectedLanguage(language)}
            className={selectedLanguage === language ? 'selected' : 'not-selected'}
        ></Button>)}
        <Card selectedLanguage={selectedLanguage} />
    </main>
}
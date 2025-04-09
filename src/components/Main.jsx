import Button from "./Button"
import languages from "../assets/languages"
import { useState } from "react"

export default function Main() {

    const [selectedLanguage, setSelectedLanguage] = useState(null)

    return <main>
        {languages.map(language => <Button
            key={language.id}
            title={language.title}
            onClick={() => setSelectedLanguage(language)}
            className={selectedLanguage === language ? 'selected' : 'not-selected'}
        ></Button>)}
        <div className="description">{selectedLanguage === null ? 'Nessun linguaggio selezionato' : selectedLanguage.description}</div>
    </main>
}
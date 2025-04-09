import Button from "./Button"
import languages from "../assets/languages"
import { useState } from "react"

export default function Main() {

    const [selectedLanguage, setSelectedLanguage] = useState(null)

    const setCurrentLanguage = () => {
        console.log('ho cliccato')
    }

    return <main>
        {languages.map(language => <Button
            key={language.id}
            title={language.title}
            onClick={() => setSelectedLanguage(language)}
        ></Button>)}
        <div className="description">{selectedLanguage === null ? 'Nessun linguaggio selezionato' : selectedLanguage.description}</div>
    </main>
}
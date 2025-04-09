export default function Card({ selectedLanguage }) {
    return <div className="description">
        {selectedLanguage === null ? 'Nessun linguaggio selezionato' : selectedLanguage.description}
    </div>
}
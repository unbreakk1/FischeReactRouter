import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {useState} from "react"
import Home from "./components/Home"
import Header from "./components/Header"
import CharacterGallery from "./components/CharacterGallery"
import CharacterDetailCard from "./components/CharacterDetailCard"
import {characters} from "./Characters"

export default function App()
{
    const [searchText, setSearchText] = useState("")

    const filteredCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<Home />} />

                    {/* Characters Route */}
                    <Route
                        path="/characters"
                        element={
                            <>
                                <input
                                    type="text"
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder="Search for a character"
                                />
                                {
                                    filteredCharacters.length > 0 ? (
                                        <CharacterGallery characters={filteredCharacters} />
                                    ) : (
                                        <p>No characters found</p>
                                    )
                                }
                            </>
                        }
                    />

                    {/* Character Detail Route */}
                    <Route
                        path="/characters/:id"
                        element={<CharacterDetailCard characters={characters} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}
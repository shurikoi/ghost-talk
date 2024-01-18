import HeadImage from "../../../public/images/HeadImage"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="top-container">
                <div className="name">Lexify</div>
                <button className="get-started">Get Started</button>
            </div>
            <div className="bottom-container">
                <div className="content">
                    <div className="about">Learning by flashcards</div>
                    <HeadImage className="head-image"/>
                </div>
            </div>
        </header>
    )
}
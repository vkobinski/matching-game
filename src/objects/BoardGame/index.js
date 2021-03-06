import CardGame from "../../components/CardGame";
import "./style.css"

function BoardGame(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return `
    <section class="board-game">
        ${$htmlContent}
    </section>
    `;
}

export default BoardGame;
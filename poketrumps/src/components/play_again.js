// Play again button component to reset state and start a new game

export default function PlayAgain({ setUserPokemon, setComputerPokemon, navigate }) {
    const handlePlayAgain = () => {
        setUserPokemon(null);
        setComputerPokemon(null);
        navigate('/');
    };
    
    return (
        <button onClick={handlePlayAgain}>Play Again</button>
    );
    }
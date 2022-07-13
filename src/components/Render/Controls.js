export const Controls = ({ onForward, onBack, prevDesabled, nextDesabled }) => {
    return (    
        <section>
        <button type="button" onClick={onBack} disabled={prevDesabled}>Back</button> 
        <button type="button" onClick={onForward} disabled={nextDesabled}>Forward</button>
    </section>
    )
}

  

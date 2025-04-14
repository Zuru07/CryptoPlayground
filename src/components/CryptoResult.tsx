interface CryptoResultProps {
    output: string;
  }
  
  const CryptoResult = ({ output }: CryptoResultProps) => {
    if (!output) return null;
  
    return (
      <div className="result fade-in stagger-4">
        <h3>Output:</h3>
        <p>{output}</p>
      </div>
    );
  };
  
  export default CryptoResult;
import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';
import SavedCard from '../components/SaveCard';

const SavedCandidates = () => {
  const [SavedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  
  const remove = (e: React.MouseEvent<HTMLButtonElement>, login: string) => {
    e.preventDefault();
    let screenedCanidates:Candidate[] = [];
    const  storedCandidates = localStorage.getItem('storedCandidates');
    if (storedCandidates) {
      screenedCanidates = JSON.parse(storedCandidates);
    }
    const updatedCandidates = screenedCanidates.filter(candidate => candidate.login !== login);
    localStorage.setItem('storedCandidates', JSON.stringify(updatedCandidates));
    setSavedCandidates(updatedCandidates);
  }
  useEffect(() => {
    const screenedCanidates = JSON.parse(localStorage.getItem('storedCandidates') || '[]');
    setSavedCandidates(screenedCanidates);
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <main>
        {SavedCandidates.map(candidate => (
          <SavedCard key={candidate.login} candidate={candidate} remove={remove} />
        ))}
      </main>
    </>
  );
};

export default SavedCandidates;

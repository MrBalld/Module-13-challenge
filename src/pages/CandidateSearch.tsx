import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';


const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
 
  useEffect (() => {
    const getCandidates = async () => {
      const data = await searchGithub();
      const userInfo = await data.map(async(candidate: {login: string}) => await searchGithubUser(candidate.login));
      const userMap = await Promise.all(userInfo);
      console.log(userMap);
      setCandidates(userMap);
    }
    getCandidates();
  }, []);
  const saveCandidates = () => {
    if(candidates.length === 0) return;

    let screenedCanidates = [];
    const storedData = localStorage.getItem('storedCandidates');
    if (storedData) {
      screenedCanidates = JSON.parse(storedData);
    }
    screenedCanidates.push(candidates[0]);
    localStorage.setItem('storedCandidates', JSON.stringify(screenedCanidates));
    next();
  }
  const next = () => {
    if(candidates.length > 1) {
      setCandidates(candidates.slice(1));
    } else {
      setCandidates([]);
    }
  }




  return (
    <>
    <h1>CandidateSearch</h1>
    <div className='card container'>
      {candidates.length > 0? (
      <CandidateCard candidate={candidates[0]} />
      ) : (
        <p>No more candidates</p>
      )}
      <button onClick={saveCandidates}>+</button> 
      <button onClick={next}>-</button>
    </div>

    </>
  );

};

export default CandidateSearch;

import type Candidate from "../interfaces/Candidate.interface";

type CardProps = {
    candidate: Candidate;
};

const CandidateCard = (props: CardProps) => {
    return (
        <>
      { props.candidate.avatar_url? (<img src= {props.candidate.avatar_url} alt='Profile Picture'/> ) : (<h2>No Profile Picture</h2>)}
      <h3>{props.candidate.login}</h3>
      {props.candidate.location? (<p>Location: {props.candidate.location}</p>) : (<p>No Location Listed</p>)}
      <a href={`mailto:${props.candidate.email}`}>{props.candidate.email}</a>
      {props.candidate.company? (<p>Company: {props.candidate.company}</p>) : (<p>No Company Listed</p>)}
      {props.candidate.bio? (<p>Bio: {props.candidate.bio}</p>) : (<p>No Bio listed</p>) }
        </>
    );
}
export default CandidateCard;
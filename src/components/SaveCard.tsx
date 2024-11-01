import type Candidate from "../interfaces/Candidate.interface";

type CardProps = {
    candidate: Candidate;
    remove: (e: React.MouseEvent<HTMLButtonElement>, login: string) => void;
};

const SavedCard = (props: CardProps) => {
    return (
        <>
        <h2>{props.candidate.login}</h2>
      { props.candidate.avatar_url? (<img src= {props.candidate.avatar_url} alt='Profile Picture'/> ) : (<h2>No Profile Picture</h2>)}
      {props.candidate.name? (<p>{props.candidate.name}</p>) : null}
      {props.candidate.location? (<p>Location: {props.candidate.location}</p>) : (<p>No Location Listed</p>)}
      <a href={`mailto:${props.candidate.email}`}>{props.candidate.email}</a>
      {props.candidate.company? (<p>Company: {props.candidate.company}</p>) : (<p>No Company Listed</p>)}
      {props.candidate.bio? (<p>Bio: {props.candidate.bio}</p>) : (<p>No Bio listed</p>) }
      <button onClick={(e) => props.remove(e, props.candidate.login)}>-</button>
        </>
    );
}
export default SavedCard;
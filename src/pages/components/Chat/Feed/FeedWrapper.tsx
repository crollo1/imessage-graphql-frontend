import { Session } from "next-auth";

interface FeedWrapperProps {
    session: Session;
}

const FeedWrapper: React.FC<FeedWrapperProps> = ({session}) => {
    return <div>FeedWrapper</div>
};

export default FeedWrapper;
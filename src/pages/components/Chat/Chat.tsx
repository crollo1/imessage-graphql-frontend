import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

interface IChatProps {
}

const Chat: React.FunctionComponent<IChatProps> = (props) => {
    return (
        <div>
            Chat
            <Button onClick={() => signOut()}>Logout</Button>
        </div>
    );
};

export default Chat;

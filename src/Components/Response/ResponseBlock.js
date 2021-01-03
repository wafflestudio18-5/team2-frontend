import EmptyResponseBlock from './EmptyResponseBlock';
import ResponseListBlock from './ResponseListBlock';

const ResponseBlock = ({ Response, me }) => {
    if (Response.length == 0) {
        return <EmptyResponseBlock />;
    } else {
        return <ResponseListBlock Response={Response} me={me} />;
    }
};

export default ResponseBlock;

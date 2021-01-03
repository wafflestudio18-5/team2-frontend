import EmptyResponseBlock from './EmptyResponseBlock';
import ResponseListBlock from './ResponseListBlock';

const ResponseBlock = ({ Response }) => {
    if (Response.length == 0) {
        return <EmptyResponseBlock />;
    } else {
        return <ResponseListBlock Response={Response} />;
    }
};

export default ResponseBlock;

import { useLocation  } from 'react-router-dom';

function SelectPost() {
    const data = useLocation();
    console.log(data);

    return (
        <div>
            {data.search}
        </div>
    );
}

export default SelectPost;
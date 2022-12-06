import { Link } from 'react-router-dom';

const SingelCountry = (props) => {
    const { id, index, name, image } = props;
    return (
        <Link
        to={`/details/${id}`}
        key={id}
        >
            <div>
                src={image}
                alt="Flag"
            </div>
            <div>
                <h3>{name}</h3>
            </div>
        </Link>
    );
};

export default SingelCountry;
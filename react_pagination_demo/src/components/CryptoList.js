import CryptoCard from './CryptoCard';
import "./css/CryptoList.css";

const CryptoList = ({ coinsData }) => {
    return (
        <div className="crypto_list">
            {coinsData.map((coin, index) => (
                <CryptoCard
                    key={index}
                    image={coin.image}
                    name={coin.name}
                    price={coin.current_price}
                />
            ))}
        </div>
    )
}

export default CryptoList;
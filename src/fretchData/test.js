import statusCards from '../assets/JsonData/status-card-data.json'

const props = () => {
    const data = JSON.parse(statusCards);
    return data;
}

export default props;
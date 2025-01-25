export const FindLocationByIP = (props) => {
    const {
        setLocation,
    } = props;

    const onClick = () => {
        setLocation('Moscow, Russia');
    }
    return (
        <button>
            Find Location
        </button>
    )
}
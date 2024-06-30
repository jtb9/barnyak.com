interface Props {
    navigateHome: () => void;
}

export default function Logo(props: Props) {
    return <img onClick={() => {
        props.navigateHome();
    }} className="blogLogo" style={{width: '200px', zIndex: '10'}} src="https://cdn.barnyak.com/logo_v2.png" alt="Barnyak logo" />
}

interface Props {
    navigateHome: () => void;
}

export default function Logo(props: Props) {
    return <img onClick={() => {
        props.navigateHome();
    }} className="blogLogo" style={{width: '200px', borderRadius: '16px'}} src="https://cdn.barnyak.com/logo.png" alt="Barnyak logo" />
}

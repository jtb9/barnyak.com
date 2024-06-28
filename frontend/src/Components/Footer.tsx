import { Stack } from "@mui/material";

export default function Footer() {
    return <div className="footer-spacer">
        <footer id="footer">

            <span style={{
                display: 'block',
                margin: 'auto',
                marginTop: '40px',
                marginBottom: '10px',
                width: '181px'
            }}>
                <a target="_blank" rel="noopener" href="https://twitter.com/JustinBarnyak?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-size="large"
                    data-show-count="false">Follow @JustinBarnyak</a>
                <script async src="https://platform.twitter.com/widgets.js"></script>
            </span>
            <Stack direction="column" justifyContent="center">
                <div style={{textAlign: 'center'}}>
                    Copyright &copy;

                    2018-2024
                    Justin Barnyak
                </div>
            </Stack>
        </footer>
    </div >
}

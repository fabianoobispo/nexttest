import GlobalStyles from "../styles/GlobalStyles";

export default function nexttest({ Component, pagePropos }) {
    return(
        <>
            <GlobalStyles />
            <Component  {...pagePropos}/>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
            </style>
        </>
    )
}
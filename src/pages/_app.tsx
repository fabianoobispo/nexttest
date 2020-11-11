import GlobalStyles from "../styles/GlobalStyles";

export default function nexttest({ Component, pagePropos }) {
    return(
        <>
            <GlobalStyles />
            <Component  {...pagePropos}/>

        </>
    )
}
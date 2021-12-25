import Navbar from "../components/navbar";
import Header from "../components/header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='flex flex-col h-screen font-roboto'>
                <Navbar/>
                    {children}
            </div>
        </>
    )
}
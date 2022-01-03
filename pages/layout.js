import Navbar from "../components/navbar";
import Header from "../components/header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className='flex flex-col font-serif bg-dsbg min-h-screen tracking-wide'>
                <Navbar/>
                    {children}
            </div>
        </>
    )
}
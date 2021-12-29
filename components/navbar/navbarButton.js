export default function navbarButton({ text,link,isChosen,basis}) {
    return (
        <div className={`my-auto py-1 px-4 mx-4 rounded-lg ${!isChosen?null:`bg-dschosen`} ${!isChosen?`text-dsfont`:`text-white`} ${!isChosen?`hover:bg-dshoverbg hover:text-dshovertxt`:null} text-center basis-1/3`}>
            <a className={`text-xl md:text-lg sm:text-xs transition duration-300 ease-in-out text-center`} href={link}>
                {text}
            </a>
        </div>
    )
}
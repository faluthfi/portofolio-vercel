export default function navbarButton({ text,link,isChosen,basis}) {
    return (
        <div className={`my-auto py-1 px-4 mx-4 rounded-lg ${!isChosen?null:`bg-gray-600`} ${!isChosen?`hover:bg-gray-600 hover:text-dschosen`:null} text-center basis-1/3`}>
            <a className={`${!isChosen?`text-dsfont`:`text-dschosen`}  text-xl md:text-lg sm:text-xs transition duration-300 ease-in-out text-center`} href={link}>
                {text}
            </a>
        </div>
    )
}
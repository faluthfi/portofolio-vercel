for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log('Number: ', i)
    }, 500 * (i + 1))
}
export const animateSearching = (setLocationName, animationIteration) => {
    setLocationName('Searching' + '.'.repeat(animationIteration.current++ % 3 + 1));
}

export const setupSearchingAnimation = (setLocationName) => {
    const animationIteration = { current: 1 };
    setLocationName('Searching.')

    return setInterval(
        animateSearching, 
        300, 
        setLocationName, 
        animationIteration
    );
}

async function getBeers() {
    const response = await fetch('https://api.sampleapis.com/beers/ale')

    if (response.status === 200) {
        return await response.json()
    }

    throw new Error(`Could not fetch beers: ${response.status}`)
}

const functionalGetBeers = async () => {
    const my_beers = await getBeers()
    return my_beers
}

function main() {
    getBeers()
        .then((beers) => {
            console.log("I got beer!")
            console.log(beers)
        })
        .catch((error) => {
            console.error(error)
        })
}

document.addEventListener('DOMContentLoaded', main)

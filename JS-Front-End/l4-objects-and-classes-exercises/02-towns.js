function town(towns) {
    let array = [];
    for (const infoTown of towns) {
        let [town, latitude, longitude] = infoTown.split(' | ');
        array.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        })
    }

    array.forEach(town => console.log(town))
}

town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )

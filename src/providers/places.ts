const ordinals = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth',
    'Seventh',
    'Eighth',
    'Ninth',
    'Tenth'
];

export function getPlaces(count) {
    let places = [];
    for (let i = 1; i <= count; ++i) {
        places.push({
            name: `Place ${i}`,
            address: `${ordinals[(i-1)%10]} Street ${i} New York`
        })
    }
    return places;
}

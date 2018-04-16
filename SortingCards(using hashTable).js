'use strict';
const cards = [
    {
        from: 'Florence',
        to: 'Ahen',
        transport_type: 'plane',
        trip_number: 9,
        sit: 10
    },
    {
        from: 'Rome',
        to: 'Florence',
        transport_type: 'train',
        trip_number: 3,
        sit: 45
    },
    {
        from: 'Kyev',
        to: 'Rome',
        transport_type: 'plane',
        trip_number: 12,
        sit: 55
    },
    {
        from: 'Simferopol',
        to: 'Kyev',
        transport_type: 'car',
        trip_number: 10,
        sit: 3
    }


]

function makeHashTable(cards){
    let hashTable = new Map();
    for(let i=0; i < cards.length; ++i){
        hashTable.set(cards[i].from, [cards[i].to, i]);
        // hashTable[cards[i].from] = [cards[i].to, i];
    }
    return hashTable;
}


function getDeparturePoint(cards){
    let departurePoint;
    let toHashTable = new Set();
    for(let i=0; i < cards.length; ++i)
    {
        toHashTable.add(cards[i].to);
    }
    for(let i=0; i < cards.length; ++i){
        if( !toHashTable.has(cards[i].from) ){
            departurePoint = cards[i].from;
        }
    }
    return departurePoint;
}

function sortCards(){
    let hashTable = makeHashTable(cards); 
    let sortedCards = [];
    let departurePoint = getDeparturePoint(cards);

    for(let departurePoint = getDeparturePoint(cards);
        hashTable.has(departurePoint); departurePoint = hashTable.get(departurePoint)[0])
    {

        sortedCards.push(cards[ hashTable.get(departurePoint)[1] ]); 
    }
    return sortedCards;
}
function createMessage() {

    let sortedCards = sortCards();
    let message = '';


    for(let i=0; i < sortedCards.length; ++i){

        message += `From ${sortedCards[i].from} take ${sortedCards[i].transport_type} to ${sortedCards[i].to}, seat ${sortedCards[i].sit}. 
`;
    }
    return message;
}

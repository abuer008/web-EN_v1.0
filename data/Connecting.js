import * as introAnima from '../public/connecting/introAnima.json'
import * as intimatAnima from '../public/connecting/initimaCommAnima.json'
import * as catalogAnima from '../public/connecting/catalogAnima.json'
import * as flexibleAnima from '../public/connecting/flexibleComAnima.json'
import * as idleExample from '../public/connecting/idleExample.json'
import * as activeExample from '../public/connecting/activeExample.json'
import * as sleepyExample from '../public/connecting/sleepyExample.json'

export const connectingData = {
    research: {
        heading: "The development of comtemporary kinship",
        plainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Pellentesque odio lobortis sit massa in odio. Facilisis in gravida ut " +
            "aenean id turpis ac sit montes. Et scelerisque ac eget elit. Risus lectus et " +
            "cursus congue magnis. Gravida morbi arcu adipiscing accumsan amet odio. Morbi " +
            "venenatis sed commodo arcu. Sed magna arcu commodo arcu lobortis ipsum nulla eu. E" +
            "st egestas sit scelerisque ultricies aliquam, enim sit."
    },
    introduction: {
        heading: "The Connecting",
        plainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Pellentesque odio lobortis sit massa in odio. Facilisis in gravida " +
            "ut aenean id turpis ac sit montes."
    },
    character: {
        heading: 'Characterisation',
        plainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Pellentesque odio lobortis sit massa in odio. Facilisis in gravida " +
            "ut aenean id turpis ac sit montes."
    },
    communication: {
        heading: 'Intimate Communication',
        plainText: 'the biggest difference of connecting is the intimate communications. ' +
            'without interactive process, the communication can be done by simple touch the wrist.'
    },
    cataloging: {
        heading: 'Cataloging and visualisation',
        plainText: 'some texts about visualisation of relationships are going on here. ' +
            'how to meseare the invisible kinship and improve the experiences.'
    },
    compatibility: {
        heading: 'Flexible compatibility',
        plainText: 'not only the wearable version of virtual kinship, but also the smartphone version ' +
            'with full access, for different targets users and different scenarios.'
    }
}

export const connectingAnima = [introAnima, intimatAnima, catalogAnima, flexibleAnima]

export const statesExample = {
    idle: idleExample,
    active: activeExample,
    sleepy: sleepyExample
}

export const animaState = {
    idle: {
        heading: 'Idle state',
        plainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Pellentesque odio lobortis'
    },
    active: {
        heading: 'Active state',
        plainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    sleepy: {
        heading: 'Sleepy state',
        plainText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
}

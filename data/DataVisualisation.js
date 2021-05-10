export const dataVisualisation = [
    {
        heading: "Syrian civil war",
        plainText: "The Syrian Civil War is an ongoing civil war fought in Syria, so far noticed as the biggest war in the 21st century. On 2 January 2013, the UN stated that 60,000 had been killed since the civil war began, four months later, the UN’s updated figure for the death toll had reached 80,000. In the visualisation of the Syrian Civil War, it wasn’t trying to deliver any political opinion, but making people realise, that Syrian citizens, who were murdered in the battlefield, are being recorded into a piece of data but are the real brutal tragedies."
    },
    {
        code:
            "_id: 5ebdcf49a7a5c11ff8853d01\n" +
            "year: 2016\n" +
            "active_year: 1\n" +
            "type_of_violence: 1\n" +
            "conflict_new_id: 299\n" +
            "conflict_name: \"Syria: Government\"\n" +
            "dyad_new_id: 11973\n" +
            "dyad_name: \"Government of Syria - Syrian insurgents\"\n" +
            "side_a_new_id: 118\n" +
            "side_a: \"Government of Syria\"\n" +
            "side_b_new_id: 4456\n" +
            "side_b: \"Syrian insurgents\"\n" +
            "number_of_sources: 1\n" +
            "source_article: \"\"SOHR,2016-12-31,About 60 thousand were killed in 2016 and we still wa...\"\n" +
            "source_office: \"SOHR\"\n" +
            "source_date: \"2016-12-31\"\n" +
            "source_headline: \"About 60 thousand were killed in 2016 and we still wait for an interna...\"\n" +
            "source_original: \"SOHR\"\n" +
            "where_prec: 6\n" +
            "where_coordinates: \"Syria\"\n" +
            "adm_1: \"\"\n" +
            "adm_2: \"\"\n" +
            "latitude: 35\n" +
            "longitude: 38\n" +
            "geom_wkt: \"POINT (38 35)\"\n" +
            "low: 8179\n" +
            "best: 8179\n" +
            "high: 8179",
        heading: "Data source",
        plainText: "Data of the Syrian Civil War was provided by UCDP - The Uppsala Conflict Data Program, the world’s leading provider of data on organised violence and the oldest ongoing data collection project for civil war. The data were collecting and analysing served as the starting point for visual contents and interactions."
    }, {
        heading: "Perspective of Design",
        plainText: "Each piece of data contains numbers of information, which most of them have no interest to us. The relative information we focus on is the numbers, number of deaths, and the coordinate of individual battles. Numbers are the most simple and powerful data in those data set; the number of casualties means in those battles vivid lives have been taking, uncountable families have been broken apart. Therefore, the numbers would be essential elements in the design perspective."
    }, {
        heading: "Intuitive illustration in 3D globe",
        plainText: "To clarify the war situation, using coordinates, containing in the data strings, to illustrate intuitively on the three-dimensional globe, has been considered. The browser 3D techniques - webGL, and Threejs library are being implemented into visualisation."
    }, {
        heading: "Rethinking of design and techniques",
        plainText: "UX design should not be divorced from technology, and the data visualisation project is a perfect example of the impact of technology in UX design. Data that more than 100,000 rows put great performance pressure on the visualisation with a browser platform. Hence, it was crucial to design a feasible user interface that meets the technical requirements based on understanding the operation of the data. The focus on and use of various emerging technologies also elevated UX design to a new level. In this case, the adoption of real-time 3D rendering technology made the visualization more interactive."
    }
]

export const hiddenText = [
    {
        heading: "The total deaths number",
        plainText: "The most obvious number is on the top left, around with white background. This number indicates how many casualties were figured in a selected range."
    }, {
        heading: "The year list",
        plainText: "The collected data from 2016 to 2019 contains over ten thousands of battles, the year list on the left, distributed data based on a specific time range. The visualisation on the right and interface would be changed during interaction with the list."
    }, {
        heading: "The details of individual battle",
        plainText: "A series of digits are shown on the right by clicking the list, and the numbers indicate how many casualties were figured in the selected battle. A floating card could also show the details of a particular struggle with sample click."
    }
]
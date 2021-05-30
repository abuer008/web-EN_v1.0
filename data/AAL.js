export const AALData = [
    {
        title: "Gestures Monitoring System",
        plainText: "For eldercare services at home or nursing home."
    },
    {
        title: "Big Data comparison",
        plainText: "For Early detection of chronic diseases."
    }, {
        title: "Connectivity with personals",
        plainText: "Synchronisation of warnings and relative data"
    }
]

export const AALs = {
    crisis: {
        heading: "The crisis of elderly care services",
        plainText: 'Europe has one of the highest shares of elderly people in the world. In 2016, already 19% of the European population was 65 years and over. Looking at the prognoses, this share will increase to 29% by 2070; meaning that more than 1 in 4 people in Europe will be 65 years or over. As people grow older, it is expected that there will be more people with age-related chronic diseases and in need of long-term care.',
        plainText2: 'Structural changes in population ratios will have serious and unpredictable consequences, among them the already slow-onset crisis of caregiving shortages and the danger of a precipitous decline in social welfare.'
    },
    aalIntro: {
        heading: "The Concept of AAL",
        plainText: "Ambient Intelligence (AmI) is a research paradigm that brings intelligence to everyday environments through sensor networks, pervasive computing and artificial intelligence. This way, our environments become sensitive, adaptive and responsive to our presence and needs.",
        plainText2: "AAL applies the classic principles of Ambient Intelligence to a new generation of assistive technologies for older adults, which are embedded (i.e., non-invasive and unobtrusively integrated into the environment); context-aware (i.e., recognise the user and the situational context); personalised (i.e., tailored to the specific needs of the individual user); adaptive (i.e., responsive to the user through learning); and anticipatory (i.e., anticipating the user’s needs and desires without conscious mediation). In AAL, ambient intelligence is used to create supportive environments that provide all-encompassing, non-invasive and pro-active assistance to the user."
    },
    hardware: {
        heading: "Wearable devices for gesture monitoring",
        plainText: "Monitoring the posture can get many extraordinary results to assist people at home. For instance, lying down at a specific time can infer the user’s sleep time and sleep quality; sudden posture changes combined with heart rate changes can infer whether the user is in a dangerous situation. In this particular project, posture monitoring will be used as the primary data input source to automatically calculate the activity information and measurable data such as heart rate. Wearable smart bracelets will be the main input device, and the patch-type motion sensor sticks on the limbs to calculate comparable data."
    },
    dataComparison: {
        heading: "Data comparison",
        plainText: "In a practical application of the AAL concept, the data would be isolated locally. They will be compared to data such as posture obtained a day or weeks ago to determine potential chronic disease features or possible health hazards; constructive comments or critical information will then be passed to the hospital. The integrated dataset on the left shows real-time health risks and weekly statistics in a dot matrix format. Users can click to get detailed health reports for a specified time frame, while doctors and nurses analyze the data to provide an objective basis for diagnosis."
    },
    output: {
        heading: "Explicit output",
        plainText: "For the elderly target audience, we reduced the complexity of interaction as much as possible, with as little interactive language and intuitive data presentation as possible. Therefore, in the actual interface design, we clearly use the most direct text elements to describe the key data processing results."
    },
    infographic: {
        heading: "Intuitive Infographic",
        plainText: "On the left side of the screen, the point clouds animations point out posture changes intuitively. Through the posture change trend for consecutive days, the potential risk areas are clearly marked in red. And it is worth to mention that the information will not be displayed in the user’s interface for those predictions of serious health condition. It will be directly submitted to relatives or personal doctors to prevent panic."
    },
    prototype: {
        heading: "Prototype",
        plainText: "The low density of information allows users to receive and instantly understand health advice without any interaction. The dots dynamic animations give participants a general understanding of how information is collected and an intuitive sense of changes in their posture and potential risks. In the caregiver-targeted functional area, the dot plot contains a large amount of raw data distributed by date and time interval, which serves as a real basis for improving the quality of care and medical diagnosis."
    },
    conclusion: {
        heading: "Design Metrics",
        plainText: "The AAL concept aims to predict early abnormalities and diagnoses to save care resources and improve the quality of care. However, the product cannot essentially solve the problem of elderly care services. The lack of elderly care results from the increase in the budget of the human resources department and, more importantly, the rapid development of contemporary society and the gradual alienation of relatives, which is declared in the next project."
    }
}

export const outputContents = {
    mainConcern: {
        heading: "Health concerns",
        plainText: "In the past 30 days the time that spend on toilet has statistically increased."
    },
    gesture: {
        heading: "Gesture concerns",
        plainText: "The walking posture has slightly changed. The gesture has lasted 3 hours in total today."
    },
    activity: {
        heading: "Activity concerns",
        plainText: "Excessive exercises has increased by 90 minutes compared with the past week."
    }
}

export const protoImgs = [
    {source: '/aal/prototype/Start.Page.webp', text: 'the lock screen'},
    {source: '/aal/prototype/General.Info.Page.webp', text: 'the main page'},
    {source: '/aal/prototype/Health.Concerns.Page.webp', text: 'the detail of health concerns'},
    {source: '/aal/prototype/Monthly.report.Page.webp', text: 'the monthly report'}
]
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
        plainText: "In the actual application of the AAL concept, the biggest worry and barrier lies in personal information leakage. How to prevent the leakage of user’s sensitive data is the main concern of this project. Without active data transmission through the Internet is the key feature; the data would be isolated locally. They will be compared to the data obtained one day ago, or weeks ago, the changes in the user’s own data can be recorded to judge whether is there potential chronic diseases or possible health hazards; finally, constructive opinions or key information are passed to the hospital basis on user’s request. The figures on the left show real-time health risks and weekly statistics in the form of a dot matrix. Users can click to get a detailed health report in the specified time range, and the doctors and nursing provide an objective diagnosis by actively sharing the report."
    },
    output: {
        heading: "Explicit output",
        plainText: "Most of our target users are older adults who need long-term care, and most of them doesn’t familiar with screen-based interactive products. From a design perspective, how to let users interact without barriers and understand the health risks found in the data is the main aim of the interface design. Therefore, I implemented the most basic and obvious element - text, to describe the important information. The left figure shows the abstract and comprehensive information with dot-matrix; the important health prediction is divided into three parts and clearly expressed in the text: 1. The comprehensive real-time health report and advice. 2. Posture related information. 3. Activities related information."
    },
    infographic: {
        heading: "Intuitive Infographic",
        plainText: "On the left side of the screen, the point clouds animations point out posture changes intuitively. Through the posture change trend for consecutive days, the potential risk areas are clearly marked in red. And it is worth to mention that the information will not be displayed in the user’s interface for those predictions of serious health condition. It will be directly submitted to relatives or personal doctors to prevent panic."
    },
    prototype: {
        heading: "Prototype",
        plainText: "The first principle of interactive design for elderly is the understanding of content, so light grey background and neuromorphic elements are used to get closer to the real world, the important health improvement suggestions are expressed in the black text; and the dots abstractly contains a large amount of health data, users or nursing staff can perform advanced data analysis; unnecessary interactive elements and pages are reduced as much as possible; the relationship between individual function would be deeply understood through the dynamic feedback. With the improvements from a design perspective, users can understand important information with minimum interaction; the nursing staff promptly observe users of abnormal situations and provide high-quality care services with few human resources; the doctors can also provide reliable diagnosis and treatment for those difficult detected diseases."
    },
    conclusion: {
        heading: "Conclusion",
        plainText: "The concept of symbiosis with machines proposed in the previous project has practically applied in this project. To alleviate the increasing problems of elderly care, the idea of ambient assisted living is demonstrated, and the wearable devices are being illustrated and used to collect personal posture data. The AAL concept aims to predict an early stage of abnormal situations and diagnosis to save nursing resources and improve nursing quality. But, the product cannot solve the problem of elderly care services essentially. The lack of elderly care is not just the increase in the budget in Human Resources, but also the rapid development of contemporary society, the kinships are gradually alienated, which were pronounced in the next project."
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
    {source: '/aal/prototype/Start.Page.png', text: 'the lock screen'},
    {source: '/aal/prototype/General.Info.Page.png', text: 'the main page'},
    {source: '/aal/prototype/Health.Concerns.Page.png', text: 'the detail of health concerns'},
    {source: '/aal/prototype/Monthly.report.Page.png', text: 'the monthly report'}
]
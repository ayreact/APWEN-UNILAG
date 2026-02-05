export interface Event {
    title: string;
    category: string;
    image: string;
    alt: string;
    description: string;
}

export const events: Event[] = [
    {
        title: "APWEN UNILAG Industry Visit - Dangote",
        category: "Industrial Visit",
        image:
            "apwen-unilag-industry-visit-dangote.JPG",
        alt: "Students visiting the Dangote Refinery wearing safety gear",
        description: "Bridging the gap between theory and practice.",
    },
    {
        title: "APWEN 40th Anniversary & National Conference",
        category: "Celebration",
        image:
            "apwen-anniversary-national-conference.jpg",
        alt: "Group photo at a conference hall celebrating anniversary",
        description: "Celebrating four decades of excellence.",
    },
    {
        title: "APWEN UNILAG Industry Visit - MEMMCOL",
        category: "Industrial Visit",
        image:
            "apwen-unilag-industry-visit-memmcol.jpg",
        alt: "Students visiting the Dangote Refinery wearing safety gear",
        description: "Bridging the gap between theory and practice.",
    },
    {
        title: "She-Engineer 30% Club Workshop Session & Mentorship Initiative",
        category: "Workshop",
        image:
            "she-engineer-30%-club-workshop-session-mentorship-initiative.jpg",
        alt: "Female student presenting a robotics project",
        description: "Hands-on experience with modern tech.",
    },
];

import { Award } from "@/types/award";

const awardsData: Award[] = [
  {
    id: 1,
    title: "Best Committee Chair Award:",
    criteria: 
        [
        "Effectively moderates committee sessions, ensuring inclusive participation and maintaining decorum.",
        "Facilitates productive debate, guiding the resolution-building process towards constructive outcomes.",
        "Exhibits exceptional leadership, approachability, and fairness in managing committee dynamics.",
        ],
    process: 
        [
        "Delegates will have the opportunity to provide anonymous feedback on committee chairs' performance through evaluation forms.",
        "Committee chairs and vice chairs will be assessed on their ability to steer committee sessions, manage time effectively, and encourage delegate engagement.",
        "The conference Secretariat, in consultation with the Under-Secretary-General of Committees, will conduct an in-depth review of all evaluations to identify potential Best Committee Chair recipients.",
        "The final decision on Best Committee Chair recipients will be made based on the comprehensive review of evaluations.",          
        ],
  },
  {
    id: 2,
    title: "Outstanding Delegate Award:",
    criteria: 
        [
        "Demonstrates exceptional and exemplary diplomacy, negotiation skills, and leadership across all committees.",
        "Exhibits a deep understanding of committee topics and provides well-researched and innovative solutions.",
        "Actively contributes to the resolution-building process and collaborates effectively with delegates.",
        ],
    process: 
        [
        "Committee chairs and vice chairs will nominate outstanding delegates from their respective committees.",
        "Nominated delegates will be assessed based on their performance in their respective committee during the conference.",
        "The conference Secretariat, in collaboration with the Under-Secretary-General of Committees, will conduct a comprehensive review of nominated delegates' evaluations to identify potential Overall Outstanding Delegate recipients.",
        "The final decision on Overall Outstanding Delegate recipients will be made based on the comprehensive review of evaluations.",
        ],
  },
  {
    id: 3,
    title: "Best Delegate Award from Each Committee:",
    criteria: 
        [
        "Demonstrates excellent diplomacy, negotiation skills, and leadership within the specific committee.",
        "Exhibits a deep understanding of committee topics and provides well-researched and innovative solutions.",
        "Actively contributes to the resolution-building process and collaborates with other delegates effectively.",
        ],
    process: 
        [
        "Committee chairs and vice chairs will evaluate delegates' performance based on pre-defined criteria during committee sessions.",
        "Delegates will be assessed on their public speaking, negotiation skills, resolution writing, and ability to build consensus within their committee.",
        "The conference Secretariat, in collaboration with the Under-Secretary-General of Committees, will thoroughly review all evaluations to ensure consistency and fairness.",
        "Final Best Delegate recipients from each committee will be chosen based on a comprehensive review of individual evaluations."
        ],
  },
  {
    id: 4,
    title: "Best Delegation Award:",
    criteria: 
        [
        "The number and distribution of awards received by the delegation will be considered. This includes Honorable Mentions, Verbal Commendations, and other recognitions received by the delegation's individual delegates across different committees. A delegation's ability to secure awards in multiple committees will be indicative of their overall engagement and effectiveness in diverse settings.",
        "The depth and significance of the awards received by the delegation will be thoroughly evaluated. The substance and impact of the delegation's contributions, positions in committee debates, and resolution writing will be taken into account. Awards received for outstanding diplomacy, negotiation skills, leadership, and resolution-building will carry more weight in the assessment.",
        ],
    process: 
        [
        "Committee chairs and vice chairs will evaluate individual delegates' performance in their respective committees, considering their engagement, diplomacy, substantive contributions, and leadership skills.",
        "Committee chairs and vice chairs will nominate delegates for Honorable Mentions, Verbal Commendations, and other awards based on their evaluations and pre-defined criteria.",
        "The conference Secretariat, in collaboration with the Under-Secretary-General of Committees, will conduct a comprehensive review of all nominations and evaluations. They will assess the quality and significance of awards received by each delegation in various committees.",
        "The Secretariat will ensure consistency in evaluations and awards distribution across different committees to maintain fairness in the selection process.",
        ],
  },
  {
    id: 5,
    title: "Best Position Paper Award:",
    criteria: 
        [
        "Submits well-researched, comprehensive, and persuasive position papers.",
        "Effectively outlines the delegate's country or character's stance on the topics.",
        "Provides thoughtful and innovative solutions to the issues under discussion.",
        ],
    process: 
        [
        "Committee chairs and vice chairs along with the USG of Committees will thoroughly review and assess all submitted position papers before the conference.",
        "Position papers will be evaluated based on their depth of research, clarity of ideas, and alignment with committee topics.",
        "The conference Secretariat, in consultation with the Under-Secretary-General of Committees, will conduct a comprehensive review of all position paper evaluations to identify potential Best Position Paper recipients.",
        "The final decision on Best Position Paper recipients will be made based on the comprehensive review of evaluations.",
        ],
  },
  {
    id: 6,
    title: "Honorable Mention:",
    criteria: 
        [
        "Displays commendable diplomacy, negotiation skills, and substantive contributions during the conference.",
        "Demonstrates active engagement and valuable contributions to committee discussions.",
        "Shows potential for growth and improvement in future Model UN conferences.",
        ],
    process: 
        [
        "Committee chairs and vice chairs will provide input on delegates deserving of recognition.",
        "Delegates will be assessed on their overall engagement, participation, and commitment to substantive debate.",
        "The conference Secretariat, in collaboration with the Under-Secretary-General of Committees, will conduct a comprehensive review of all evaluations to identify potential Honorable Mention recipients.",
        "The final decision on Honorable Mention recipients will be made based on the comprehensive review of evaluations.",
        ],
  },
  {
    id: 7,
    title: "Verbal Commendation:",
    criteria: 
        [
        "Demonstrates consistent engagement and active participation in committee sessions.",
        "Provides substantive contributions and constructive input to resolution-building.",
        "Exhibits a positive attitude and willingness to collaborate with other delegates.",
        ],
    process: 
        [
        "Committee chairs and vice chairs will provide input on delegates who deserve verbal commendation.",
        "Delegates will be assessed on their consistent participation, contributions to debate, and positive attitude throughout the conference.",
        "The conference Secretariat, in consultation with the Under-Secretary-General of Committees, will conduct a comprehensive review of all evaluations to identify potential Verbal Commendation recipients.",
        "The final decision on Verbal Commendation recipients will be made based on the comprehensive review of evaluations.",
        ],
  },
];
export default awardsData;

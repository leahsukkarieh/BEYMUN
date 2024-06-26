import { Committee } from "@/types/committee";
import SCData from "./hsCommittees/SCData";
import historicalData from "./hsCommittees/historicalData";
import unidoData from "./hsCommittees/unidoData";
import cstdData from "./hsCommittees/cstdData";
import gaData from "./hsCommittees/gaData";
import icjData from "./uniCommittees/icjData";
import scData from "./uniCommittees/scData";
import GAData from "./uniCommittees/GAData";
import ccpcjData from "./uniCommittees/ccpcjData";

const allCommitteeData: Committee[] = [
  {
    id: 1,
    name: "Security Council",
    topic: "The Korean War Crisis",
    description: 'A committee focusing on international peace and security issues involving crisis simulations. Different delegates represent different countries involved in the conflict. This crisis simulation will focus on the Korean War and its related subtopics; military operations and strategies, ceasefire monitoring, diplomatic negotiations and peacekeeping missions.',
    image: '/images/committees/hs/security.png',
    diasMembers: SCData,
  },
  {
    id: 2,
    name: "Special Committees, Historical",
    topic: "The Lebanese Civil War",
    description: 'Special committees exploring historical events and their implications. Delegates will be touching upon subtopics such as external actors, war crimes, peace initiatives and reconciliation. The delegates will work under a framework representing heads of states involved in the conflict/issue.',
    image: '/images/committees/hs/historical.jpg',
    diasMembers: historicalData,
  },
  {
    id: 3,
    name: "UNIDO",
    topic: "Mitigating the Environmental Effects on Digital Production",
    description: 'The United Nations Industrial Development Organization; a committee focusing on issues related to environmental sustainability and industrial development. The delegates will explore mitigation in regards to environmental impacts associated with digital production.',
    image: '/images/committees/hs/unido.png',
    diasMembers: unidoData,
  },
  {
    id: 4,
    name: "United Nations CSTD",
    topic: "Economic Development and Blockchain Technology",
    description: 'The Commission on Science and Technology for Development; a committee focusing on the intersections of science, technology and economic development. Delegates will be working under a format of double delegation and will explore subtopics related to developing economies, digital identity as well as financial services and legal implications.',
    image: '/images/committees/hs/cstd.webp',
    diasMembers: cstdData,
  },
  {
    id: 5,
    name: "Third Committee of the General Assembly",
    topic: "Addressing Unique Challenges Faced by Refuge Children",
    description: 'The GA3; a committee focusing on cultural, social and humanitarian issues. Delegates will be working under a format of double delegation and delving into the different complications when it comes to refugee children and into long term refugee solutions. This topic will involve the exploration of a wide variation of topics from access to education and healthcare to trauma-informed care, exploitation and violence.',
    image: '/images/committees/hs/sochum.png',
    diasMembers: gaData,
  },
  {
    id: 6,
    name: "International Court of Justice",
    topic: "Armed Activities on The Territory of The Congo",
    description: 'A crisis committee based on international law and focusing on passing judgments relating to disputes between states. Delegates represent different judges’ part of the International Court of Justice and explore subtopics related to the armed activities on the territory of the Congo such as human rights violations, state responsibility and peaceful settlement.',
    image: '/images/committees/uni/icj.jpg',
    diasMembers: icjData,
  },
  {
    id: 7,
    name: "Security Council",
    topic: "The Nagorno-Karabakh Conflict",
    description: 'A committee focusing on international peace and security issues involving crisis simulations. Different delegates will be representing different countries involved in the conflict. This crisis simulation will focus on the Nagorno-Karabakh conflict, one that finds its roots geopolitical issues. Delegates will be delving into several subtopics related to ceasefire implementations, media and propaganda, disarmament and reconstruction efforts.',
    image: '/images/committees/hs/security.png',
    diasMembers: scData,
  },
  {
    id: 8,
    name: "First Committee of the General Assembly ",
    topic: "Addressing Comprehensive Measures for Nuclear Disarmament",
    description: 'Also known as the Disarmament and International Security Committee (DISEC), the first committee of the general assembly addresses arms control, international security issues and disarmament. The topic of nuclear disarmament will expand on topics such as emerging technologies, nuclear arms control agreements as well as the analysis of crisis management and risk reduction.',
    image: '/images/committees/uni/disec.png',
    diasMembers: GAData,
  },
  {
    id: 9,
    name: "The Commission on Crime Prevention and Criminal Justice",
    topic: "Developing Early Intervention and Protection Strategies in the Fight Against Gender-Based Violence",
    description: 'A committee focusing on issues pertaining to the rule of law and crime prevention. The delegates will delve into criminal justice responses related to a plethora of subtopics including research into marginalized communities, support services, FMG and prevention programs.',
    image: '/images/committees/uni/ccpcj.png',
    diasMembers: ccpcjData,
  },
];

export default allCommitteeData;
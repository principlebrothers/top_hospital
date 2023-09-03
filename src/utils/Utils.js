import britannia from '../assets/britannia.jpeg';
import abt_img from '../assets/abt_img.jpg';
import bethel from '../assets/bethel.png';
import imah from '../assets/IMAH.jpg';
import ugmc from '../assets/UGMC.jpg';
import lucca from '../assets/Lucca.png';
import bank from '../assets/The_Bank_Hospital_Ghana.png';



export const homeSlider = [
  {
    id: 1,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: imah,
  },
  {
    id: 2,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: britannia,
  },
  {
    id: 3,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: abt_img,
  },
  {
    id: 4,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: bethel,
  },
  {
    id: 5,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: ugmc,
  },
  {
    id: 6,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: lucca,
  },
  {
    id: 7,
    title: 'Find the best Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: bank,
  },
];

export const gender = [
  {
    id: 'Male',
    gender: 'Male',
  },
  {
    id: 'Female',
    gender: 'Female',
  },
  {
    id: 'Transgender',
    gender: 'Transgender',
  },
  {
    id: 'Prefer not to say',
    gender: 'Prefer not to say',
  },
];

export const medicalServices = [
  {
    id: 1,
    title: 'In-person Consultation',
    description:
      'Book an In-person appointment at any of the top hospitals in Ghana and get the right medical assistance.',
    button_info: 'Book an In-person Consulation',
  },
  {
    id: 2,
    title: 'Second Medical Opinion',
    description:
      'Get your medical case reviewed by a leading specialist at your choice top hospital in Ghana.',
    button_info: 'Request a Second Medical Opinion',
  },
  {
    id: 3,
    title: 'Emergency Evacuation',
    description:
      'Do you know someone in need of emergency evacuation? Get quality and affordable medical evacuation (ONLY CALL ONLY)',
    button_info: '+233 308 040 040',
  },
];

export const selectedService = [
  {
    id: 'in-person',
    title: 'In-person Consultation'
  },
  {
    id: 'second-opinion',
    title: 'Second Medical Opinion'
  }
]


export function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

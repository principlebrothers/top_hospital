import britannia from '../assets/britannia.jpeg';
import abt_img from '../assets/abt_img.jpg';
import bethel from '../assets/bethel.png';
import imah from '../assets/IMAH.jpg';
import ugmc from '../assets/UGMC.jpg';
import lucca from '../assets/Lucca.png';
import bank from '../assets/The_Bank_Hospital_Ghana.png';
import {
  FaCcVisa,
  FaHotel,
  FaPlaneDeparture,
  FaSuitcase,
  FaFileMedicalAlt,
  FaPlaneArrival
} from 'react-icons/fa';
import { MdOutlineSocialDistance } from 'react-icons/md';
import { BiHealth } from 'react-icons/bi';


export const homeSlider = [
  {
    id: 1,
    title: 'Find the Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: imah,
  },
  {
    id: 2,
    title: 'Find the Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: britannia,
  },
  {
    id: 3,
    title: 'Find the Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: abt_img,
  },
  {
    id: 4,
    title: 'Find the Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: bethel,
  },
  {
    id: 5,
    title: 'Find the Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: ugmc,
  },
  {
    id: 6,
    title: 'Find the Top Hospitals in Ghana.',
    info: "The top hospitals in Ghana strive to deliver top-notch medical care with a holistic approach to quality healthcare and improvement. Ghana's healthcare system includes providers at different levels, including health posts, clinics, district hospitals, regional hospitals, and tertiary hospitals. Top hospitals in Ghana are examples of excellent healthcare, providing a combination of top-notch facilities, knowledgeable medical professionals, and a commitment to providing unmatched patient-centric services. These facilities enable Africans to take greater control over their health and well-being than ever before because they serve as tangible examples of what can be accomplished when technology and human compassion work together.",
    image: lucca,
  },
  {
    id: 7,
    title: 'Find the Top Hospitals in Ghana.',
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
  },
  {
    id: 'visa-assistance',
    title: 'Request Visa Assistance'
  }
]

export const preTravelServices = [
  {
    id: 1,
    title: 'Visa Assistance',
    description:
      'We will assist you through your visa application process to make sure your travel documents are fully compliant.',
    button_info: 'Request Visa Assistance',
  },
  {
    id: 2,
    title: 'Finding a Suitable Hotel',
    description:
      'We will help you find a suitable hotel for your stay in Ghana.',
    button_info: 'Request a Hotel Booking Assistance',
  },
  {
    id: 3,
    title: 'Airport Transfer',
    description:
      'We will facilitate airport transfers, from wherever you may be to the airport and back home, so you can focus on what really matters, getting better.',
    button_info: 'Request an Airport Transfer',
  },
  {
    id: 4,
    title: 'Help with Travel Itinerary',
    description:
      'We are with you every step of the way. We will help you plan your travel itinerary to make sure you have a smooth and stress-free trip.',
    button_info: '+233 308 040 040',
  },
];

export const preTravelIcons = [FaCcVisa, FaHotel, FaPlaneDeparture, FaSuitcase];

export const postTreatmentServices = [
  {
    id: 1,
    title: 'Telemedicine Consultation',
    description:
      'The top hospitals treatment goes beyound the hospital. Book a telemedicine consultation with a any of the top hospitals specialist from the comfort of your home.',
    button_info: 'Request Telemedicine Consultation',
    help_link:
      'https://wa.me/2333550641351?text=Hello, I would like to request a telemedicine consultation with a specialist at a top hospital in Ghana. Kindly get in touch with me.',
  },
  {
    id: 2,
    title: 'Post Treatment Follow-up',
    description:
      'We are committed to going the extra mile and conducting regular check-ins through your dedicated Support Specialist to ensure a smooth recovery process.',
    button_info: 'Request Post Treatment Follow-up',
    help_link:
      'https://wa.me/233550641351?text=Hello, I would like to request a post treatment follow-up. Kindly get in touch with me.',
  },
  {
    id: 3,
    title: 'Medical Reports',
    description:
      'Your medical reports are safe and sound with us. Any doctor’s report, imaging or scan you’ve had after is available at your request for continuity of treatment back home.',
    button_info: 'Request Medical Reports',
    help_link: 'https://wa.me/233550641351?text=Hello, I would like to request my medical reports. Kindly get in touch with me.',
  },
  {
    id: 4,
    title: 'Future Visits',
    description:
      'Need to book a future visit to any of the top hospitals of your choice in Ghana? Worry not, as we are here to ensure a seamless process that is treated with the special care it deserves.',
    button_info: 'Request Future Visits',
    help_link: ''
  },
];


export const postTreatmentIcons = [
  MdOutlineSocialDistance,
  BiHealth,
  FaFileMedicalAlt,
  FaPlaneArrival,
];


export function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

import {
  FerrisWheelIcon,
  FigmaIcon,
  FishFoodIcon,
  FramerIcon,
  ReactIcon,
  TriangleIcon
} from 'hugeicons-react'

export const EDUCATION_DATA = [
  {
    school: "KING MONGKUT'S INSTITUTE OF TECHNOLOGY LADKRABANG",
    degree: 'BACHELOR OF SCIENCE, COMPUTER SCIENCE',
    period: '2022 - PRESENT',
    description:
      'COMPLETED A RIGOROUS COMPUTER SCIENCE PROGRAM, CONCENTRATING ON CYBERSECURITY AND NETWORK INFRASTRUCTURE'
  },
  {
    school: 'SRIAYUDHYA SCHOOL',
    degree: 'HIGH SCHOOL DIPLOMA, SCIENCE-MATHEMATICS',
    period: '2017 - 2020',
    description:
      'STUDIED IN THE SCIENCE-MATHEMATICS PROGRAM, FOCUSING ON SCIENCE AND MATHEMATICS SUBJECTS'
  }
] as const

export const SHOWCASE_IMAGE_DATA = [
  {
    src: 'https://placehold.co/800x600/png',
    alt: '7-11 Store'
  },
  {
    src: 'https://placehold.co/800x600/png',
    alt: 'Profile Image'
  },
  {
    src: 'https://placehold.co/800x600/png',
    alt: 'Night Scene'
  }
] as const

export const TECH_STACK_DATA = [
  {
    icon: <FramerIcon />,
    number: '1',
    name: 'FRAMER',
    description: 'NO CODE TOOL',
    percentage: 30
  },
  {
    icon: <FigmaIcon />,
    number: '2',
    name: 'FIGMA',
    description: 'DESIGN TOOL',
    percentage: 50
  },
  {
    icon: <FerrisWheelIcon />,
    number: '3',
    name: 'KUBERNETES',
    description: 'CONTAINER ORCHESTRATION SYSTEM',
    percentage: 70
  },
  {
    icon: <FishFoodIcon />,
    number: '4',
    name: 'DOCKER',
    description: 'CONTAINERIZATION PLATFORM',
    percentage: 80
  },
  {
    icon: <ReactIcon />,
    number: '5',
    name: 'REACT',
    description: 'JAVASCRIPT LIBRARY',
    percentage: 70
  },
  {
    icon: <TriangleIcon />,
    number: '6',
    name: 'NEXT.JS',
    description: 'REACT FRAMEWORK',
    percentage: 90
  }
] as const

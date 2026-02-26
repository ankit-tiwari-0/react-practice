import React from 'react'
import Card from './components/card'
const freelancers = [
  {
    id: 1,
    name: "Ava Thompson",
    profession: "Frontend Developer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 45,
    skills: ["React", "JavaScript", "CSS", "Tailwind"],
    description:
      "Frontend developer with 4+ years of experience building responsive and user-friendly web applications.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Liam Rodriguez",
    profession: "Mobile App Developer",
    status: "busy",
    type: "Freelancer",
    ratePerHour: 60,
    skills: ["Flutter", "Android", "iOS", "Firebase"],
    description:
      "Mobile developer specializing in cross-platform apps with smooth UI and scalable backend integration.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Sophia Patel",
    profession: "UI/UX Designer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 50,
    skills: ["Figma", "Adobe", "Prototyping", "User Research"],
    description:
      "Creative UI/UX designer focused on crafting intuitive digital experiences.",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Noah Williams",
    profession: "Backend Developer",
    status: "busy",
    type: "Freelancer",
    ratePerHour: 70,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    description:
      "Backend specialist building secure and scalable APIs with strong database expertise.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    name: "Emma Chen",
    profession: "Full Stack Developer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 80,
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    description:
      "Full stack developer experienced in developing end-to-end web solutions.",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 6,
    name: "James Anderson",
    profession: "WordPress Developer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 35,
    skills: ["WordPress", "PHP", "Elementor", "SEO"],
    description:
      "WordPress expert creating fast and SEO-friendly websites for businesses.",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 7,
    name: "Olivia Martinez",
    profession: "Mobile Designer",
    status: "busy",
    type: "Freelancer",
    ratePerHour: 55,
    skills: ["UI Design", "iOS Design", "Android Design", "Prototyping"],
    description:
      "Mobile designer crafting modern and engaging app interfaces.",
    image: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 8,
    name: "William Johnson",
    profession: "DevOps Engineer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 90,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description:
      "DevOps engineer helping teams automate deployments and scale infrastructure efficiently.",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 9,
    name: "Isabella Brown",
    profession: "Graphic Designer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 40,
    skills: ["Photoshop", "Illustrator", "Branding", "Social Media Design"],
    description:
      "Graphic designer creating eye-catching brand identities and marketing visuals.",
    image: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 10,
    name: "Benjamin Davis",
    profession: "Data Analyst",
    status: "busy",
    type: "Freelancer",
    ratePerHour: 75,
    skills: ["Python", "SQL", "Power BI", "Data Visualization"],
    description:
      "Data analyst turning raw data into actionable insights.",
    image: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
    id: 11,
    name: "Mia Robinson",
    profession: "React Native Developer",
    status: "available",
    type: "Freelancer",
    ratePerHour: 65,
    skills: ["React", "JS", "Redux", "Firebase"],
    description:
      "React Native developer building high-performance cross-platform mobile apps.",
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    id: 12,
    name: "Ethan Walker",
    profession: "Cybersecurity Specialist",
    status: "busy",
    type: "Freelancer",
    ratePerHour: 95,
    skills: ["Network Security", "Hacking", "Testing", "OWASP"],
    description:
      "Cybersecurity specialist focused on protecting applications and networks from vulnerabilities.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {
      freelancers.map(function(ele){
       return  <Card name ={ele.name} profession = {ele.profession} 
       status = {ele.status} type = {ele.type} ratePerHour = {ele.ratePerHour}
       skills = {ele.skills} description = {ele.description} img = {ele.image}/>    
      })
      }     
    </div>
  )
}

export default App
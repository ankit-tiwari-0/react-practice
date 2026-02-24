import Multiple from './components/multiple-card'
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/013/734/184/original/3d-google-logo-google-is-usa-multinational-corporation-free-vector.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.-HIrpRMx0kqqSEVJxOFMsgHaEB?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.AuggztWv8Hwzt2zjbJcztAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/21/ff/0d/21ff0dec3b8043807d8a335aafd24f8d.png",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049",
    companyName: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.zf8g1tolI3HRPumaeETgcAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.XDxTk0xxRfEKu_2iIkMx0QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Adobe",
    datePosted: "9 days ago",
    post: "JavaScript Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://freelogopng.com/images/all_img/1659761297uber-icon.png",
    companyName: "Uber",
    datePosted: "2 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.jdQ0-zCqys8HUsVr1-EE6AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Kolkata, India"
  }
];
  return (
    <div className='parent'>
     {
      jobOpenings.map(function(elem, idx){
        return <div key={idx}> <Multiple com = {elem.companyName} location = {elem.location}
      pay = {elem.pay} tag1 ={elem.tag1} tag2 ={elem.tag2} post ={elem.post} 
       datePosted = {elem. datePosted} brandLogo = {elem.brandLogo}/>
      </div>
      })
     }    
    </div>
  )
}

export default App
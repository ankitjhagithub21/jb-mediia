import React from 'react'

const Gallery = () => {
    const photos = [
        "https://marketplace.canva.com/EAFcM_qo3x0/1/0/1600w/canva-golden-elegant-awards-ceremony-video-pj10V5xS_lI.jpg",
        "https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.webp?b=1&s=170667a&w=0&k=20&c=BOVLG8A-VuYZmXlDvvv-uO0Z-7dgmGYTY6vd2q6R8C4=",
        "https://img.freepik.com/free-photo/waiting-room-with-monitors_1232-1390.jpg",
        "https://i.pinimg.com/originals/48/89/38/488938d6eec996de2365b072357aac16.jpg",
        "https://www.rajwadaevents.com/uploaded-files/feature-images/Corporate-Events03_50_48.jpg",
        "https://images.prismic.io/buzzsprout%2F289c3fc3-68eb-4cf8-bf0d-25d5fa195415_podcast-sponsors.png?auto=compress,format"
      ]
  return (
   <section id='gallery'>
  <div>
  <h2 className='text-center text-3xl lg:text-4xl mb-5'>
          Gallery
        </h2>
    <div className='flex flex-wrap'>
       {
        photos.map((photo,index)=>{
            return <div className='lg:w-1/3 w-full md:w-1/2' key={index} >
            <img src={photo} className='object-cover h-full w-full object-center'/>
        </div>
        })
       }
    </div>
  </div>
   </section>
  )
}

export default Gallery
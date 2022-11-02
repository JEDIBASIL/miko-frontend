import { Blockquote } from '@mantine/core';

const Endorsement = () => {
  return (
    <div className='Endorsement'>
        <h1>Don’t take our word for it. Hear directly from our users</h1>
        <div className='endorsementContainer'>
            <div className='card'>
                <Blockquote cite="– Forrest Gump">
                <p>Life is like an npm install – you never know what you are going to get.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7FGcBt860gRWJK06-0BXq8anAGV767wuQE1xT11sJq4UYzCrQxNuMjvcF-iH8cOGXxKk&usqp=CAU" alt="" />
                </Blockquote>
            </div>
            <div className='card'>
                <Blockquote cite="– Forrest Gump">
                    <p>Life is like an npm install – you never know what you are going to get.</p>
                    <img src="https://res.cloudinary.com/highereducation/image/upload/f_auto,fl_lossy,q_auto/c_fill,f_auto,fl_lossy,q_auto:best,w_600,h_512,g_face/v1587065822/TheBestSchools.org/hero-images/office-manager-careers-hero.jpg" alt="" />
                </Blockquote>
            </div>
            <div className='card'>
                <Blockquote cite="– Forrest Gump">
                <p> Life is like an npm install – you never know what you are going to get.</p>
                <img src="https://cdn1.careeraddict.com/uploads/article/54889/Office-Manager-2.jpg" alt="" />
                </Blockquote>
            </div>
        </div>
    </div>
  )
}

export default Endorsement
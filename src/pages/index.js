import Showcase from '../../components/Showcase'
import OurPricing from '../../components/OurPricing'
import Footer from '../../components/Footer'
import { MultiSection, SingleSection } from '../../components/Section'
const Index = () => {

  return (
    <>

      <Showcase />

      <SingleSection
        title='Efficient and Performant'
        subTitle='Athletes are expected to be efficient with their body movements, while coaches should be efficient with their coaching tools and techniques'
        btnTitle='Start your free trial'
      />

      <MultiSection
        showGraphic={true}
        containerClassName='!items-start'
        graphicClassName='!bottom-52'
        title='Video Assessment is a proven coaching tool'
        subTitle='Keep your video organized, private and rich with meaningful feedback, fostering greater relationships and positive outcomes'
        image={<img className='relative z-10 w-full max-w-full' src='/assets/video-assessment.png' alt="" />}
      />

      <MultiSection
        orderReverse={true}
        showGraphic={true}
        containerClassName='bg-theme px-36'
        title='#tags on the video timeline are valuable'
        subTitle='Allow your athletes to see themselves in action while receiving meaningful, directional feedback'
        image={<img className='relative z-10 w-5/6 max-w-5/6' src='/assets/tags-timeline.png' alt="" />}
      />

      <MultiSection
        title='Engage and communicate '
        subTitle='Comments and conversations add context to the goal and allow for greater results during . your next in person session '
        image={<img className='relative z-10 w-5/6 max-w-5/6' src='/assets/engage-communicate.png' alt="" />}
      />

      <SingleSection
        title='Coaching Workflow'
        borderTop={true}
        containerClassName='mb-52'
        subTitle='Make better use of your time, while offering personalized feedback to each of your athletes which can be reviewed as much as needed, fostering better technique, improve outcomes and stronger relationships'
        btnTitle='Register Now'
      />

      <MultiSection
        containerClassName='bg-theme px-36'
        title='Record, comment and collaborate'
        subTitle='Using an asynchronous video communication workflow you can support more athletes in a personal way on and off the course.  '
        image={<img className='relative z-10 w-full max-w-full' src='/assets/record-collaborate.png' alt="" />}
      />

      <MultiSection
        orderReverse={true}
        showGraphicAutomateTagging={true}
        title='automate tagging using recognized language'
        subTitle='Define your own keywords and phrases to dynamically generate tags in real time during video recording '
        image={<img className='relative z-10 w-full max-w-full' src='/assets/automate-tagging.png' alt="" />}
      />

      {/* <OurPricing /> */}

      <Footer />
    </>
  )
}


export default Index
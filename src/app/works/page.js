import WorksTabs from '@/components/Works/WorksTabs'
import './works.css'
import Works from '@/components/Works/Works'
import { allWorks } from '@/lib/works'

const page = () => {
  return (
    <main className='works-content'>
      <h1 className='works-content__title'>Selected work</h1>
      <p className='works-content__descr'>A selection of recent projects across branding, product design and digital experiences for ambitious teams.</p>

      <WorksTabs />
      <Works list={allWorks} />
    </main>
  )
}

export default page

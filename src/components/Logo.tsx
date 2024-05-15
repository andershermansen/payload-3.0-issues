/* works */
// import Line from './line.svg'

/* does not work */
import Line from '@/components/line.svg'

function Logo() {
  return (
    <div>
      My logo <Line />
    </div>
  )
}

export default Logo

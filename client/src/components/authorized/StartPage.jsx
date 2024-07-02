import { Link } from 'react-router-dom'
import CreateSetBtn from '../ui/buttons/CreateSetBtn'
import SetsSections from './SetsSections'

export default function StartPage() {
  return (
    <div className="flex gap-[3rem] flex-col">
      <div className="flex gap-[1rem] flex-wrap flex-col md:flex-row">
        <Link to="/create-set" className="flex-1 w-auto link">
          <CreateSetBtn
            title="Create set"
            description="And fill it with your own materials"
            imageName="quill"
          />
        </Link>
        <Link to="/create-set-by-source" className="flex-1 w-auto link">
          <CreateSetBtn
            title="Create set by source"
            description="Just provide us text or link"
            imageName="chip"
          />
        </Link>
      </div>
      <SetsSections />
    </div>
  )
}

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function LoadingState() {
    return (
        <div className='text-center'>
            <FontAwesomeIcon icon={faCircleNotch} spin className="ps-loading-icon tw-w-8 tw-h-[2rem!important]" />
        </div>
    )
}

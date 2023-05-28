'use client'
import Button from '../../../common/Button/Button'
import React, { useRef } from 'react'
import FocusTrap from 'focus-trap-react'
import Link from 'next/link'
import { MdClear } from 'react-icons/md'
import Fetch from '../../../services/fetch'
import { usePathname } from 'next/navigation'

const DeleteMovieForm: React.FC = () => {
  const dialogContainer = useRef<HTMLDivElement | null>(null)

    const pathname = usePathname()
    const movieId = pathname.split('/')[2]

    const handleDelete = (): void => {
    void Fetch(`movies/${movieId}`, {
      method: 'DELETE'
    })
  }

  return (
        <FocusTrap focusTrapOptions={{
          fallbackFocus: '#close'
        }}>
            <div className='dialog-container' role='dialog'>
                <div className="dialog-wrapper" ref={dialogContainer}>
                    <div className='dialog-content'>
                        <div className="dialog-body">
                            <>
                                <div>
                                    <span>Are you sure you want to delete this movie?</span>
                                </div>
                                <div className='delete-movie-form__buttons'>
                                    <Link href={'/movies'}>
                                        <Button
                                            title='Confirm'
                                            onClick={handleDelete}
                                        ></Button>
                                    </Link>
                                </div>
                            </>
                        </div>
                    </div>
                    <button id="close" className='dialog-popup-close'>
                        <Link href={'/movies'}>
                            <MdClear
                                data-testid='close-details'
                            ></MdClear>
                        </Link>
                    </button>
                </div>
            </div>
        </FocusTrap>
  )
}

export default DeleteMovieForm

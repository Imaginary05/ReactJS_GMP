import Button from '../../common/Button/Button'
import React from 'react'

export interface DeleteMovieFormProps {
  onConfirmClick: () => void
}

const DeleteMovieForm: React.FC<DeleteMovieFormProps> = ({
  onConfirmClick
}) => {
  return (
        <>
            <div>
                <span>Are you sure you want to delete this movie?</span>
            </div>
            <div className='delete-movie-form__buttons'>
                <Button
                    title='Confirm'
                    onClick={onConfirmClick}
                ></Button>
            </div>
        </>
  )
}

export default DeleteMovieForm

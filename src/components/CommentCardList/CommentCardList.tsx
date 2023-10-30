import { Teacher } from '../../models'
import CommentCard from '../CommentCard/CommentCard'

import './commentCardList.css'

function CommentCardList({ teacher }: { teacher: Teacher }) {
  return (
    <div className="commentCardList">
      <h2>Comentários</h2>

      <div className="commentCardListContainer">
        {teacher.reviews.length ? (
          teacher.reviews.map((review) => (
            <CommentCard
              key={review.id}
              comment={review.comment}
              rating={review.rating}
            />
          ))
        ) : (
          <p>
            Esse professor ainda não possui comentários, seja o primeiro a
            comentar!
          </p>
        )}
      </div>
    </div>
  )
}

export default CommentCardList

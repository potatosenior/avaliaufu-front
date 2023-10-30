import './commentCard.css'

function CommentCard({ comment, rating }: { comment: string; rating: number }) {
  return (
    <div className="commentCard">
      <h4>Aluno</h4>

      <p>{comment}</p>
    </div>
  )
}

export default CommentCard

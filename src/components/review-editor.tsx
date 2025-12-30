import { CreateReviewAction } from '@/actions/create-review.action';
import style from './review-editor.module.css';

export default function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form className={style.form_container} action={CreateReviewAction}>
        <input name="movieId" value={movieId} hidden readOnly />
        <textarea name="content" placeholder="리뷰 내용" required />
        <div className={style.submit_container}>
          <input name="author" placeholder="작성자" required />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}

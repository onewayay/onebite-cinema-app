'use client';

import { DeleteReviewAction } from '@/actions/delete-review.action';
import { useActionState, useRef } from 'react';

export default function ReveiwItemDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: number;
  movieId: number;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    DeleteReviewAction,
    null
  );

  return (
    <form ref={formRef} action={formAction}>
      <input name="reviewId" value={reviewId} hidden readOnly />
      <input name="bookId" value={movieId} hidden readOnly />

      {isPending ? (
        <div>...</div>
      ) : (
        <div onClick={() => formRef.current?.requestSubmit()}>
          🗑️ 리뷰 삭제하기
        </div>
      )}
    </form>
  );
}

import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "repliedToCommentId";

export const CommentTitle = (record: TComment): string => {
  return record.repliedToCommentId?.toString() || String(record.id);
};

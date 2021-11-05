import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(userid:${userId})`}</p>;
};

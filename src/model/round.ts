import { Id } from "./common";

/**
 * A round of a group.
 */
export interface Round {
  /** ID of the round. */
  id: Id;

  /** ID of the parent stage. */
  stage_id: Id;

  /** ID of the parent group. */
  group_id: Id;

  /** The number of the round in its group. */
  number: number;
}

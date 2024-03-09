import { Id } from "./common";

/**
 * A group of a stage.
 */
export interface Group {
  /** ID of the group. */
  id: Id;

  /** ID of the parent stage. */
  stage_id: Id;

  /** The number of the group in its stage. */
  number: number;
}

import type { Session } from "@api/utils/auth";
import type { Database } from "@vision_dashboard/db/client";

export type Context = {
  Variables: {
    db: Database;
    session: Session;
    teamId: string;
  };
};
